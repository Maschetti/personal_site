const techList = {
    FrontEnd: [
        {
            name: 'React',
            imgSrc: './src/images/tech/react.svg'
        },
        {
            name: 'Django',
            imgSrc: './src/images/tech/django.svg'
        },
        {
            name: 'JavaScript',
            imgSrc: './src/images/tech/javascript.svg'
        },
        {
            name: 'TypeScript',
            imgSrc: './src/images/tech/typescript.svg'
        },
        {
            name: 'HTML',
            imgSrc: './src/images/tech/html.svg'
        },
        {
            name: 'CSS',
            imgSrc: './src/images/tech/css.svg'
        }
    ],
    BackEnd: [
        {
            name: 'Django',
            imgSrc: './src/images/tech/django.svg'
        },
        {
            name: 'Node.js',
            imgSrc: './src/images/tech/nodejs.svg'
        },
        {
            name: 'C',
            imgSrc: './src/images/tech/c.svg'
        },
        {
            name: 'C++',
            imgSrc: './src/images/tech/c++.svg'
        },
        {
            name: 'MySQL',
            imgSrc: './src/images/tech/mysql.svg'
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

        for(let sectionName in techList) {
            const section = this.createSection(sectionName);
            
            const cardContainer = this.createCardContainer();

            techList[sectionName].forEach(tech => {
                const card = this.createCard(tech);

                cardContainer.appendChild(card);
            }); 

            section.appendChild(cardContainer);
            technologies.appendChild(section);
        }

        shadow.appendChild(technologies);
    }

    styles() {
        const style = document.createElement('style');
    
        style.textContent = `
            .technologies {
                padding: 1em;

                display: flex;
                flex-direction: column;
                gap: 2em;
            }

            .section {
                p {
                    font-size: 0.8em;
                    text-align: center;
                }
            }

            .section-title {
                font-size: 1.3em;
            }

            .card-container {
                display: flex;
                flex-direction: row;
                gap: 1.5em;
            }

            img {
                width: 4em;
                height: 4em;
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
        section.classList.add('section');

        const title = document.createElement('h1');
        title.classList.add('section-title');
        title.textContent = _sectionName;
        section.appendChild(title);

        return section;
    }

    createCard(_tech) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = _tech.imgSrc;
        card.appendChild(img);

        const name = document.createElement('p');
        name.textContent = _tech.name;
        card.appendChild(name);

        return card;
    }

    createCardContainer() {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        return cardContainer;
    }
}

customElements.define('technologies-container', Technologies);
