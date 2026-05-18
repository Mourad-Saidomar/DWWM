class Produit{
    constructor(nom, categorie, prix, stock) {
        this.nom = nom;
        this.categorie = categorie;
        this.prix = prix ;
        this.stock = stock;
    }

    UpdateStock(nouveauStock) {
        if (nouveauStock < 0) {
            console.log("Le nouveau stock ne peut pas être négatif.");
            return;
        }
        this.stock = nouveauStock;
    }

    UpdatePrix(nouveauPrix) {
        if (nouveauPrix < 0) {
            console.log("Le nouveau prix ne peut pas être négatif.");
            return;
        }
        this.prix = nouveauPrix;
    }

    UpdateCategorie(nouvelleCategorie) {
        if (nouvelleCategorie === "") {
            console.log("La nouvelle catégorie ne peut pas être vide.");
            return;
        }
        this.categorie = nouvelleCategorie;
    }

    DisplayStock() {
        console.log(`Stock actuel : ${this.stock}`);
    }

    DisplayPrice() {
        console.log(`Prix actuel : ${this.prix} €`);
    }

    DisplayProduct() {
        console.log(`Produit : ${this.nom}, Catégorie : ${this.categorie}, Prix : ${this.prix} €, Quantité : ${this.stock}`);
    }

}

const Produit1 = new Produit("Ordinateur", "Informatique", 1200, 5);

Produit1.DisplayProduct();


