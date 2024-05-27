const navBarContainers = {
    'About Me': 'about-me-container',
    'Projects': 'projects-container',
    'Technologies': 'technologies-container'
}

document.getElementById('navbar').addEventListener('click', (event) => {
    console.log('entrou')
    if(event.target.tagName === 'LI' || event.target.closest('li')) {
        const listItem = event.target.closest('li');
        // Retrieve the text value of the clicked item
        const textValue = listItem.querySelector('p').textContent;
        

        const item = document.createElement(navBarContainers[textValue]);
        document.getElementById('section-container').appendChild(item);
    }
});
