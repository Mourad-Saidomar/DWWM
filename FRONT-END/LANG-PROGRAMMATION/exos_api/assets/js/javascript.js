const table = document.getElementById("table");
const listeUsers = document.getElementById("listeUsers");
const erreur = document.getElementById("erreur");
const RaisonErreur = document.getElementById("RaisonErreur");
const card = document.getElementById("card");
const changer = document.getElementById("changer");
let bg_bleue_switch = "bg-blur";

function afficherInfosTable(users) {
  users.forEach(user => {
    const tr = document.createElement('tr');
    if (bg_bleue_switch === "bg-blur"){
        tr.innerHTML = `
            <th class="${bg_bleue_switch} text-white" scope="row">${user.id}</th>
            <td class="${bg_bleue_switch} text-white">${user.name}</td>
            <td class="${bg_bleue_switch} text-white">${user.email}</td>
            <td class="${bg_bleue_switch} text-white">${user.username}</td>
        `;
        bg_bleue_switch = "bg-blur-1";
        } 
        
        else{
            tr.innerHTML = `
                <th class="${bg_bleue_switch} text-white" scope="row">${user.id}</th>
                <td class="${bg_bleue_switch} text-white">${user.name}</td>
                <td class="${bg_bleue_switch} text-white">${user.email}</td>
                <td class="${bg_bleue_switch} text-white">${user.username}</td>
            `;
            bg_bleue_switch = "bg-blur";
        }
    listeUsers.appendChild(tr);
    });
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => afficherInfosTable(data))
    .catch(error => {
        erreur.classList.remove("d-none");
        RaisonErreur.innerHTML = error;

    });



function afficherInfosCard(users) {
  users.forEach(user => {
    const carte = document.createElement('div');
    carte.className = "col";
    carte.innerHTML = `
        <article class="hover-card rounded-4 card h-100 border-0">
            <div class="p-3 bg-1 rounded-4 hover-card-inner text-white h-100">
            <div class="card-body p-2">
                <div class="d-flex bg-blur-card p-3 rounded-pill align-items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="90" fill="currentColor" class="bi bi-person-circle"  viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>
                    <p class="mb-2 ms-3 text-white col-5 overflow-hidden"><span class="text-white fw-bold fs-4">Bienvenue</span><br><strong class="d-block" title="${user.name}">${user.name}</strong></p>                    
                </div>
                <div class="row ms-2">
                    <p class="mb-2 small text-white col-6 overflow-hidden"><span class="text-white text-decoration-underline">Email</span><br><strong class="d-block" title="${user.email}">${user.email}</strong></p>
                    <p class="mb-2 small text-white col-6 overflow-hidden"><span class="text-white text-decoration-underline">Username</span><br><strong class="d-block" title="${user.username}">${user.username}</strong></p>
                    <p class="mb-2 small text-white col-6 overflow-hidden"><span class="text-white text-decoration-underline">Phone</span><br><strong class="d-block" title="${user.phone}">${user.phone}</strong></p>
                    <p class="mb-0 small text-white col-6 overflow-hidden"><span class="text-white text-decoration-underline">Website</span><br>
                        <a href="https://${user.website}" target="_blank" rel="noopener noreferrer" class="text-decoration-none text-white d-block" title="${user.website}">${user.website}</a>
                    </p>
                </div>
            </div>
            </div>
        </article>
    `;

    card.appendChild(carte);
    });
}


fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => afficherInfosCard(data))
    .catch(error => {
        erreur.classList.remove("d-none");
        RaisonErreur.innerHTML = error;

    });


changer.addEventListener("click", () => {
    table.classList.toggle("d-none");
    card.classList.toggle("d-none");
});







