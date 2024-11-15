// resumeData.js

const resumeData = {
    resumes: [
        {
            personalInfo: {
                name: "John Doe",
                title: "Software Engineer",
                email: "john.doe@example.com",
                phone: "+1 (123) 456-7890",
                photo: "https://example.com/john-doe-photo.jpg"
            },
            sections: [
                {
                    type: "Education",
                    items: [
                        {
                            institution: "University of Technology",
                            degree: "B.S. Computer Science",
                            period: "2018-2022",
                            achievements: [
                                {
                                    type: "Award",
                                    content: "Dean's List",
                                    mentions: ["academic excellence", "top performer"]
                                }
                            ]
                        },
                        {
                            institution: "Tech Institute",
                            degree: "M.S. Artificial Intelligence",
                            period: "2022-2024"
                            // No achievements for this education item
                        }
                    ]
                },
                {
                    type: "Work Experience",
                    items: [

                        {
                            title: "Software Engineer",
                            company: "Tech Corp",
                            period: "2024-Present",
                            description: "Leading AI model <__python__>development</__python__> and implementation.",
                            achievements: [
                                {
                                    type: "Project",
                                    content: "Implemented a <__ML__>state-of-the-art NLP model</__ML__>",
                                    mentions: ["AI", "natural language processing"]
                                },
                                {
                                    type: "Recognition",
                                    content: "Employee of the Month",
                                    mentions: ["leadership", "innovation"]
                                }
                            ]
                        },
                        {
                            title: "Junior Developer",
                            company: "Startup Inc",
                            period: "2022-2024",
                            description: "Developed scalable web applications."
                            // No achievements for this work experience
                        },
                        {
                            title: "Intern",
                            company: "Innovation Labs",
                            period: "Summer 2021",
                            description: "Assisted in research on natural language processing.",
                            achievements: [
                                {
                                    type: "Publication",
                                    content: "Co-authored a paper on sentiment analysis",
                                    mentions: ["research", "machine learning"]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "Skills",
                    items: [
                        "Python",
                        "JavaScript",
                        "Machine Learning",
                        "Natural Language Processing",
                        "Web Development"
                    ]
                }
            ],
            abilities: [
                { skill: "Technical Problem Solving", score: 85 },
                { skill: "Communication Skills", score: 75 },
                { skill: "Machine Learning Expertise", score: 90 },
                { skill: "System Design", score: 80 },
                { skill: "Adaptability and Learning", score: 70 }
            ],
            interviewQuestions: [
                "How do you approach designing and implementing a new generative AI model?",
                "Can you explain your experience with transformer architectures?",
                "How do you handle ethical considerations in AI development?",
                "Describe a challenging AI project you've worked on and how you overcame obstacles.",
                "How do you stay updated with the latest advancements in generative AI?"
            ],
            technicalDefinitions: [
                {
                    term: "Transformer",
                    definition: "A deep learning model architecture used primarily in natural language processing tasks."
                },
                {
                    term: "GAN",
                    definition: "Generative Adversarial Network, a class of machine learning frameworks for generating new data."
                },
                {
                    term: "BERT",
                    definition: "Bidirectional Encoder Representations from Transformers, a transformer-based machine learning technique for NLP pre-training."
                }
            ]
        }
        // You can add more resume objects here if needed
    ]
};