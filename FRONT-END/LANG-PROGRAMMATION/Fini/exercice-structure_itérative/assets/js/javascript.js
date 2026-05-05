

let totalGrains = 0;
let grainsSurCase = 1;

for (let i = 1; i <= 64; i++) {
    totalGrains += grainsSurCase;
    grainsSurCase *= 2;
}

console.log(`Le nombre total de grains de riz sur l'échiquier est : ${totalGrains}`);

