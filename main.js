/*
Doplň k obrázkům v HTML data atribut data-kalorie
a jako hodnotu do něj dej číslo, představující kalorickou
hodnotu potraviny na obrázku (číslo si klidně vymysli).

Zařiď, aby se při kliknutí na obrázek volala funkce,
která vypíše kalorickou hodnotu potraviny.


BONUS: počítej a zobrazuj celkový počet sněděných kalorií.
Tj. při klikání na obrázky se postupně sčítají kalorie.
*/

let obrazky = document.querySelectorAll('.ovoce img');
let vysledek = document.querySelector('#vysledek');
let snedeneOvoce = document.querySelector('#snezene-ovoce');
let celkem = 0;

obrazky.forEach((obrazek) => {
    obrazek.addEventListener('click', zobrazKolorie)
});

function zobrazKolorie(event) {
    let obrazek = event.target;
    celkem = celkem + parseInt(obrazek.dataset.kalorie);
    vysledek.textContent = 'Celkem snědeno: ' + celkem + 'kcal/100g';
    console.log(obrazek);
    obrazek.removeEventListener('click', zobrazKolorie);
    snedeneOvoce.appendChild(obrazek);
}