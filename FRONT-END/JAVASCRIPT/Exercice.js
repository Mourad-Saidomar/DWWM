import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });







for( let i=0; i < nbelement; i++ ){

    for( let compteur=0; compteur < nbelement; compteur++ ){

        if( liste[compteur] > liste[compteur+1]){

            temp = liste[compteur]
            liste[compteur] = liste[compteur+1]
            liste[compteur+1] = temp
        }
    }
    console.log(liste)
}





await rl.close();