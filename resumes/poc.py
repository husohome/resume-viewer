import glob
import random
from langchain import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from pydantic import BaseModel, EmailStr
from typing import List, Optional

class Experience(BaseModel):
    company: str
    position: str
    duration: str
    description: str

class Education(BaseModel):
    institution: str
    degree: str
    duration: str

class ResumeSchema(BaseModel):
    experience: List[Experience]
    education: List[Education]

class ResumeReader:
    def __init__(self, directory_path, openai_api_key):
        self.directory_path = directory_path
        self.file_path = None
        self.content = None
        self.llm = OpenAI(api_key=openai_api_key)

    def list_md_files(self):
        return glob.glob(f"{self.directory_path}/*.md")

    def read_resume(self):
        md_files = self.list_md_files()
        if not md_files:
            raise FileNotFoundError("No .md files found in the specified directory.")
        self.file_path = random.choice(md_files)
        with open(self.file_path, 'r') as file:
            self.content = file.read()

    def parse_resume(self):
        if self.content is None:
            raise ValueError("Resume content is empty. Please read the resume first.")
        prompt_template = PromptTemplate(
            input_variables=["resume"],
            template="""
            Extract the following information from the resume:
            1. Contact Information (Email and Phone)
            2. Work Experience
            3. Educational Background

            Resume:
            {resume}
            """
        )
        chain = LLMChain(llm=self.llm, prompt=prompt_template)
        result = chain.run(resume=self.content)
        return ResumeSchema.parse_raw(result)

    def get_experience(self):
        parsed_data = self.parse_resume()
        return parsed_data.experience

    def get_education(self):
        parsed_data = self.parse_resume()
        return parsed_data.education


# Example usage
if __name__ == "__main__":
    
    from resume_reader import ResumeReader
    reader = ResumeReader("resumes")
    reader.read_resume()
    print("Contact Info:", reader.get_contact_info())
    print("Experience:", reader.get_experience())
    print("Education:", reader.get_education())