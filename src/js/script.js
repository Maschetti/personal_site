document.getElementById('about').addEventListener('click', () => {
    const item = document.createElement('about-me');

    document.getElementById('section-container').appendChild(item);
})

document.getElementById('projects-nav').addEventListener('click', () => {
    const item = document.createElement('projects-container');
    document.getElementById('section-container').appendChild(item);
})