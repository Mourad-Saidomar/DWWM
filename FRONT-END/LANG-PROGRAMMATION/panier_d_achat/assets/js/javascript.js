let continuer = true;
let total = 0;
let NbProduits = 0;

// Ajouter plusieurs produits
while (continuer) {
    let produit = prompt("Produit ?");
    let prix = Number(prompt("Prix ?"));
    
    // Refus un prix négatif et pas un nombre   
    while(prix < 0 || isNaN(prix)) {
        prix = Number(prompt("Prix invalide. Veuillez saisir un prix positif :"));
    }

    console.log("Produit : " + produit + " - Prix : " + prix + "€");

    // Incrémentation du nombre de produits
    NbProduits++;

    // Calcul du total 
    total += prix;

    let question = prompt("Continuer ? (oui/non)");
    while(question != "oui" && question != "non"){
        question = prompt("Continuer ? (oui/non)");
    }
    if (question == "non") {
        continuer = false;
    }
}

console.log("Total : " + total + "€");
console.log("Nombre de produits : " + NbProduits);

// Appliquer une réduction de 10% 
if (total >= 100) {
    let reduction = total * 0.1;
    total -= reduction;
    console.log(`Réduction de 10% appliquée : -${reduction}€ | Nouveau total : ${total}€`);
}

// Ajouter une TVA (20%)
let tva = total * 0.2;
total += tva;
console.log(`TVA (20%) : +${tva}€ | Total TTC : ${total}€`);












