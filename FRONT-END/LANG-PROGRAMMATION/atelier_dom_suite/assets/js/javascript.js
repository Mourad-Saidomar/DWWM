let btn = document.querySelector("#btn")


btn.addEventListener("click", function() {
    let message = document.querySelector("#message")
    message.textContent = message.textContent.toUpperCase();
    message.style.color = "red";
    message.style.fontWeight = "bold";
});




