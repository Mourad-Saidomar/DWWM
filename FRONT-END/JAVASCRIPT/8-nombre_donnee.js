import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });


let nb =await rl.question(`Nombre `);

for(let i=1; i<=nb;i++){
    console.log(i);
}

await rl.close();
