const navMenu = document.getElementById("links");
const toggle = document.querySelector(".nav-icon");

const n1Section = document.getElementById("sl1");
const n2Section = document.getElementById("sl2");
const n3Section = document.getElementById("sl3");
const n4Section = document.getElementById("sl4");

const hiddenSet = () => {
    n1Section.classList.add("hidden");
    n2Section.classList.add("hidden");
    n3Section.classList.add("hidden");
    n4Section.classList.add("hidden");
}

window.onload = () => {
    document.getElementById("sb1").onclick = (e) => {
        e.preventDefault();
        hiddenSet();
        n1Section.classList.toggle("hidden");
    };
    document.getElementById("sb2").onclick = (e) => {
        e.preventDefault();
        hiddenSet();
        n2Section.classList.toggle("hidden");
    };
    document.getElementById("sb3").onclick = (e) => {
        e.preventDefault();
        hiddenSet();
        n3Section.classList.toggle("hidden");
    };
    document.getElementById("sb4").onclick = (e) => {
        e.preventDefault();
        hiddenSet();
        n4Section.classList.toggle("hidden");
    };
    document.getElementById("linkd").onclick = (e) => {
        e.preventDefault();
        navMenu.classList.toggle("hidden");
    };
}