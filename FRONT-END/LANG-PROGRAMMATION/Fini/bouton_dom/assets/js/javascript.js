let btn = document.querySelector("#btn")
let messages = [
    "Clic ici pour voir le message", 
    "Clic encore", "Encore un clic", 
    "Tu peux partir maintenant", 
    "Mais non, on recommence"
];
let index = 0;

btn.addEventListener("click", function() {
    btn.textContent = messages[index];
    index = (index + 1) % messages.length; 

});


