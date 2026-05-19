export class compteBancaire{
    constructor(titulaireParam,soldeInitialParam){
        this.titulaire = titulaireParam;
        this.solde = soldeInitialParam;
    }
    deposer(montant){
        if(montant <= 0){
            console.log("Le montant doit être supérieur à 0");
            return;
        }
        this.solde += montant;
    }
    retirer(montant){        
        if (montant <= 0) {
            console.log("Le montant doit être supérieur à 0");
            return;
        }
        if (montant > this.solde) {
            console.log("Solde insuffisant!");
            return;
        }
        this.solde -= montant;
    }
    
    afficherSolde() {
        console.log(`Le solde actuel de ${this.titulaire} est de : ${this.solde} €`);
    }
}


