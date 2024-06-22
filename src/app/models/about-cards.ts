export class AboutCards {
    id: number;
    country: string;
    region: string;
    img: string;
    rating: number;

    constructor(id : number, country: string, region: string, img: string, rating: number) {
        this.id = id;
        this.country = country;
        this.region = region;
        this.img = img;
        this.rating = rating;
    }
}