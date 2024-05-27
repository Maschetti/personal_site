class AboutMe extends HTMLElement {
    constructor() {
        super();

        this.build()
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'});

        shadow.appendChild(this.styles());

    }

    createAboutMe() {
        const aboutMe = document.createElement('div');
        aboutMe.classList.add('about-me');
        return aboutMe;
    }

    styles() {
        const style = document.createElement('style');
        
        style.textContent = `
            .about-me {

            }
        `

        return style;

    }
}

customElements.define('about-me-container', AboutMe);