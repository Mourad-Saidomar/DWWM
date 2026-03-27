import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });


let liste=[15,16,84,16,13];
let nb_min=liste[0];
let nb_max=liste[0];

for(const element of liste){
    if(element<nb_min){
        nb_min=element;
    }
}

console.log(`Le plus grand nombre de la liste est : ${nb_min}`)


for(const element of liste){
    if(element>nb_max){
        nb_max=element;
    }
}
console.log(`Le plus grand nombre de la liste est : ${nb_max}`)

await rl.close();



