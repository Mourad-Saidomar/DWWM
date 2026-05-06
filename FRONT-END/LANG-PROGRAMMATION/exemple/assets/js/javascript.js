const heroBtn = document.querySelector('.hero button');
const bgCards = document.querySelectorAll('.bg-card');

heroBtn.addEventListener('click', function() {
    bgCards.forEach(card => {
        card.classList.add('bg-primary');
    });
});





