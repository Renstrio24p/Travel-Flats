import styles from '../sass/modules/app.module.scss'
import { Project_Function } from './functions/project.function';

export default function TravelTourPage(Travel: HTMLDivElement):void{

    Travel.innerHTML = (`

    <div class="${styles['nav-bar']}">
        <div>
            <img src='travel/sofa-logo.png' alt='sofa logo' class="${styles.logo}" />
        </div>
        <h3 class="${styles['user-container']}">Welcome
            <span id="returning-user"></span>
            <span id="user"></span>
        </h3>
    </div>

    <div class="${styles.container}">
        <div class="${styles['main-image']}"></div>
        <h5 id="reviews"></h5>
        <button class='${styles.button}'>Get reviews</button>
        <div class="${styles.reviews}"></div>        
         <div class="${styles.break}"></div>
         
        <h3 class='${styles.recommend}'>Other Properties recommended to you:</h3> 
        <div class="${styles.properties}"></div>
    </div>

    <div class='${styles.footer}' id='footer'></div>

    `)

    Project_Function();
}