export class BlogCards {
    id: number;
    name: string;
    img: string;
    description: string;
    description2: string;
    exposition: string;

    constructor(id: number, name: string, img: string, description: string, description2: string, exposition: string) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.description = description;
        this.description2 = description2;
        this.exposition = exposition;
    }
}