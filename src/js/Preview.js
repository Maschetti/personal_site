const previewList = {
    en: {
        1: {
            videoSrc: 'src/videos/portifolio.mp4',
            links: {
                github: 'https://github.com/Maschetti/personal_site',
                domain: 'http://localhost:5500'
            },
            tech: {
                title: 'Technologies',
                list: [
                    {
                        name: 'JavaScript',
                        imgSrc: './src/images/tech/javascript.svg'
                    },
                    {
                        name: 'HTML',
                        imgSrc: './src/images/tech/html.svg'
                    },
                    {
                        name: 'CSS',
                        imgSrc: './src/images/tech/css.svg'
                    }
                ] 
            },
            objective: 'The objective of this site is to showcase my programming skills, projects, and ideas. ' +
            'Building it from scratch allows me to experiment with new technologies and stay current in the field. ' +
            'It serves as a comprehensive portfolio for potential employers and clients, and a platform to share insights and tutorials with the programming community, fostering connections and contributing to collective knowledge.',
            insigths: "I've solidified my foundational skills and gained extensive knowledge about Shadow DOM and Web Components. " +
            "This expertise allows me to create modular, reusable components with encapsulated styles and behavior, enhancing the performance and maintainability of web applications."
        }
    },

    pt: {
        1: {
            videoSrc: 'src/videos/portifolio.mp4',
            links: {
                github: '',
                domain: ''
            },
            tech: {
                title: 'Technologies',
                list: [
                    {
                        name: 'JavaScript',
                        imgSrc: './src/images/tech/javascript.svg'
                    },
                    {
                        name: 'HTML',
                        imgSrc: './src/images/tech/html.svg'
                    },
                    {
                        name: 'CSS',
                        imgSrc: './src/images/tech/css.svg'
                    }
                ] 
            },
            objective: 'O objetivo deste site é mostrar minhas habilidades em programação, projetos e ideias. ' +
            'Construí-lo do zero me permite experimentar novas tecnologias e me manter atualizado na área. ' +
            'Ele serve como um portfólio abrangente para potenciais empregadores e clientes, além de ser uma plataforma para compartilhar insights e tutoriais com a comunidade de programação, promovendo conexões e contribuindo para o conhecimento coletivo.',
            insigths: 'Eu solidifiquei minhas habilidades fundamentais e adquiri um conhecimento extenso sobre Shadow DOM e Web Components. ' +
            'Essa expertise me permite criar componentes modulares e reutilizáveis, com estilos e comportamentos encapsulados, melhorando o desempenho e a manutenção de aplicações web.'
        }
    }
}

class Preview extends HTMLElement {
    constructor() {
        super();

        this.build()
    }

    build() {
        const language = localStorage.getItem('language');
        const projectId = localStorage.getItem('projectId');
        const translated = previewList[language][projectId];

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.styles());

        const preview = this.createPreview();

        const video = this.createVideo(translated.videoSrc);
        const linkButtons = this.createLinkButton(translated.links);
        video.appendChild(linkButtons);

        const techBoard = this.createTechBoard(translated.tech);

        const objective = this.createTextBoard(translated.objective, 'Objective');
        const insigths = this.createTextBoard(translated.objective, 'Insigths');

        preview.appendChild(video);
        preview.appendChild(techBoard);
        preview.appendChild(objective);
        preview.appendChild(insigths);

        shadow.appendChild(preview);
    }

    styles() {
        const style = document.createElement('style');
        
        style.textContent = `
            .preview {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 2em;

                padding: 2em;
            }

            video {
                width: 30em;
            }

            video:hover {
                controls: true;
            }

            .video-container {
                display: flex;
                flex-direction: column;
                gap: 1em;
            }

            .button-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 1em;
            }

            .link-button {
                padding: 0.5em;

                display: flex;
                flex-direction: row;
                justify-content: center;

                width: 6em;

                color: #a4a4a4;
                text-decoration: none;

                border-radius: 5px;
            }

            .link-button:hover {
                background-color: rgba(0, 0, 0, 0.5);
                color: white;
            }

            .board {
                width: 100%;
                p {
                    font-size: 0.7em;
                    text-align: center;
                }

                display: flex;
                flex-direction: column;
                gap: 0.5em;
            }

            .board * {
                margin: 0;
            }

            .card-container {
                padding: 0 1em;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 1.5em;
            }

            .tech-card {
                width: fit-content;
            }

            .title {
                font-size: 1.2em;
                margin: 0;
            }

            img {
                width: 3em;
                height: 3em;
            }

            .text {
                color: #a4a4a4;
                text-align: justify !important;
                font-size: 1em !important;
                line-height: 1;

                padding: 0 1em;
            }
        `

        return style;
    }

    createPreview() {
        const preview = document.createElement('div');
        preview.classList.add('preview');
        return preview;
    }

    createVideo(_source) {
        const div = document.createElement('div');
        div.classList.add('video-container');

        const video = document.createElement('video');
        video.autoplay = true;

        const source = document.createElement('source');
        source.src = _source;

        video.appendChild(source);

        video.onmouseover = () => {
            video.controls = true;
        }

        video.onmouseleave = () => {
            video.controls = false;
        }

        div.appendChild(video);

        return div;
    }

    createLinkButton(_links) {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        
        if (_links.github) {
            const github = document.createElement('a');
            github.classList.add('link-button')
            github.href = _links.github;
            github.target = '_blank';
            github.textContent = 'GitHub';
            buttonContainer.appendChild(github);
        }
    
        if (_links.domain) {
            const site = document.createElement('a');
            site.classList.add('link-button')
            site.href = _links.domain;
            site.target = '_blank';
            site.textContent = 'Website';
            buttonContainer.appendChild(site);
        }
    
        return buttonContainer;
    }

    createTechBoard(_tech) {
        const board = document.createElement('div');
        board.classList.add('board');

        const title = this.createTitle(_tech.title);
        board.appendChild(title)

        const container = this.createCardContainer();
        _tech.list.forEach(item => {
            const card = this.createTechCard(item);
            container.appendChild(card);
        });
        board.appendChild(container);

        return board;
    }

    createTitle(_title) {
        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = _title;
        return title;
    }

    createCardContainer() {
        const container = document.createElement('div');
        container.classList.add('card-container');
        return container;
    }

    createTechCard(_tech) {
        const card = document.createElement('div');
        card.classList.add('tech-card');

        const img = document.createElement('img');
        img.src = _tech.imgSrc;
        card.appendChild(img);

        const name = document.createElement('p');
        name.textContent = _tech.name;
        card.appendChild(name);

        return card;
    }

    createTextBoard(_string, _title) {
        const board = document.createElement('div');
        board.classList.add('board');

        const title = this.createTitle(_title);
        board.appendChild(title);

        const text = this.createText(_string, 'text');
        board.appendChild(text);
        
        return board;
    }

    createText(_text, _class) {
        const paragraph = document.createElement('p');
        paragraph.classList.add(_class);
        paragraph.textContent = _text;
        return paragraph;
    }
    
}

customElements.define('preview-container', Preview);
