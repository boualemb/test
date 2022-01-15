import { Person, Genre } from "../person/person";

export class Patient extends Person {
    anneDeNaissance: number;
    constructor(n: string, 
                p: string, 
                g: Genre, 
                ann: number){
        super(n, p, g);
        this.anneDeNaissance = ann;
    }
}
