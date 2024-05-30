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

const switchList = {
    en: 'Traduza',
    pt: 'Translate'
};

document.addEventListener("DOMContentLoaded", () => {
    _language = localStorage.getItem('language');
    if(_language == null) {
        _language = 'en';
        localStorage.setItem('language', 'en');
    };

    populateProfile(_language);
    populateNavBar(_language);
    populateSwitch(_language);

    const navBar = document.getElementById('navbar');
    navBar.addEventListener('click', (event) => {
        if(event.target.tagName === 'LI' || event.target.closest('li')) {
            const listItem = event.target.closest('li');
            const id = listItem.id;

            setContainer(navBarContainers[id]);
            localStorage.setItem('container', navBarContainers[id]);
        }
    });

    const switchButton = document.getElementById('switch-button');
    switchButton.addEventListener('click', () => {
        localStorage.setItem('language', _language == 'en' ? 'pt' : 'en');
        location.reload();
    });

    window.addEventListener('load', () => {
        const tempContainer = localStorage.getItem('container');
        
        if (tempContainer) {
            setContainer(tempContainer);
        }
    });

});

function populateProfile(_language) {
    const translatedProfile = profileList[_language];
    document.getElementById('resume-text').innerText = translatedProfile.cv;
    document.getElementById('sub-title').innerText = translatedProfile.subTitle;
};

function populateNavBar(_language) {
    const translatedNavBar = navBarList[_language];

    const navBar = document.getElementById('navbar');

    navBar.querySelectorAll('p').forEach((element, index) => {
        element.textContent = translatedNavBar[index];
    })
};

function populateSwitch(_language) {
    const text = switchList[_language];
    
    document.getElementById('switch-text').textContent = text;
    document.getElementById('switch-button').textContent = _language == 'en' ? 'pt' : 'en';
};

function setContainer(_container) {
    const item = document.createElement(_container);
    const section = document.getElementById('section-container');
    section.innerHTML = '';
    section.appendChild(item);
};
