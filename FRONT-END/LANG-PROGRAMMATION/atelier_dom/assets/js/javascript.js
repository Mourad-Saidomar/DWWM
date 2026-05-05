let titre = document.getElementById("titre");
let titre = document.querySelector('#titre');

console.log(titre);
console.log(titre.textContent);
console.log(titre.innerHTML);

//titre.textContent = "Hello World";

titre.innerHTML = "<strong><em>Hello World</em></strong>";

let btnChange = document.querySelector("#btnChange")

btnChange.addEventListener("click", function() {
    let texte = document.querySelector("#texte");
    texte.textContent = "Le paragraphe a été changé !"
});
