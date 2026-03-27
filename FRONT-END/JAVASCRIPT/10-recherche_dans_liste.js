import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

let liste=[15,16,84,16,13];
let recherche=await rl.question('le nombre que tu recherches : ');
let position=0;
let compteur=0;
let confirm=false
for(const element of liste){   
    if(element==recherche){
        position=compteur;
        confirm=true
        if(confirm==true){
            console.log(`Le nombre : ${recherche} est dans la liste à la position ${position}.`)
        }        
    }
    compteur++;
}

if(confirm==false){
    console.log(`Le nombre : ${recherche} n'est pas dans la liste.`)
}


await rl.close();
