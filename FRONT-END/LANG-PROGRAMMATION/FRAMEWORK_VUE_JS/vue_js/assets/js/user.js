export class User {
    constructor(nom = '', prenom = '', fonction = '', tel = '', email = '') {
        this.nom = nom;
        this.prenom = prenom;
        this.fonction = fonction;
        this.tel = tel;
        this.email = email;
    }

    Afficher() {
        console.log(`Nom: ${this.nom}, Prénom: ${this.prenom}, Fonction: ${this.fonction}, Tel: ${this.tel}, Email: ${this.email}`);
    }
    
}

