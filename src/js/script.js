const navBarContainers = {
    'about-nav': 'about-me-container',
    'projects-nav': 'projects-container',
    'tech-nav': 'technologies-container'
};
localStorage.setItem('lenguage', 'en');

document.getElementById('navbar').addEventListener('click', (event) => {
    if(event.target.tagName === 'LI' || event.target.closest('li')) {
        const listItem = event.target.closest('li');
        const id = listItem.id;

        const item = document.createElement(navBarContainers[id]);

        const section = document.getElementById('section-container');
        section.innerHTML = '';
        section.appendChild(item);
    }
});
