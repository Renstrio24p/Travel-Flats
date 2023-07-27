
import { loyaltyUser } from "./enums.util"
import { ReviewTotalDisplay, returningUserDisplay, userNameDisplay } from "../project.function"
import  { Review }  from "./interfaces.util"

export function ShowReviewTotal(value : number, reviewer: string, isLoyalty: loyaltyUser):void{
    const IconDisplay = loyaltyUser.GOLD_USER ? '⭐' : ''

    if(ReviewTotalDisplay){
        ReviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value)  + ' | last reviewed by.  ' + reviewer + ' ' + IconDisplay 
    }
}

export function populateUser(isReturning:boolean, userName: any ): void {
    if (isReturning){
        if(returningUserDisplay){
            returningUserDisplay.innerHTML = 'back'
        }
        if(userNameDisplay){
            userNameDisplay.innerHTML = userName
        }
    }
}


export function Add(firstValue:number,SecondValue: number): number{

    return firstValue + SecondValue;
    
}

export function makeMultiple(value: number):string {
    if (value > 1 || value === 0) {
        return 's'
    } else return ''
}

export function getTopTwoReviews(array: Review[]) : Review[] {
    const sortedReviews = array.sort((a, b) => b.stars - a.stars);
      return sortedReviews.slice(0, 2);
  }