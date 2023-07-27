import { Country, Price } from "./aliases.util";
import { loyaltyUser } from "./enums.util";

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: loyaltyUser;
    date: string;
}

export interface Property {
    image: string,
    title: string,
    price: Price,
    Location: {
        FirstLine: string,
        City: string,
        ZipCode: number | string,
        Country: Country,
    },
    ContactDetails: [number,string],
    Availabletorent: boolean
}