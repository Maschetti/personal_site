const projectsList = [
    {image: 'https://via.placeholder.com/150', title: 'portifolio', description: 'my site'}
];

class Projects extends HTMLElement {
    constructor(projectsList=[]) {
        super();
        this.projectsList = projectsList;
        this.build()
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.styles());
        console.log('entrou', projectsList);
        const projects = this.createProjects();

        projectsList.forEach((project) => {
            const card = this.createCard(project);
            projects.appendChild(card);
        })

        shadow.appendChild(projects);
    }

    styles() {
        const style = document.createElement('style');
        
        style.textContent = `
            .projects {

            }
        `

        return style;

    }

    createProjects() {
        const projects = document.createElement('div');
        projects.classList.add('projects');
        return projects;
    }

    createCard(project) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = this.createCardImage(project.img);
        card.appendChild(img);

        const title = this.createCardTitle(project.title);
        card.appendChild(title);

        const desciption = this.createCardDesciption(project.description);
        card.appendChild(desciption);


        return card;
    }

    createCardImage(imgSrc) {
        const img = document.createElement('img');
        img.src = imgSrc;
        return img;
    }

    createCardTitle(_title) {
        const title =  document.createElement('h1');
        title.textContent = _title;
        return title;
    }

    createCardDesciption(_description) {
        const desciption = document.createElement('p');
        desciption.textContent = _description;
        return desciption;
    }
}

customElements.define('projects-container', Projects);