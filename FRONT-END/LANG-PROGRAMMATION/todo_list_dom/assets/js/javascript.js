const inputTache = document.getElementById('inputTache');
const listeTaches = document.getElementById('listeTaches');
const btnAjouter = document.getElementById('btnAjouter');

btnAjouter.addEventListener('click', () => {
    const nouvelleTache = document.createElement('li');
    nouvelleTache.className = "d-flex align-items-center rounded border justify-content-between p-3 m-3 bg-light";
    nouvelleTache.innerHTML = `<p class="m-0 cursor-pointer">${inputTache.value}</p> <button class="btn btn-danger">Supprimer</button>`;
    
    listeTaches.appendChild(nouvelleTache);
    inputTache.value = "";

    nouvelleTache.querySelector('button').addEventListener('click', () => {
        nouvelleTache.remove();
    });

    nouvelleTache.querySelector('p').addEventListener('click', () => {
        nouvelleTache.classList.toggle('termine');
    });
});















