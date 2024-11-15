// resumeViewer.js

function resumeViewer() {
    const generateColor = (tag) => {
        // Simple hash function to generate a color based on the tag
        let hash = 0;
        for (let i = 0; i < tag.length; i++) {
            hash = tag.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = hash % 360;
        return `hsl(${hue}, 70%, 50%)`;
    };

    const styles = {
        underline: () => `border-b-2 pb-0.5`,
        box: () => `border-2 rounded px-1`,
        hashtag: () => `bg-opacity-20 px-1 rounded-full text-sm font-semibold`
    };

    return {
        currentIndex: 0,
        resumes: resumeData.resumes,
        leftColumn: [],
        middleColumn: [],
        rightColumn: [],
        colorPalette: {},
        init() {
            this.renderCurrentResume();
        },
        renderCurrentResume() {
            const resume = this.resumes[this.currentIndex];
            
            this.leftColumn = [
                this.renderPersonalInfo(resume.personalInfo),
                this.renderInterviewSteps()
            ];
            
            this.middleColumn = [
                ...resume.sections.map(section => this.renderSection(section))
            ];
            
            this.rightColumn = [
                this.renderAbilities(resume.abilities),
                this.renderInterviewQuestions(resume.interviewQuestions),
                this.renderTechnicalDefinitions(resume.technicalDefinitions)
            ];
        },
        renderPersonalInfo(info) {
            return `
                <div class="bg-gray-800 p-4 rounded-lg">
                    <img src="${info.photo}" alt="${info.name}" class="w-32 h-32 rounded-full mx-auto mb-4">
                    <h2 class="text-2xl font-bold text-center">${info.name}</h2>
                    <p class="text-gray-400 text-center">${info.title}</p>
                    <p class="text-sm text-center">${info.email}</p>
                    <p class="text-sm text-center">${info.phone}</p>
                </div>
            `;
        },
        renderInterviewSteps() {
            const steps = [
                'Introduce yourself',
                'Check photo',
                'Discuss experience',
                'Ending remarks'
            ];
            return `
                <div class="bg-gray-800 p-4 rounded-lg mt-4">
                    <h3 class="text-xl font-bold mb-2">Interview Steps</h3>
                    <ul class="list-disc list-inside">
                        ${steps.map(step => `<li>${step}</li>`).join('')}
                    </ul>
                </div>
            `;
        },

        renderXmlDunderTags(text, style = 'hashtag') {
            const tagPattern = /<__(\w+)__>(.*?)<\/__\1__>/g;
            let lastIndex = 0;
            let result = '';

            while (true) {
                const match = tagPattern.exec(text);
                if (!match) break;

                const [fullMatch, tag, content] = match;
                if (!this.colorPalette[tag]) {
                    this.colorPalette[tag] = generateColor(tag);
                }
                const color = this.colorPalette[tag];

                result += text.slice(lastIndex, match.index);

                const styleFunc = styles[style] || styles.hashtag;
                const styleClass = styleFunc();

                result += `<span class="xml-dunder-tag ${styleClass}" style="--tag-color: ${color};" data-tag="${tag}">${content}</span>`;

                lastIndex = tagPattern.lastIndex;
            }

            result += text.slice(lastIndex);
            return result;
        },

        renderSection(section) {
            let content;
            if (section.type === "Work Experience" || section.type === "Education") {
                content = section.items.map(item => `
                    <div class="mb-4">
                        <h4 class="font-semibold">${this.getItemTitle(item, section.type)}</h4>
                        <p class="text-sm text-gray-400">${item.period}</p>
                        ${item.description ? `<p>${this.renderXmlDunderTags(item.description)}</p>` : ''}
                        ${this.renderAchievements(item.achievements)}
                    </div>
                `).join('');
            } else {
                content = `
                    <ul class="list-disc list-inside">
                        ${section.items.map(item => `<li>${this.renderXmlDunderTags(item)}</li>`).join('')}
                    </ul>
                `;
            }
            return `
                <div class="bg-gray-800 p-4 rounded-lg mt-4">
                    <h3 class="text-xl font-bold mb-2">${section.type}</h3>
                    ${content}
                </div>
            `;
        },

        renderAchievements(achievements) {
            if (!achievements || achievements.length === 0) return '';
            
            return `
                <div class="mt-2">
                    <h5 class="font-semibold text-sm text-gray-300">Achievements:</h5>
                    <ul class="list-disc list-inside">
                        ${achievements.map(achievement => `
                            <li>
                                <span class="text-yellow-400">${achievement.type}:</span> 
                                ${this.renderXmlDunderTags(achievement.content)}
                                ${this.renderMentions(achievement.mentions)}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        },
        getItemTitle(item, sectionType) {
            if (sectionType === "Work Experience") {
                return `${item.title} at ${item.company}`;
            } else if (sectionType === "Education") {
                return `${item.degree}, ${item.institution}`;
            }
            return '';
        },
        renderAchievements(achievements) {
            if (!achievements || achievements.length === 0) return '';
            
            return `
                <div class="mt-2">
                    <h5 class="font-semibold text-sm text-gray-300">Achievements:</h5>
                    <ul class="list-disc list-inside">
                        ${achievements.map(achievement => `
                            <li>
                                <span class="text-yellow-400">${achievement.type}:</span> 
                                ${achievement.content}
                                ${this.renderMentions(achievement.mentions)}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        },
        renderMentions(mentions) {
            if (!mentions || mentions.length === 0) return '';
            
            return `
                <span class="text-xs text-gray-400">
                    (${mentions.map(mention => `<span class="bg-gray-700 px-1 rounded">${mention}</span>`).join(', ')})
                </span>
            `;
        },
        renderAbilities(abilities) {
            const maxScore = Math.max(...abilities.map(a => a.score));
            return `
                <div class="bg-gray-800 p-4 rounded-lg">
                    <h3 class="text-xl font-bold mb-2">Abilities</h3>
                    <div class="space-y-2">
                        ${abilities.map(ability => `
                            <div class="flex items-center">
                                <span class="w-32 text-right mr-2">${ability.skill}</span>
                                <div class="bg-blue-500 h-4 rounded" style="width: ${(ability.score / maxScore) * 100}%"></div>
                                <span class="ml-2">${ability.score}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        },
        renderInterviewQuestions(questions) {
            return `
                <div x-data="{ open: false }" class="bg-gray-800 p-4 rounded-lg mt-4">
                    <button @click="open = !open" class="w-full text-left font-bold text-xl mb-2 flex justify-between items-center">
                        Interview Questions
                        <svg :class="{'rotate-180': open}" class="w-5 h-5 transform transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div x-show="open" class="mt-2">
                        <ul class="list-disc list-inside">
                            ${questions.map(q => `<li>${q}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        },
        renderTechnicalDefinitions(definitions) {
            return `
                <div x-data="{ open: false }" class="bg-gray-800 p-4 rounded-lg mt-4">
                    <button @click="open = !open" class="w-full text-left font-bold text-xl mb-2 flex justify-between items-center">
                        Technical Definitions
                        <svg :class="{'rotate-180': open}" class="w-5 h-5 transform transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div x-show="open" class="mt-2">
                        <dl>
                            ${definitions.map(def => `
                                <dt class="font-semibold text-blue-400">${def.term}</dt>
                                <dd class="ml-4 mb-2 text-gray-300">${def.definition}</dd>
                            `).join('')}
                        </dl>
                    </div>
                </div>
            `;
        },
        nextResume() {
            if (this.currentIndex < this.resumes.length - 1) {
                this.currentIndex++;
                this.renderCurrentResume();
            }
        },
        prevResume() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.renderCurrentResume();
            }
        }
    };
}