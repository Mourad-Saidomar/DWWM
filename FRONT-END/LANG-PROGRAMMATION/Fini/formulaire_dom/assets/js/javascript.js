const input = document.querySelectorAll('input');
const nomInput = document.getElementById('nom');
const prenomInput = document.getElementById('prenom');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const ageInput = document.getElementById('age');
const formationInput = document.getElementById('formation');
const btnInscription = document.getElementById('btnInscription');
const validation = document.getElementById('validation');


input.forEach(function(input) {
    input.addEventListener('blur', () => {
        if (input.value.trim() === "") {
            input.classList.add("is-invalid");
        } else {
            input.classList.remove("is-invalid");
        }
    });
});

ageInput.addEventListener("input", function() {
    const age = Number(ageInput.value);
    if (age < 16 || isNaN(age)) {
        ageInput.classList.add("is-invalid");
    } else {
        ageInput.classList.remove("is-invalid");
    }
});

const validNom = document.getElementById('validNom');
const validPrenom = document.getElementById('validPrenom');
const validEmail = document.getElementById('validEmail');
const validAge = document.getElementById('validAge');
const validFormation = document.getElementById('validFormation');

btnInscription.addEventListener("click", function(event) {
    event.preventDefault();
    if (nomInput.value.trim() === "" || prenomInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "" || confirmPasswordInput.value.trim() === "" || ageInput.value.trim() === "" || formationInput.value.trim() === ""){
        alert("Veuillez remplir tous les champs");

    } 
    else if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Les mots de passe ne correspondent pas");
    } 
    
    else if (ageInput.value < 16 || isNaN(ageInput.value)) {
        alert("L'âge doit être supérieur ou égal à 16 ans");
    
    } 
    
    else {
        validation.classList.remove("d-none");
        validNom.textContent = nomInput.value;
        validPrenom.textContent = prenomInput.value;
        validEmail.textContent = emailInput.value;
        validAge.textContent = ageInput.value;
        validFormation.textContent = formationInput.value;
        // validation.style.display = "block";
    }
});









