function compterVoyelles(phrase) {
  let compteur = 0;

  for (const caractere of phrase.toLowerCase()) {
    switch (caractere) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "y":
        compteur++;
        break;
    }
  }

  return compteur;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Saisis une phrase : ", (phrase) => {
  const totalVoyelles = compterVoyelles(phrase || "");
  console.log(`Ta phrase contient ${totalVoyelles} voyelles.`);
  rl.close();
});
