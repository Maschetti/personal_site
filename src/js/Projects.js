const projectsList = {
    en: [
        {
            id: 1,
            img: './src/images/portifolio.png',
            title: 'Portifolio',
            description: 'My personal site, where I show a bit of me and my projects!',    
        },
    ],

    pt: [
        {
            id: 1,
            img: './src/images/portifolio.png',
            title: 'Portifólio',
            description: 'Meu site pessoal, onde eu mostro um pouco de mim e meus projetos!',
        }
    ]

};

class Projects extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.styles());

        const projects = this.createProjects();

        const translated = projectsList[localStorage.getItem('language')];

        translated.forEach((project) => {
            const card = this.createCard(project);
            projects.appendChild(card);
        })

        shadow.appendChild(projects);
    }

    styles() {
        const style = document.createElement('style');
        
        style.textContent = `
            .projects {
                margin: 0;
                padding: 1em;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                
                list-style-type: none;
            }

            .card {
                margin: 0;
                padding: 0;

                display: flex;
                flex-direction: column;

                max-width: 10em;
                height: 14.2em;

                border-radius: 3%;

                transition: background-color 0.2s;

                img {
                    width: 9em;
                    height: 9em;
                    padding: 0.5em;

                    border-radius: 7.5%;
                }

                p {
                    font-weight: 300;

                    margin: 0;
                }

                .title {
                    font-size: 0.8em;

                    font-weight: 500;
                }

                .description {
                    font-size: 0.75em;
                    color: #a4a4a4;
                    text-align: justify;
                }
            }    
            
            .card:hover {
                background-color: #212121;
                cursor: pointer;
            }

            .text-container {
                display: flex;
                flex-direction: column;
                gap: 0.5em;
                padding: 0.5em
            }

        `;

        return style;
    }

    createProjects() {
        const projects = document.createElement('ul');
        projects.classList.add('projects');
        return projects;
    }

    createCard(project) {
        const card = document.createElement('li');
        card.classList.add('card');

        const img = this.createCardImage(project.img);
        card.appendChild(img);

        const textContainer = this.createCardTextContainer();

        const title = this.createCardTitle(project.title);
        textContainer.appendChild(title);

        const desciption = this.createCardDesciption(project.description);
        textContainer.appendChild(desciption);

        card.appendChild(textContainer);

        card.onclick = () => {
            localStorage.setItem('projectId', project.id);
            document.getElementById('profile').style.display = 'none';

            const preview = document.createElement('preview-container');
            const section = document.getElementById('section-container');
            section.innerHTML = '';
            section.appendChild(preview);
        }

        return card;
    }

    createCardImage(imgSrc) {
        const img = document.createElement('img');
        img.src = imgSrc;
        return img;
    }

    createCardTitle(_title) {
        const title =  document.createElement('p');
        title.classList.add('title');
        title.textContent = _title;
        return title;
    }

    createCardDesciption(_description) {
        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = _description;
        return description;
    }

    createCardTextContainer() {
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        return textContainer;
    }
}

customElements.define('projects-container', Projects);
