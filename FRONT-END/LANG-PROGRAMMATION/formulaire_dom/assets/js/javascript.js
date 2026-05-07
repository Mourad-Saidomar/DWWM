const input = document.querySelectorAll('input');
const nomomInput = document.getElementById('nom');
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

btnInscription.addEventListener("click", function(event) {
    const valide = document.createElement('div');
    valide.className = "mt-5 p-4 border rounded-4 bg-white shadow"
    valide.innerHTML = `
        <h2 class="text-center mb-4 text-success">Inscription Valide !</h2>
        <div class="row">
            <span class="col-6 p-3"><strong>Nom :</strong>${nomomInput.value}</span>
            <span class="col-6 p-3"><strong>Prenom :</strong>${prenomInput.value}</span>
            <span class="col-6 p-3"><strong>Email :</strong>${emailInput.value}</span>
            <span class="col-6 p-3"><strong>Age :</strong>${ageInput.value}</span>
            <span class="col-6 p-3"><strong>Formation :</strong>${formationInput.value}</span>
        </div> 
    `;
    validation.appendChild(valide);
});









