// modal menu

function openModal() {
    document.getElementById("modal").style.top = "0px";
}

function closeModal() {
    document.getElementById("modal").style.top = "-400px";
}

// Smooth Scroll
      
const navLink = document.querySelectorAll(".nav-link");

for (const link of navLink) {
link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
e.preventDefault();
const href = this.getAttribute("href");

document.querySelector(href).scrollIntoView({
    behavior: "smooth"
});
}

const heroArrow = document.querySelectorAll(".hero-arrow");

for (const link of heroArrow) {
    link.addEventListener("click", clickHandler);
}

// Form

let form = document.querySelector('.form');
let email = document.querySelector('.input-email');
let message = document.querySelector('.subscription-message');

form.onsubmit = function(evt) {
    evt.preventDefault();
    message.textContent = 'Адрес ' + email.value + ' добавлен в список получателей рассылки.';
};