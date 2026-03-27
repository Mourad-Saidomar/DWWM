import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

let heure=await rl.question('Heure : ');
let minutes=Number(heure) * Number(60);
console.log(`L heure ${minutes} minutes`);

await rl.close();