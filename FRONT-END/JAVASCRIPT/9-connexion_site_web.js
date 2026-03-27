import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

let base_donnee=[["admin1","mdp1"],["admin2","mdp2"],["admin3","mdp3"],["admin4","mdp4"]]

let identifiant="";
let password="";
let nb_essais=3;
let bConnected=false;
let compteur=0;



while(compteur<3 && bConnected==false){
    identifiant=await rl.question('Identifiant: ');
    password=await rl.question('Mot de passe : ');
    for(const element of base_donnee){
        if(identifiant==element[0] && password==element[1]){
            bConnected=true;
            console.log(`Connexion réussi !`);
        } 
    }
    if(bConnected==false){
        compteur++;
        nb_essais--;
        if(nb_essais>0){
            console.log(`Votre identifiant ou votre mot de passe sont incorrect. Vous avez encore ${nb_essais}. Veuillez réessayer.`);
        }
    }
    
}

while(compteur<3 && bConnected==false){
    

}


if(compteur>=3 && bConnected==false){
    console.log(`Echec de connexion ! Vous n'avez plus d'éssais.`);
}



await rl.close();
