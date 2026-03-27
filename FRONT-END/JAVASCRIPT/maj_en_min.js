import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

let liste = [
  ["a", "A"], ["b", "B"], ["c", "C"], ["d", "D"], ["e", "E"], ["f", "F"], ["g", "G"],
  ["h", "H"], ["i", "I"], ["j", "J"], ["k", "K"], ["l", "L"], ["m", "M"], ["n", "N"],
  ["o", "O"], ["p", "P"], ["q", "Q"], ["r", "R"], ["s", "S"], ["t", "T"], ["u", "U"],
  ["v", "V"], ["w", "W"], ["x", "X"], ["y", "Y"], ["z", "Z"]
];
const mot = await rl.question('mot : ');
const mot_minuscule = mot.toLowerCase();

let mot=await rl.question('mot : ');
let mot_miniscule="";
console.log(mot_minuscule);

// Parcourir chaque lettre dans le mot
for(const lettre of mot){
    // Parcourir chaque element dans la liste d'alphabet
    for(const element of liste)
        if(lettre == element[1]) 
            mot_miniscule = mot_miniscule + element[0];

    else if (lettre == element[0])
        mot_miniscule = mot_miniscule + lettre; 
}

console.log(mot_miniscule)


await rl.close();
