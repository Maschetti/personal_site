const techList = {
    'FrontEnd': [
        {
            tech: 'React',
            imgSrc: ''
        },
        {
            tech: 'Django',
            imgSrc: ''
        },
        {
            tech: 'JavaScript',
            imgSrc: ''
        },
        {
            tech: 'TypeScript',
            imgSrc: ''
        },
        {
            tech: 'HTML',
            imgSrc: ''
        },
        {
            tech: 'CSS',
            imgSrc: ''
        }
    ],
    BackEnd: [
        {
            tech: 'Django',
            imgSrc: ''
        },
        {
            tech: 'Node.js',
            imgSrc: ''
        },
        {
            tech: 'C',
            imgSrc: ''
        },
        {
            tech: 'C++',
            imgSrc: ''
        }
    ]
}

class Technologies extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.styles());

        const technologies = this.createTechnologies();

        for(let key in techList) {
            const section = this.createSection(key);
            technologies.appendChild(section);
        }

        shadow.appendChild(technologies);
    }

    styles() {
        const style = document.createElement('style');
    
        style.textContent = `
            .technologies {

            }
        `

        return style;
    }

    createTechnologies() {
        const tech = document.createElement('div');
        tech.classList.add('technologies');
        return tech;
    }

    createSection(_sectionName) {
        const section = document.createElement('div');
        section.classList.add(_sectionName);

        const title = document.createElement('p');
        title.classList.add('section-title');
        title.textContent = _sectionName;
        section.appendChild(title);

        return section;
    }
}

customElements.define('technologies-container', Technologies);
