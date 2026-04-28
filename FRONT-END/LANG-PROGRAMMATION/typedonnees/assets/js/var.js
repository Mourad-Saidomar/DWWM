//Type de données : nombre
let age = 30;
let prix = 19.99;

//Type de données : string

let nom = "John";
let message = "Bonjour";
let phrase= `${message} ${nom}`;

//Type de données : booleen
let estConnecte = true;
let estAdmin = false;

//Type de données : object
let user = {
  nom: "John",
  age: 30,
};


//Type de données : (array) tableau
let nombres = [1, 2, 3, 4, 5];

//Type de données : null
let values = null;


//Type de données : undefined
let resultat;

console.log(`Type de données de age : ${typeof(age)}`);
console.log(`Type de données de prix : ${typeof(prix)}`);
console.log(`Type de données de nom : ${typeof(nom)}`);
console.log(`Type de données de message : ${typeof(message)}`);
console.log(`Type de données de phrase : ${typeof(phrase)}`);
console.log(`Type de données de estConnecte : ${typeof(estConnecte)}`);
console.log(`Type de données de estAdmin : ${typeof(estAdmin)}`);
console.log(`Type de données de user : ${typeof(user)}`);
console.log(`Type de données de nombres : ${typeof(nombres)}`);
console.log(`Type de données de values : ${typeof(values)}`);
console.log(`Type de données de resultat : ${typeof(resultat)}`);
