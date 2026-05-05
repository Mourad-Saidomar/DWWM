let estConnecter = true;
let age = Number(prompt("Quel est votre age ?"));

let admin = prompt("Êtes-vous administrateur?");
let estAdmin;

if (admin === "oui"){
    estAdmin = true;
} else {
    estAdmin = false;
}

if ((age >= 18 && estConnecter) || estAdmin){
    console.log("Accès autorisé");
} else {
    console.log("Accès refusé");
}
