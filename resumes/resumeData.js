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
                            description: "我使用 <__python__>Django</__python__> 完成了一個高性能網路應用項目，實現了<__business__>80%的性能提升</__business__>。同時利用 <__python__>TensorFlow</__python__> 實現了<__ai__>自然語言處理</__ai__>功能，<__business__>提高了用戶參與度40%</__business__>。",
                            achievements: [
                                {
                                    type: "Project",
                                    content: "Implemented a state-of-the-art NLP model",
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
                            description: "Developed scalable <__ml__>web applications.</__ml__>"
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
        },


        {
            personalInfo: {
                name: "約翰 DDDDD",
                title: "軟體工程師",
                email: "john.doe@example.com",
                phone: "+1 (123) 456-7890",
                photo: "https://example.com/john-doe-photo.jpg"
            },
            sections: [
                {
                    type: "Education",
                    items: [
                        {
                            institution: "科技大學",
                            degree: "計算機科學學士",
                            period: "2018-2022",
                            achievements: [
                                {
                                    type: "Award",
                                    content: "院長嘉許名單",
                                    mentions: ["學術卓越", "頂尖表現者"]
                                }
                            ]
                        },
                        {
                            institution: "科技學院",
                            degree: "人工智能碩士",
                            period: "2022-2024"
                            // 此教育項目沒有成就
                        }
                    ]
                },
                {
                    type: "Work Experience",
                    items: [
                        {
                            title: "軟體工程師",
                            company: "科技公司",
                            period: "2024-至今",
                            description: "我使用 <__python__>Django</__python__> 完成了一個高性能網路應用項目，實現了<__business__>80%的性能提升</__business__>。同時利用 <__python__>TensorFlow</__python__> 實現了<__ai__>自然語言處理</__ai__>功能，<__business__>提高了用戶參與度40%</__business__>。",
                            achievements: [
                                {
                                    type: "Project",
                                    content: "實施了最先進的自然語言處理模型",
                                    mentions: ["人工智能", "自然語言處理"]
                                },
                                {
                                    type: "Recognition",
                                    content: "月度最佳員工",
                                    mentions: ["領導力", "創新"]
                                }
                            ]
                        },
                        {
                            title: "初級開發人員",
                            company: "新創公司",
                            period: "2022-2024",
                            description: "開發可擴展的<__ml__>網絡應用程序。</__ml__>"
                            // 此工作經驗沒有成就
                        },
                        {
                            title: "實習生",
                            company: "創新實驗室",
                            period: "2021年夏季",
                            description: "協助進行自然語言處理研究。",
                            achievements: [
                                {
                                    type: "Publication",
                                    content: "共同撰寫了一篇關於情感分析的論文",
                                    mentions: ["研究", "機器學習"]
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
                        "機器學習",
                        "自然語言處理",
                        "網頁開發"
                    ]
                }
            ],
            abilities: [
                { skill: "技術問題解決", score: 85 },
                { skill: "溝通技巧", score: 75 },
                { skill: "機器學習專業知識", score: 90 },
                { skill: "系統設計", score: 80 },
                { skill: "適應性和學習能力", score: 70 }
            ],
            interviewQuestions: [
                "你如何著手設計和實施新的生成式人工智能模型？",
                "你能解釋一下你在轉換器架構方面的經驗嗎？",
                "你如何處理人工智能開發中的倫理考量？",
                "描述一個你曾經參與的具有挑戰性的人工智能項目，以及你是如何克服障礙的。",
                "你如何保持對生成式人工智能最新進展的了解？"
            ],
            technicalDefinitions: [
                {
                    term: "Transformer",
                    definition: "一種主要用於自然語言處理任務的深度學習模型架構。"
                },
                {
                    term: "GAN",
                    definition: "生成對抗網絡，一類用於生成新數據的機器學習框架。"
                },
                {
                    term: "BERT",
                    definition: "來自Transformers的雙向編碼器表示，一種基於transformer的機器學習技術，用於NLP預訓練。"
                }
            ]
        }




        // You can add more resume objects here if needed
    ]
};