var menuButton = document.querySelector(".menu-button");
var hamburgerMenu = document.querySelector(".hamburger-menu");
var menu = document.querySelector(".menu");
var exitIcon = document.querySelector(".close");
var navItems = document.querySelector(".nav-itmes");
menuButton.addEventListener("click", function () {
    menu.classList.toggle("hidden-content");
    exitIcon.classList.toggle("hidden-content");
    hamburgerMenu.classList.toggle("hidden-content");
});
document.querySelectorAll(".list-title")[3].addEventListener("click", function () {
    document.querySelectorAll(".list-title ul")[3].classList.toggle("hidden-ul");
    document.querySelectorAll(".list-title ul")[4].classList.add("hidden-ul");
    document.querySelectorAll(".list-title ul")[5].classList.add("hidden-ul");
    document.querySelectorAll(".arrow")[3].classList.toggle("reversed-arrow");
});
document.querySelectorAll(".list-title")[4].addEventListener("click", function () {
    document.querySelectorAll(".list-title ul")[3].classList.add("hidden-ul");
    document.querySelectorAll(".list-title ul")[4].classList.toggle("hidden-ul");
    document.querySelectorAll(".list-title ul")[5].classList.add("hidden-ul");
    document.querySelectorAll(".arrow")[4].classList.toggle("reversed-arrow");
});
document.querySelectorAll(".list-title")[5].addEventListener("click", function () {
    document.querySelectorAll(".list-title ul")[3].classList.add("hidden-ul");
    document.querySelectorAll(".list-title ul")[4].classList.add("hidden-ul");
    document.querySelectorAll(".list-title ul")[5].classList.toggle("hidden-ul");
    document.querySelectorAll(".arrow")[5].classList.toggle("reversed-arrow");
});
document.querySelectorAll(".list-title")[0].addEventListener("click", function () {
    document.querySelectorAll(".list-title ul")[0].classList.toggle("hidden-ul");
    document.querySelectorAll(".list-title ul")[1].classList.add("hidden-ul");
    document.querySelectorAll(".list-title ul")[2].classList.add("hidden-ul");
    document.querySelectorAll(".arrow")[0].classList.toggle("reversed-arrow");
});
document.querySelectorAll(".list-title")[1].addEventListener("click", function () {
    document.querySelectorAll(".list-title ul")[0].classList.add("hidden-ul");
    document.querySelectorAll(".list-title ul")[1].classList.toggle("hidden-ul");
    document.querySelectorAll(".list-title ul")[2].classList.add("hidden-ul");
    document.querySelectorAll(".arrow")[1].classList.add("reversed-arrow");
});
document.querySelectorAll(".list-title")[2].addEventListener("click", function () {
    document.querySelectorAll(".list-title ul")[0].classList.add("hidden-ul");
    document.querySelectorAll(".list-title ul")[1].classList.add("hidden-ul");
    document.querySelectorAll(".list-title ul")[2].classList.toggle("hidden-ul");
    document.querySelectorAll(".arrow")[2].classList.add("reversed-arrow");
});
