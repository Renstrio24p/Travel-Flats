import { Review } from "../utils/interfaces.util"

// Typescript is very sensitive in declaring types

export class MainProperties {

    src: string
    title: string
    reviews: Review[]

    constructor(src: string,title:string,reviews:Review[]){
        this.src = src
        this.title = title
        this.reviews = reviews
    }
}