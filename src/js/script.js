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

localStorage.setItem('lenguage', 'en');

let translatedNavBar = navBarList[localStorage.getItem('lenguage')];
let translatedProfile = profileList[localStorage.getItem('lenguage')];

const navBar = document.getElementById('navbar');

document.getElementById('resume-text').innerText = translatedProfile.cv;
document.getElementById('sub-title').innerText = translatedProfile.subTitle;

navBar.querySelectorAll('p').forEach((element, index) => {
    element.textContent = translatedNavBar[index];
})

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
