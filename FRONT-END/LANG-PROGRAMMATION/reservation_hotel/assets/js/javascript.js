function nomClient(){
    return prompt("Quel est votre nom ?")
}

function typeChambre(){
    let chambre = prompt("Quel type de chambre souhaitez-vous ? Choissisez entre Simple en tapant 1, Double en tapant 2 et Suite en tapant 3.");
    while(chambre !== "1" && chambre !== "2" && chambre !== "3") {
        chambre = prompt("Choix invalide. Veuillez choisir entre Simple (1) ou Double (2) ou Suite (3) :");
    }
    return chambre;
        
}


function PrixChambre(typeChambre){
/*
    if (typeChambre === "1") {
        return 50;

    } else if (typeChambre === "2") {
        return 80;

    } else if (typeChambre === "3") {
        return 150;

    } 
*/

    switch(typeChambre) {
        case "1":
            return 50;
        case "2":
            return 80;
        case "3":
            return 150;
    }
}

function NbNuits(){
    let nuits = Number(prompt("Combien de nuits souhaitez-vous rester ?"));
    while (isNaN(nuits) || nuits <= 0) {
        nuits = Number(prompt("Veuillez entrer un nombre de nuits valide (supérieur à 0) :"));
    }
    
    return nuits;
}

function PetitDejeuner(){
    let choix = prompt("Souhaitez-vous le petit-déjeuner ? (oui/non)");
    
    while (choix !== "oui" && choix !== "non") {
        choix = prompt("Veuillez répondre par 'oui' ou 'non' :");
    }

    if (choix === "oui") return true;
    
    else return false;
}

function CalculTotalPrix(prixParNuit, nombreNuits, petitDejeuner){
    let totalPrix = prixParNuit * nombreNuits;
    
    if (petitDejeuner) {
        totalPrix += 10 * nombreNuits;
    }

    return totalPrix;
}


function Reduction(totalPrix, nombreNuits){
    if (nombreNuits >= 5) {
        return totalPrix * 0.85;
    }
    return totalPrix;
}


function Facture(nom, typeChambre, prixParNuit, petitDejeuner, totalFinal){
    console.log("--- Facture Hotel ---");
    console.log("Nom du client : " + nom);

    let typeNom;
    if (typeChambre === "1") {
        typeNom = "Simple";
    } else if (typeChambre === "2") {
        typeNom = "Double";
    } else {
        typeNom = "Suite";
    }

    console.log(`Type de chambre : ${typeNom}`);
    console.log(`Prix par nuit : ${prixParNuit}€`);

    if (petitDejeuner) {
        console.log("Petit-déjeuner inclus");
    } else {
        console.log("Petit-déjeuner non inclus");
    }
    
    console.log(`Total à payer : ${totalFinal}€`);
    console.log("---------------------");
        
    
}

function reserver() {
    let nom = nomClient();
    let type = typeChambre();
    let prixNuit = PrixChambre(type);
    let nuits = NbNuits();
    let pdj = PetitDejeuner();
    
    let totalBrut = CalculTotalPrix(prixNuit, nuits, pdj);
    let totalFinal = Reduction(totalBrut, nuits);
    
    Facture(nom, type, prixNuit, pdj, totalFinal);
}

reserver();







