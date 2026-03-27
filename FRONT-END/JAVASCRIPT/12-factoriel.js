import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });


let nb=Number(await rl.question('Nombre : '));
let resultat=1;

for(let i=1; i<=nb ; i++){
    resultat=resultat*i
}
console.log(resultat)

await rl.close();
