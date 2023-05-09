let logoFb = document.getElementById("frog")

// Le but est de changer les logos noirs en logos blancs


// Fonction pour changer le logo facebook

function changeLogo() {
    logoFb.src = "/img/frogorange.png"
}

function resetLogo() {
    logoFb.src = "/img/frognew.png"
}

var sideNav = document.getElementById("sideNav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

// récupération des éléments html via getElementById pour pouvoir les manipuler.

// Appel des fct openNav et closeNav lorsqu'on appuie sur le menu ou sur la croix de fermeture

openBtn.onclick = openNav; 
closeBtn.onclick = closeNav;

// openNav et closeNav ajoutent la classe "active" à la classe sideNav de base. Ce qui permet de modifier les propriétés de la navBar.

function openNav(){
    sideNav.classList.add("active"); // ajout de la partie "active" à la classe sideNav par concaténation.
}

function closeNav(){
    sideNav.classList.remove("active"); // retrait de la partie "active" pour revenir à la classe normale.
}



