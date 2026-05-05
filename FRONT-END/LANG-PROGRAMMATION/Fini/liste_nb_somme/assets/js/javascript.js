let nombres = [];

function demanderNombre() {
    let nombre = -1;
    do{
        nombre = Number(prompt("Entrez un nombre (ou -1 pour terminer) :"));
    }while(isNaN(nombre));

    return nombre;
}

function creerTableau() {
    let nombre = 0;
    do{
        nombre = demanderNombre();
        if(nombre !== -1) {
            nombres.push(nombre);
        }
    }while(nombre !== -1);
}

function afficherNombres(){
    for(let i = 0; i < nombres.length; i++) {
        console.log(`nombres[${i}] = ${nombres[i]}`);
    }
}

function calculerSomme() {
    let somme = 0;
    for(let i = 0; i < nombres.length; i++) {
        somme += nombres[i];
    }
    return somme;
}

creerTableau();
afficherNombres();
console.log(`Somme des nombres : ${calculerSomme()}`);    

function PlusGrandNombre(liste){
    let max = liste[0];
    for(let i = 1; i < liste.length; i++) {
        if(liste[i] > max) {
            max = liste[i];
        }
    }
    return max;
}

console.log(`Le plus grand nombre est : ${PlusGrandNombre(nombres)}`);




