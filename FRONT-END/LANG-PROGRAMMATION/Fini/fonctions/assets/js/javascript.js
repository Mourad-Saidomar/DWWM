function note(){
    return Number(prompt("Entrer une note entre 0 et 20 ?"))
}

function moyenne(nbNote1, nbNote2){
    return (nbNote1 + nbNote2) / 2;
}

function affichage(moyenne){
    console.log(`Votre moyenne est de ${moyenne}`);
}

let note1 = note();
let note2 = note();
let resultat = moyenne(note1, note2);
affichage(resultat);





