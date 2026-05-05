let produits = [
    { id: 1, nom: 'Clavier', prix: 25, stock: 10 },
    { id: 2, nom: 'Souris', prix: 15, stock: 20 },
    { id: 3, nom: 'Écran', prix: 120, stock: 5 }
];


function afficherProduits(produits_liste){
    for (let i = 0; i < produits_liste.length; i++) 
    console.log(`Le produit N°${produits_liste[i].id} : ${produits_liste[i].nom} coûte ${produits_liste[i].prix} euros et il en reste ${produits_liste[i].stock} en stock`);
};


function RechercheProduit(){
    produit = prompt("Quel produit voulez-vous rechercher ?")
    for (let i = 0; i < produits.length; i++){
        if (produit == produits[i].nom){
            console.log(`Le produit ${produits[i].nom} a été trouvé avec un prix de ${produits[i].prix} euros. Il en reste ${produits[i].stock} en stock.`)
        }
    }
};

function RechercheProduitId(){
    produit = Number(prompt("Quel est l'ID du produit que vous recherchez ?"))
    for (let i = 0; i < produits.length; i++){
        if (produit == produits[i].id){
            console.log(`Le produit est ${produits[i].nom} avec un prix de ${produits[i].prix} euros. Il en reste ${produits[i].stock} en stock.`)
        }
    }
};

function AjouterProduit(){
    produit = prompt("Quel produit voulez-vous ajouter ?")
    prix = Number(prompt("Quel est le prix de ce produit ?"))
    stock = Number(prompt("Combien de ce produit en stock ?"))
    for (let i = 0; i < produits.length; i++){
        if (produit == produits[i].nom){
            produits[i].stock += stock;
            console.log(`Le stock du produit ${produits[i].nom} a été mis à jour. Nouveau stock : ${produits[i].stock}`);
        } else if (produit != produits[i].nom){
            let nouveauProduit = {
                id: produits.length + 1,
                nom: produit,
                prix: prix,
                stock: stock
            };
            produits.push(nouveauProduit);
            console.log(`Le produit ${produit} a été ajouté au catalogue.`);            
        }
    }
};

function SupprimerProduit(){
    produit = prompt("Quel produit voulez-vous supprimer ?")
    for (let i = 0; i < produits.length; i++){
        if (produit == produits[i].nom) {
            produits.splice(i, 1);
            console.log(`Le produit ${produit} a été supprimé du catalogue.`);
        }
    } 
};

function ModifierStock(){
    produit = prompt("Quel produit voulez-vous modifier")
    for (let i = 0; i < produits.length; i++){
        if (produit == produits[i].nom){
            let nouveauStock = Number(prompt("Quel est le nouveau stock ?"))
            produits[i].stock = nouveauStock;
            console.log(`Le stock du produit ${produits[i].nom} a été mis à jour. Nouveau stock : ${produits[i].stock}`);
        }
    }
};

afficherProduits(produits);
RechercheProduit();
RechercheProduitId();
AjouterProduit();
SupprimerProduit();
ModifierStock();


