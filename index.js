console.log("hello world");

const btn = document.querySelector(".btn");
const ksztalt = document.querySelector(".ksztalt");
const ksztaltW = document.querySelector(".ksztaltW");

const R = document.querySelector(".R").value;
const G = document.querySelector(".G").value;
const B = document.querySelector(".B").value;

const er = document.querySelector(".rg");

btn.addEventListener('click', () => {

    if (ksztalt.value == 1) {
        ksztaltW.innerHTML = "Zamówiłeś żelka: miś"
    } else if (ksztalt.value == 2) {
        ksztaltW.innerHTML = "Zamówiłeś żelka: żabka"
    } else if (ksztalt.value == 2) {
        ksztaltW.innerHTML = "Zamówiłeś żelka: serce"
    } else {
        ksztaltW.innerHTML = "Zamówiłeś żelka: inny"
    }

    er.style.backgroundColor = `${R}${G}${B}`;

})