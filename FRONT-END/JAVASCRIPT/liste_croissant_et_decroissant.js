import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

//[23, 45, 89, 36, 25, 101, 150, 820, 12, 35, 74]

let liste_croissant = [23, 45, 89, 36, 25, 101, 150, 820, 12, 35, 74];
let liste_decroissant = [23, 45, 89, 36, 25, 101, 150, 820, 12, 35, 74];
let temp=0;
let nbelement=0;


//Compter le nombre d'élement dans la liste
for(const element of liste_croissant){
    nbelement++;
}

//Rangement les nombres de la liste par ordre croissant 
for(let i=0; i<nbelement; i++){

    for(let j=0; j<nbelement; j++){

        if(liste_croissant[i]<liste_croissant[j]){

            temp=liste_croissant[j];
            liste_croissant[j]=liste_croissant[i];
            liste_croissant[i]=temp;
        }
    }
}

temp=0;


//Rangement les nombres de la liste par ordre decroissant 
for(let i=0; i<nbelement; i++){

    for(let j=0; j<nbelement; j++){

        if(liste_decroissant[i]>liste_decroissant[j]){

            temp=liste_decroissant[j];
            liste_decroissant[j]=liste_decroissant[i];
            liste_decroissant[i]=temp;
        }
    }
}


console.log(`La liste par odre croissant est : ${liste_croissant}`)
console.log(`La liste par odre decroissant est : ${liste_decroissant}`)


await rl.close();