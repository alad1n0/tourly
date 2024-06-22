export class ReviewAbouts {
    id: number;
    author: string;
    text: string;
    authorImg: string;

    constructor(id: number, author: string, text: string, authorImg: string) {
        this.id = id;
        this.author = author;
        this.text = text;
        this.authorImg = authorImg;
    }
}