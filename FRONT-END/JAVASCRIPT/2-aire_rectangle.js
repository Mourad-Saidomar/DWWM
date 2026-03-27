import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });


let longueur=await rl.question('Nombre 2 :');
let largeur=await rl.question('Nombre 2 :');
let aire=Number(largeur) * Number(longueur);
console.log(`L aire du rectangle est ${aire}`);



await rl.close();