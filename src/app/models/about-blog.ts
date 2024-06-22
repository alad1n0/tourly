export class AboutBlog {
    id: number;
    name: string;
    img: string;
    description: string;

    constructor(id: number, name: string, img: string, description: string) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.description = description;
    }
}