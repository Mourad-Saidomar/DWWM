import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

let note=await rl.question('Note : ');
while (note<0 || note>20){
    note=await rl.question('Une note entre 0 et 20 : ');
}

if(note>=10){
    console.log(`Vous êtes admis`);
} else{
    console.log(`Vous n'êtes pas admis`);
}


await rl.close();
