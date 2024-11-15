import glob
import random
from langchain import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

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
        return result

    def get_contact_info(self):
        parsed_data = self.parse_resume()
        # Extract contact information from parsed_data
        # Implement extraction logic here
        return parsed_data.get("Contact Information", {})

    def get_experience(self):
        parsed_data = self.parse_resume()
        # Extract experience from parsed_data
        # Implement extraction logic here
        return parsed_data.get("Work Experience", "")

    def get_education(self):
        parsed_data = self.parse_resume()
        # Extract education from parsed_data
        # Implement extraction logic here
        return parsed_data.get("Educational Background", "")

# Example usage
if __name__ == "__main__":
    reader = ResumeReader("resumes", "your_openai_api_key")
    reader.read_resume()
    print("Contact Info:", reader.get_contact_info())
    print("Experience:", reader.get_experience())
    print("Education:", reader.get_education())