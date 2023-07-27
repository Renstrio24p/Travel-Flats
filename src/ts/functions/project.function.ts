import { ShowReviewTotal, getTopTwoReviews, populateUser } from "./utils/project.util";
import styles from '../../sass/modules/app.module.scss';
import { Create_Element } from "./create.element";
import { Permissions, loyaltyUser } from "./utils/enums.util";
import { Property } from "./utils/interfaces.util";
import { Review } from "./utils/interfaces.util";
import { MainProperties } from "./classes/classes";

export 
      const you = {
        FirstName : 'Bobby',
        LastName: 'brown',
        permissions: Permissions.ADMIN,
        isReturning: true,
        age: 35,
        stayedAt: [
            'Florida-Home',
            'Oman-Flat',
            'Tokyo-bungalow',
        ]
    }

export 
    let 
        ReviewTotalDisplay: HTMLElement | null,
        returningUserDisplay: HTMLElement | null,
        userNameDisplay: HTMLElement | null,
        PropertyContainer: HTMLElement | null,
        container: HTMLDivElement | null,
        button: HTMLButtonElement | null,
        reviewContainer: HTMLDivElement | null,
        footer: HTMLElement | null,
        mainImageContainer: HTMLDivElement | null,
        image: HTMLImageElement | null,

        YourMainProperty = new MainProperties(
          'travel/flats/italian-property.jpg',
          'Cozzy French',
          [{
            name: 'Olive',
            stars: 5,
            loyaltyUser: loyaltyUser.GOLD_USER,
            date: '12-04-2023'
          }]
          ),
        Properties: Property[];

export const Project_Function = () => {

    ReviewTotalDisplay = document.querySelector('#reviews');
    returningUserDisplay = document.querySelector('#returning-user');
    userNameDisplay = document.querySelector('#user');
    PropertyContainer = document.querySelector(`.${styles.properties}`);
    reviewContainer = document.querySelector(`.${styles.reviews}`);
    container = document.querySelector(`.${styles.container}`)
    button = document.querySelector('button');
    footer = document.querySelector('#footer');
    mainImageContainer = document.querySelector(`.${styles['main-image']}`);
    image = document.createElement('img');
    image.setAttribute('src',YourMainProperty.src);
    mainImageContainer?.appendChild<HTMLImageElement>(image!);
    
    const 
        reviews: Review[] = [
            {
                name: 'Sheia',
                stars: 5,
                loyaltyUser: loyaltyUser.GOLD_USER,
                date: '01-04-2021',
            },
            {
                name: 'Andrzej',
                stars: 3,
                loyaltyUser: loyaltyUser.BRONZE_USER,
                date: '28-03-2021',
            },
            {
                name: 'Omar',
                stars: 4,
                loyaltyUser: loyaltyUser.SILVER_USER,
                date: '27-03-2021',
            },
        ];

        Properties = [
            {
              image: 'travel/flats/flat1.jpg',
              title: 'Cozzy Suites',
              price: 15000,
              Location: {
                FirstLine: 'Light Mall Plaza',
                City: 'Mandaluyong',
                ZipCode: 1550,
                Country: 'Philippines'
              },
              ContactDetails : [
                 +6392323232323,
                'abc@gmail.com',
              ],
              Availabletorent: true,
            },
            {
              image: 'travel/flats/flat2.jpg',
              title: 'Suites Apartment',
              price: 8000,
              Location: {
                FirstLine: 'Glaza Homes Flats',
                City: 'Taguig',
                ZipCode: 1555,
                Country: 'Philippines'
              },
              ContactDetails: [
                +639454545455,
                'dreg4@outlook.com',
              ],
              Availabletorent: false,
            },
            {
              image: 'travel/flats/flat3.jpg',
              title: 'Laz Mall Green',
              price: 9000,
              Location: {
                FirstLine: 'Evergreen Fields',
                City: 'Cavite',
                ZipCode: 9555,
                Country: 'Philippines'
              },
              ContactDetails: [
                 +63945454545,
                'mariamia34@xyz.com',
              ],
              Availabletorent: true,
            },
            {
              image: 'travel/flats/flat5.jpg',
              title: 'Malia Hotel',
              price: 35000,
              Location: {
                FirstLine: 'Room 4',
                City: 'Malia',
                ZipCode: 45334,
                Country: 'Malaysia'
              },
              ContactDetails: [
                +60349822083,
                'lee34@gmail.com',
              ],
              Availabletorent: false,
            },
            
            
        ]

        populateUser(you.isReturning, you.FirstName);
        ShowReviewTotal(reviews.length,reviews[0].name,reviews[0].loyaltyUser);

        Create_Element();

        // declaring current location with a tuple and making sure if it is a null or not

        let count = 0
        function addReviews(array:Review[] ) : void {
            if (!count ) {
                count++
                const topTwo = getTopTwoReviews(array)
                for (let i = 0; i < topTwo.length; i++) {
                    const card = document.createElement('card')
                    card.classList.add(`${styles['review-card']}`)
                    card.innerHTML = '&nbsp;' + topTwo[i].stars + ' stars from ' + topTwo[i].name + ' '
                     reviewContainer?.appendChild(card)
                }
                if(button) {
                  container?.removeChild(button) 
                }  
            }
        }

  if(button){
    button.addEventListener('click', () => addReviews(reviews))
  }

        let currentLocation: [string,string,number] | null;

        // putting a values in the currentLocation variable
            currentLocation = ['Manila','10:47',24]

        // if currentLocation either footer or both are doesn't exists it will display 'undefined',
        // if not it will display the footer output

        if((!currentLocation || !footer)){
          if(footer){
            footer.innerHTML = 'Undefined'
          }
        } else {
          footer.innerHTML = currentLocation[0] + ' '
                           + currentLocation[1] + ' ' 
                           + currentLocation[2] + 'deg celcius';
        }
        
    }