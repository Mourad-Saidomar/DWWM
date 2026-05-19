const btnCharger = document.getElementById("btnCharger");
const rechercheInput = document.getElementById("rechercheInput");
const categorie = document.getElementById("categorie");
const listeProduits = document.getElementById("listeProduits");
const nbProduits = document.getElementById("nbProduits");
const nbCategories = document.getElementById("nbCategories");
const nbProduitsAffiches = document.getElementById("nbProduitsAffiches");

const LIMITE_AFFICHAGE = 4;
let produitsFiltres = [];
let indexAffichage = 0;

function AfficherNbProduits(data) {
    nbProduits.textContent = data.length;
}

function listeCategories(data) {
    const categories = [];

    for (let i = 0; i < data.length; i++) {
        const cat = data[i].category;
        if (!categories.includes(cat)) {
        categories.push(cat);
        }
    }

    return categories;
}

function AfficherCategories(categories) {
    for (let i = 0; i < categories.length; i++) {
        const option = document.createElement("option");
        option.value = categories[i];
        option.textContent = categories[i];
        categorie.appendChild(option);
    }
}

function AfficherNbCategories(categories) {
    nbCategories.textContent = categories.length;
}

function creerCarteProduit(item) {
    const produitCol = document.createElement("div");
    produitCol.classList.add("col");

    produitCol.innerHTML = `
        <article class="bs-card card h-100 bg-blur shadow-sm rounded-4 p-3 border-0">
        <div class="card-img-top">
            <img class="bg-blur p-3 rounded-4 w-100" src="${item.image}" alt="${item.title}">
        </div>
        <div class="card-body p-3 text-white">
            <h5 class="card-title fw-bold mb-3">${item.title}</h5>
            <p class="card-text mb-4">${item.category}</p>
            <div class="d-flex justify-content-between align-items-center">
            <span class="fw-bold bg-blur rounded-5 btn text-white">${item.price} €</span>
            <button class="btn text-white rounded-5 btn-modif">Plus de details</button>
            </div>
        </div>
        </article>
    `;

    return produitCol;
}

function afficherProchainLot() {
    const prochainsProduits = produitsFiltres.slice(
        indexAffichage,
        indexAffichage + LIMITE_AFFICHAGE
    );

    listeProduits.innerHTML = "";

    for (let i = 0; i < prochainsProduits.length; i++) {
        const carte = creerCarteProduit(prochainsProduits[i]);
        listeProduits.appendChild(carte);
    }

    indexAffichage += prochainsProduits.length;
    nbProduitsAffiches.textContent = produitsFiltres.length;

    if (indexAffichage >= produitsFiltres.length) {
        btnCharger.disabled = true;
        btnCharger.classList.toggle("cursor-not-allowed");
    } else {
        btnCharger.disabled = false;
    }
}

function reinitialiserAffichage(produits) {
    listeProduits.innerHTML = "";
    produitsFiltres = produits;
    indexAffichage = 0;
    afficherProchainLot();
}

function RechercheProduits(data) {
    reinitialiserAffichage(data);

    rechercheInput.addEventListener("input", (e) => {
        const valeur = e.target.value.toLowerCase();

        const resultats = data.filter((item) =>
        item.title.toLowerCase().includes(valeur)
        );

        reinitialiserAffichage(resultats);
    });
}

function AfficherProduitsParCategorie(data) {
    categorie.addEventListener("change", (e) => {
        const categorieSelectionnee = e.target.value;

        if (categorieSelectionnee === "all") {
            reinitialiserAffichage(data);
        } else {
            const resultats = data.filter(
                (item) => item.category === categorieSelectionnee
            );
            reinitialiserAffichage(resultats);
        }
    });
}



fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        AfficherNbProduits(data);

        const categories = listeCategories(data);
        AfficherNbCategories(categories);
        AfficherCategories(categories);

        RechercheProduits(data);
        AfficherProduitsParCategorie(data);
  });

btnCharger.addEventListener("click", (e) => {
  e.preventDefault();
  afficherProchainLot();
});

