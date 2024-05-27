const techList = {
    'FrontEnd': [
        {
            name: 'React',
            imgSrc: './src/images/tech/React.png'
        },
        {
            name: 'Django',
            imgSrc: './src/images/tech/Django.png'
        },
        {
            name: 'JavaScript',
            imgSrc: ''
        },
        {
            name: 'TypeScript',
            imgSrc: ''
        },
        {
            name: 'HTML',
            imgSrc: ''
        },
        {
            name: 'CSS',
            imgSrc: ''
        }
    ],
    BackEnd: [
        {
            name: 'Django',
            imgSrc: ''
        },
        {
            name: 'Node.js',
            imgSrc: ''
        },
        {
            name: 'C',
            imgSrc: ''
        },
        {
            name: 'C++',
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

        for(let sectionName in techList) {
            const section = this.createSection(sectionName);
            console.log(sectionName);
            techList[sectionName].forEach(tech => {
                const card = this.createCard(tech);

                section.appendChild(card);
            }); 

            technologies.appendChild(section);
        }

        shadow.appendChild(technologies);
    }

    styles() {
        const style = document.createElement('style');
    
        style.textContent = `
            .technologies {

            }

            .img-container {
                width: 8em;
                height: 8em;
                overflow: hidden;
            }

            img {
                width: 100%;
                height: auto;
                object-fit: cover;
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

    createCard(_tech) {
        const card = document.createElement('div');
        card.classList.add('card');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.src = _tech.imgSrc;
        imgContainer.appendChild(img);

        card.appendChild(imgContainer);

        const name = document.createElement('p');
        name.textContent = _tech.name;
        card.appendChild(name);

        return card;
    } 
}

customElements.define('technologies-container', Technologies);
