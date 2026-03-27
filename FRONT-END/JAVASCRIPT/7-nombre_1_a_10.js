import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

for(let i=1; i<=10;i++){
    console.log(i);
}

await rl.close();
