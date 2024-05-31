const previewList = {
    en: {
        1: {
            videoSrc: 'src/videos/portifolio.mp4',
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

        const goBackButton = this.createGoBackButton(language);

        const preview = this.createPreview();

        const video = this.createVideo(translated.videoSrc);

        const techBoard = this.createTechBoard(translated.tech);

        preview.appendChild(goBackButton);
        preview.appendChild(video);
        preview.appendChild(techBoard);

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

                padding: 2em;
            }

            .go-back-button {
                display: flex;
                flex-direction: row;
            }

            .go-back-button > * {
                margin: 0;
            }

            video {
                width: 20em;
            }

            video:hover {
                controls: true;
            }

            .tech-board {
                width: 100%;
                p {
                    font-size: 0.7em;
                    text-align: center;
                }

                display: flex;
                flex-direction: column;
                gap: 0.5em;
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
                heigth: 3em;
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
        const video = document.createElement('video');
        video.autoplay = true;
        console.log(_source)

        const source = document.createElement('source');
        source.src = _source;

        console.log(source);

        video.appendChild(source);

        video.onmouseover = () => {
            video.controls = true;
        }

        video.onmouseleave = () => {
            video.controls = false;
        }

        return video;
    }

    createTechBoard(_tech) {
        const board = document.createElement('div');
        board.classList.add('tech-board');

        const title = this.createTechTitle(_tech.title);
        board.appendChild(title)

        const container = this.createCardContainer();
        _tech.list.forEach(item => {
            const card = this.createTechCard(item);
            container.appendChild(card);
        });
        board.appendChild(container);

        return board;
    }

    createTechTitle(_title) {
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

    createGoBackButton(language) {
        const button = document.createElement('button');
        const symbol = document.createElement('span');
        const text = document.createElement('p');

        symbol.innerHTML = '&lsaquo;';
        text.textContent = language == 'en' ? 'Go Back': 'Voltar';

        button.classList.add('go-back-button');

        button.appendChild(symbol);
        button.appendChild(text);

        button.onclick = () => {
            document.getElementById('profile').style.display = 'flex';

            const item = document.createElement('projects-container');
            const section = document.getElementById('section-container');
            section.innerHTML = '';
            section.appendChild(item);
        }

        return button;
    }
}

customElements.define('preview-container', Preview);
