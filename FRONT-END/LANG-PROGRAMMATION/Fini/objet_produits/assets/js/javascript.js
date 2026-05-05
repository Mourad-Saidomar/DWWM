let produits = [
    {nom : "Souris", prix : 15},
    {nom : "Clavier", prix : 30},
    {nom : "Casque", prix : 80},
    {nom : "Intel Core 9", prix : 1000},
    {nom : "GeForce RTX 5090", prix : 2000},
    {nom : "Water Cooling", prix : 149.99},
    {nom : "Tapis de souris", prix : 10},
    {nom : "Clé USB 32Go", prix : 8.50},
    {nom : "Adaptateur USB-C", prix : 12.99}
]

function afficherProduits(liste_objet) {
    for (let i = 0; i < liste_objet.length; i++) {
        if (liste_objet[i].prix > 20) {
            console.log(`Produit : ${liste_objet[i].nom} - Prix : ${liste_objet[i].prix}€`);
        }
    }
}

afficherProduits(produits);











