export class Users{
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


 

