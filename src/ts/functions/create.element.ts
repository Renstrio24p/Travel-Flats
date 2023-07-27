import { Properties, PropertyContainer, you } from "./project.function"
import styles from '../../sass/modules/app.module.scss'
import { Permissions } from "./utils/enums.util"

export const Create_Element = () => {

    let isLoggedIn: boolean
    isLoggedIn = true;

    function FormatPricesComma(value: number):string {
        return value.toLocaleString();
    }

    function showDetails(authorityStatus: (boolean | Permissions), element : HTMLDivElement, price: number): void {
        if (authorityStatus) {
            const priceDisplay = document.createElement('div')
            priceDisplay.innerHTML = '&#8369;' + FormatPricesComma(price) + '/night'
            element.appendChild(priceDisplay)
        }
    }

    for(let i = 0; i < Properties.length; i++){
        const card = document.createElement('card') as HTMLDivElement;
        card.classList.add(`${styles.card}`);
        card.innerHTML = Properties[i].title;
        const image = document.createElement('img');
        image.setAttribute('src',Properties[i].image);
        image.setAttribute('alt','flat image');
        image.classList.add(`${styles['image-flat']}`)
        card.appendChild(image);
        PropertyContainer?.appendChild(card);
        showDetails(you.permissions, card, Properties[i].price)
    }
}
