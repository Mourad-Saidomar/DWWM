import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });


let listNotes=[];
let notes=0;
let confirm_notes="n";
let i=0;

while (confirm_notes=="n"){
    notes= await rl.question(`Note ${i+1}: `);
    while (notes<0 || notes>20){
        notes=await rl.question('Une note entre 0 et 20 : ');
    }
    confirm_notes=await rl.question(`"y" pour confirmer l'arrêt d'ajout de note et "n" pour continuer l'ajout: `);

    while(confirm_notes!="y" && confirm_notes!="n"){
        confirm_notes=await rl.question(`"y" pour confirmer l'arrêt d'ajout de note et "n" pour continuer l'ajout: `);
    }

    listNotes[i] = notes;
    i++;
} 

let somme_notes=0;
let moyenne_notes=0;
let nb_notes=0;

for(const element of listNotes){
    somme_notes = somme_notes + Number(element);
    nb_notes++;
}

moyenne_notes = Number((somme_notes / nb_notes).toFixed(2));

if(moyenne_notes>=16){
    console.log(`Votre moyenne est de ${moyenne_notes}. Vous avez mention Très Bien.`);
} 

else if(moyenne_notes>=14){
    console.log(`Votre moyenne est de ${moyenne_notes}. Vous avez mention Bien.`);
} 

else if(moyenne_notes>=10){
    console.log(`Votre moyenne est de ${moyenne_notes}. Vous avez mention Passable.`);
} 

else {
    console.log(`Votre moyenne est de ${moyenne_notes}. Vous avez mention Insuffisant.`);
}



await rl.close();