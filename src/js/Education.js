const educationList = {
    en: [
        {
            title: 'The Pontifical Catholic University of Minas Gerais',
            date: '2024 - now',
            text: 'I am learning a lot of practical aspects of computing. The coursework is designed to provide hands-on experience, allowing me to apply theoretical knowledge to real-world scenarios. ' +
            'Additionally, I have joined scientific research projects, which have been both enriching and challenging. This involvement in research is expanding my skills and deepening my understanding of the field, making my education a comprehensive and practical learning experience.'
        },
        {
            title: 'Federal University of Ouro Preto',
            date: '2021 - 2023',
            text: 'The challenging coursework and dedicated faculty deepened my theoretical knowledge, while the diverse campus community and extracurricular activities fostered personal growth. ' +
            'Balancing academic and personal challenges taught me resilience, effective time management, and the importance of teamwork, shaping me into a well-rounded individual ready for future endeavors.'
        },
    ],

    pt: [
        {
            title: 'Pontifícia Universidade Católica de Minas Gerais',
            date: '2024 - hoje',
            text: 'Na PUC Minas estou aprendendo muitos aspectos práticos da computação. O currículo é projetado para fornecer experiências práticas, permitindo-me aplicar o conhecimento teórico em situações reais. ' +
            'Além disso, estou me envolvendo em projetos de pesquisa científica, que têm sido enriquecedores e desafiadores. Esse envolvimento na pesquisa está ampliando minhas habilidades e aprofundando meu entendimento na área, tornando minha educação umas experiência de aprendizado completa e prática.'
        },
        {
            title: 'Universidade Federal de Ouro Preto',
            date: '2021 - 2023',
            text: 'O currículo desafiador e os professores dedicados aprofundaram meus conhecimentos teóricos, enquanto a diversa comunidade do campus e as atividades extracurriculares promoveram meu crescimento pessoal. ' +
            'Equilibrar os desafios acadêmicos e pessoais me ensinou resiliência, gerenciamento eficaz do tempo e a importância do trabalho em equipe, moldando-me em um indivíduo completo e preparado para futuros desafios.'
        },
    ]
}

class Education extends HTMLElement {
    constructor() {
        super();

        this.build()
    }

    build() {
        const translated = educationList[localStorage.getItem('lenguage')];

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.styles());

        const education = this.createEducation();

        translated.forEach(formation => {
            const board = this.createTextBoard(formation);
            education.appendChild(board);
        });

        shadow.appendChild(education);
    }

    styles() {
        const style = document.createElement('style');
        
        style.textContent = `
            .education {
                padding: 1em;
                display: flex;
                flex-direction: column;
                gap: 2em;
            }

            p {
                font-size: 1em;
                margin: 0;

                text-align: justify;
                white-space: pre-line;
                line-height: 1.5;
                color: #a4a4a4;
            }

            .date {
                text-align: right;
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

                max-width: 40em;

                box-shadow: 5px 5px black;
            }
        `

        return style;
    }

    createEducation() {
        const education = document.createElement('div');
        education.classList.add('education');
        return education;
    }

    createTextBoard(_info, _class) {
        const board = document.createElement('div');
        board.classList.add('board');

        const title = this.createTitle(_info.title);
        board.appendChild(title);
        
        const text = this.createText(_info.text);
        board.appendChild(text);

        const date = this.createDate(_info.date);
        board.appendChild(date);

        return board;
    }

    createTitle(_title) {
        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = _title;
        return title;
    }

    createText(_text) {
        const text = document.createElement('p');
        text.textContent = _text;
        return text;
    }

    createDate(_date) {
        const date = document. createElement('p');
        date.classList.add('date');
        date.textContent = _date;
        return date;
    }
}

customElements.define('education-container', Education);