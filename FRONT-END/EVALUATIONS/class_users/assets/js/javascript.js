class Users{
    constructor(nom, prenom, pseudo, age, email) {
        this.nom = nom;
        this.prenom = prenom;
        this.pseudo = pseudo;
        this.age = age;
        this.email = email;
    }

    ModifNom(nom){
        let nomTemp = this.nom;
        if(nom === ""){
            console.log("Veuillez entrer un nom valide");            
        }

        else if (nom === nomTemp){
            console.log("Veuillez entrer un nouveau nom");
        }
        
        else{
            this.nom = nom;
        }
    }

    ModifPrenom(prenom){
        let prenomTemp = this.prenom;
        if(prenom === ""){
            console.log("Veuillez entrer un prenom valide");            
        }

        else if (prenom === prenomTemp){
            console.log("Veuillez entrer un nouveau prenom");
        }
        
        else{
            this.prenom = prenom;
        }
    }

    ModifPseudo(pseudo){        
        let pseudoTemp = this.pseudo;
        if(pseudo === ""){
            console.log("Veuillez entrer un pseudo valide");            
        }

        else if (pseudo === pseudoTemp){
            console.log("Veuillez entrer un nouveau pseudo");
        }
        
        else{
            this.pseudo = pseudo;
        }
    }

    ModifAge(age){
        let ageTemp = this.age;
        if(age === "" || isNaN(age)){
            console.log("Veuillez entrer un age valide");            
        }

        else if (age === ageTemp){
            console.log("Veuillez entrer un nouvel age");
        }
        
        else{
            this.age = age;
        }
    }

    ModifEmail(email){
        let emailTemp = this.email;
        if(email === "" || !email.includes("@")){
            console.log("Veuillez entrer un email valide");            
        }

        else if (email === emailTemp){
            console.log("Veuillez entrer un nouvel email");
        }
        
        else{
            this.email = email;
        }
    }

    AfficherInfos(){
        console.log(`Nom: ${this.nom}, Prénom: ${this.prenom}, Pseudo: ${this.pseudo}, Age: ${this.age}, Email: ${this.email}`);
    }
    
    SupprimerCompte(){        
        this.nom = null;
        this.prenom = null;
        this.pseudo = null;
        this.age = null;
        this.email = null;
        console.log("Le compte a été supprimé avec succès.");
    }
}

function demanderChampsNonVide(message) {
    let valeur;
    do {
        valeur = prompt(message);
    } while (valeur === null || valeur.trim() === "");
    return valeur;
}

let nom = demanderChampsNonVide("Veuillez entrer votre nom :");
let prenom = demanderChampsNonVide("Veuillez entrer votre prénom :");
let pseudo = demanderChampsNonVide("Veuillez entrer votre pseudo :");

let age;
do {
    age = prompt("Veuillez entrer votre age superieur a 18:");
} while (age === "" || age < 18 || isNaN(age));

let email;
do {
    email = prompt("Veuillez entrer votre email (sans oublier le @):");
} while (email === null || !email.includes("@"));
const user1 = new Users(nom, prenom, pseudo, age, email);
user1.AfficherInfos();

let choix;
do {
    choix = prompt(" Que voulez-vous faire ?\n 1. Modifier le nom\n 2. Modifier le prénom\n 3. Modifier le pseudo\n 4. Modifier l'âge\n 5. Modifier l'email\n 6. Afficher les infos\n 7. Supprimer le compte\n 8. Quitter");

    if (choix === "1") {
        let nouveauNom = prompt("Entrez le nouveau nom :");
        user1.ModifNom(nouveauNom);
    } else if (choix === "2") {
        let nouveauPrenom = prompt("Entrez le nouveau prénom :");
        user1.ModifPrenom(nouveauPrenom);
    } else if (choix === "3") {
        let nouveauPseudo = prompt("Entrez le nouveau pseudo :");
        user1.ModifPseudo(nouveauPseudo);
    } else if (choix === "4") {
        let nouvelAge = parseInt(prompt("Entrez le nouvel âge :"));
        user1.ModifAge(nouvelAge);
    } else if (choix === "5") {
        let nouvelEmail = prompt("Entrez le nouvel email :");
        user1.ModifEmail(nouvelEmail);
    } else if (choix === "6") {
        user1.AfficherInfos();
    } else if (choix === "7") {
        user1.SupprimerCompte();
    } else if (choix === "8") {
        console.log("Au revoir !");
    } else {
        console.log("Choix non valide.");
    }
} while (choix !== "8");


 

