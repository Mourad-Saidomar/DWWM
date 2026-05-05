let nonStop = true;
let produits = [];
while (nonStop) {
    let produit = prompt("Entrez un produit ('stop' pour arrêter) :");
    if (produit.toLocaleLowerCase() === "stop") {
        nonStop = false;
    } else {
        produits.push(produit);
    }
}
console.log(produits);
