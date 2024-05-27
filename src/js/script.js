const navBarContainers = {
    'About Me': 'about-me-container',
    'Projects': 'projects-container',
    'Technologies': 'technologies-container'
};

document.getElementById('navbar').addEventListener('click', (event) => {
    if(event.target.tagName === 'LI' || event.target.closest('li')) {
        const listItem = event.target.closest('li');
        const textValue = listItem.querySelector('p').textContent;

        const item = document.createElement(navBarContainers[textValue]);

        const section = document.getElementById('section-container');
        section.innerHTML = '';
        section.appendChild(item);
    }
});
