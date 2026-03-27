import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

let a=await rl.question('Nombre 1 :');
let b=await rl.question('Nombre 2 :');
let somme=Number(a) + Number(b);
console.log(`Somme est égale à : ${somme}`);

await rl.close();