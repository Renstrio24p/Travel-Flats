class CreateElements {
    constructor() {
        

        customElements.define('TravelPage', class TravelTypes extends HTMLElement {
            constructor(){
                super();
            }
        });

        customElements.define('card', class Cards extends HTMLElement {
            constructor(){
                super();
            }
        });

    }
}

new CreateElements();
