const info = {
    en: {
        softSkills: {
            title: 'Soft Skills',
            skills: [
                'Leadrship',
                'Teamwork',
                'Analytical thinking',
                'Adaptability',
                'Organization',
                'Curiosity',
                'Integrity'
            ]
        },
        introduction: {
            title: 'About Me',
            text: `Hi, I'm Mateus Viana Maschietto!  
                  I'm a 22 year old Computer Science student pursuing my Bachelor's degree.  
                  Since I was young, technology has been my passion, and now it's a reality I live every day. 
                  My ambition is to one day earn a doctorate in Computer Science and I have the confidence that one day I will achive my dream.`
        },
        hobbies: {
            title: 'Hobbies',
            text: `In my free time, I have two main hobbies: playing games and and hanging out with my friends.
                  `
        }
    },

    pt: {
        softSkills: {
            title: 'Soft Skills',
            skills: [
                'Liderança',
                'Trabalho em equipe',
                'Analitico',
                'Adaptabilidade',
                'Organizado',
                'Curioso',
                'Integro'
            ]
        },
        introduction: {
            title: 'Sobre mim',
            text: `Olá, eu sou Mateus Viana Maschietto! 
                  Tenho 22 anos e sou estudante de Ciência da Computação, cursando o bacharelado. 
                  Desde jovem, a tecnologia tem sido minha paixão e agora é uma realidade que vivo todos os dias. 
                  Minha ambição é um dia obter um doutorado em Ciência da Computação e tenho a confiança de que um dia alcançarei meu sonho.`
        }
    }
}

class AboutMe extends HTMLElement {
    constructor() {
        super();

        this.build()
    }

    build() {
        const translated = info[localStorage.getItem('lenguage')];

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.styles());

        const aboutMe = this.createAboutMe();

        const introduction = this.createIntroduction(translated.introduction);
        aboutMe.appendChild(introduction);

        const softSkills = this.createSoftSkills(translated.softSkills);
        aboutMe.appendChild(softSkills);

        shadow.appendChild(aboutMe);
    }

    styles() {
        const style = document.createElement('style');
        
        style.textContent = `
            .about-me {
                padding: 1em;
                
                display: grid;
                grid-template-columns: minmax(20em, 40em) auto;
                grid-template-rows: auto auto;

                gap: 2em;
            }

            p {
                font-size: 1em;
                margin: 0;
                text-align: justify;
                color: #a4a4a4;
            }

            h1 {
                margin: 0;
                font-size: 1.5em;
            }

            .board  {
                border-radius: 3%;
                padding: 1em;
                background-color: #212121;

                display: flex;
                flex-direction: column;
                gap: 1em;

                box-shadow: 5px 5px black;
            }

            .soft-skills {
                grid-row: span 2;
                width: fit-content;
                height: auto;
            }
        `

        return style;
    }

    createAboutMe() {
        const aboutMe = document.createElement('div');
        aboutMe.classList.add('about-me');
        return aboutMe;
    }

    createSoftSkills(_info) {
        const softSkills = document.createElement('div');
        softSkills.classList.add('soft-skills');
        softSkills.classList.add('board');

        const title = this.createTitle(_info.title);
        softSkills.appendChild(title);

        _info.skills.forEach(element => {
            const skill = this.createSkill(element);
            softSkills.appendChild(skill);
        });

        return softSkills;
    }

    createTitle(_title) {
        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = _title;
        return title;
    }

    createSkill(_skill) {
        const skill = document.createElement('p');
        skill.textContent = _skill;
        return skill;
    }

    createIntroduction(_introduction) {
        const introduction = document.createElement('div');
        introduction.classList.add('intro');
        introduction.classList.add('board');

        const title = this.createTitle(_introduction.title);
        introduction.appendChild(title);
        
        const text = this.createText(_introduction.text);
        introduction.appendChild(text);

        return introduction;
    }

    createText(_text) {
        const text = document.createElement('p');
        text.textContent = _text;
        return text;
    }
}

customElements.define('about-me-container', AboutMe);