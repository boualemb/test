export class Person {
    nom: string;
    prenom: string;
    genre: Genre;

    constructor(n: string, p: string, g: Genre) {
        this.nom = n;
        this.prenom = p;
        this.genre = g;
    }
    getNomComplet() {
        // prenom nom
        return this.prenom + " " + this.nom;
    }
    getNomCompletFormatted() {
        // M. P NOM 
        let formattedName = "";
        switch (this.genre) {
            case Genre.Male:
                formattedName += "M. ";
                break;
            case Genre.Femelle:
                formattedName += "Mme. ";
                break;
        }
        formattedName += this.prenom.charAt(0).toUpperCase() + " ";
        formattedName += this.nom.toUpperCase();
        return formattedName;
    }
}

export enum Genre {
    Male,
    Femelle
}
