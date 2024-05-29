const navBarContainers = {
    'about-nav': 'about-me-container',
    'education-nav': 'education-container',
    'projects-nav': 'projects-container',
    'tech-nav': 'technologies-container'
};

const navBarList = {
    en: [
        'About me',
        'Formation',
        'Projects',
        'Technologies'
    ],

    pt: [
        'Sobre mim',
        'Formação',
        'Projetos',
        'Tecnologias'
    ]
};

const profileList = {
    en: {
        subTitle: "Computer Science bachelor's student.",
        cv: 'Resume'
    },

    pt: {
        subTitle: 'Graduando em Ciência da Computação.',
        cv: 'Currículo'
    }
};

document.addEventListener("DOMContentLoaded", () => {
    lenguage = localStorage.getItem('lenguage');
    if(lenguage == null) {
        lenguage = 'en';
        localStorage.setItem('lenguage', 'en');
    }
    lenguage = 'pt';
    localStorage.setItem('lenguage', 'pt');

    populateProfile(lenguage);
    populateNavBar(lenguage);

    const navBar = document.getElementById('navbar');

    navBar.addEventListener('click', (event) => {
        if(event.target.tagName === 'LI' || event.target.closest('li')) {
            const listItem = event.target.closest('li');
            const id = listItem.id;

            const item = document.createElement(navBarContainers[id]);

            const section = document.getElementById('section-container');
            section.innerHTML = '';
            section.appendChild(item);
        }
    });

});

function populateProfile(_lenguage) {
    const translatedProfile = profileList[_lenguage];
    document.getElementById('resume-text').innerText = translatedProfile.cv;
    document.getElementById('sub-title').innerText = translatedProfile.subTitle;
};

function populateNavBar(_lenguage) {
    const translatedNavBar = navBarList[_lenguage];

    const navBar = document.getElementById('navbar');

    navBar.querySelectorAll('p').forEach((element, index) => {
        element.textContent = translatedNavBar[index];
    })
};
