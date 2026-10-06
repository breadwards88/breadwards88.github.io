const navMenu = document.getElementById("links");
const toggle = document.querySelector(".nav-icon");



window.onload = () => {
    document.getElementById("linkd").onclick = (e) => {
        e.preventDefault();
        navMenu.classList.toggle("hidden");
    };
}
