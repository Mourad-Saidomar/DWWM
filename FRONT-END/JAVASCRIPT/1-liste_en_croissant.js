import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

//[23, 45, 89, 36, 25, 101, 150, 820, 12, 35, 74]

let liste = [23, 45, 89, 36, 25, 101, 150, 820, 12, 35, 74];
let temp=0;
let nbelement=0;


//Compter le nombre d'élement dans la liste
for(const element of liste){
    nbelement++;
}


//Rangement les nombres de la liste par ordre croissant 
for(let i=0; i<nbelement; i++){

    for(let j=0; j<nbelement; j++){

        if(liste[j]>liste[j+1]){

            temp=liste[j];
            liste[j]=liste[j+1];
            liste[j+1]=temp;
        }
    }
}

console.log(liste)





















await rl.close();