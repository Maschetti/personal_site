class Technologies extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.styles());
    }

    styles() {
        const style = document.createElement('style');
    
        style.textContent = `
            .technologies {

            }
        `

        return style;
    }
}

customElements.define('technologies-container', Technologies);
