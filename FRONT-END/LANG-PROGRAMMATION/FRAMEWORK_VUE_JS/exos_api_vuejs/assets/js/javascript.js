import { user as User } from "./users.js";

const table = document.getElementById("table");
const erreur = document.getElementById("erreur");
const RaisonErreur = document.getElementById("RaisonErreur");
const card = document.getElementById("card");
const changer = document.getElementById("changer");

const tableauUsers = [];

function ajouterUsersTableau(users) {
    users.forEach((user) => {
        const newUser = new User(user.id, user.name, user.email, user.username, user.phone, user.website);
        const objetUser = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            username: newUser.username,
            phone: newUser.phone,
            website: newUser.website,
        };
        tableauUsers.push(objetUser);
    });
    return tableauUsers;
}

const app = Vue.createApp({
    data() {
        return {
            users: [],
            visible : true,
            bg_bleue_switch: "bg-blur",

        };
    }
}).mount("#app");

/* -----------------------------------Infos API------------------------------------- */
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        app.users = ajouterUsersTableau(data);
        // afficherInfosCard(data);
    })
    .catch((error) => {
        erreur.classList.remove("d-none");
        RaisonErreur.textContent = String(error);
    });

