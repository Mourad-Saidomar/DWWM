const nom = document.getElementById("nom");
const categorie = document.getElementById("categorie");
const prix = document.getElementById("prix");
const stock = document.getElementById("stock");
const btnAjouter = document.getElementById("btnAjouter");
const btnSupprimer = document.getElementById("btnSupprimer");
const listeProduits = document.getElementById("listeProduits");
const input = document.querySelectorAll("input");
let id = 0;

input.forEach(function(input) {
    input.addEventListener('blur', () => {
        if (input.value.trim() === "") {
            input.classList.add("is-invalid");
        } else {
            input.classList.remove("is-invalid");
        }
    });
});

btnAjouter.addEventListener("click", function() {
    if (nom.value.trim() !== "" && prix.value.trim() !== "" && categorie.value.trim() !== "" && stock.value.trim() !== "") {
        id++;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th scope="row">${id}</th>
            <td>${nom.value}</td>
            <td>${categorie.value}</td>
            <td>${prix.value}</td>
            <td>${stock.value}</td>
        `;

        listeProduits.appendChild(tr);

        nom.value = "";
        categorie.value = "";
        prix.value = "";
        stock.value = "";   
    } else{
        alert("Veuillez remplir tous les champs");
    }
         
});










