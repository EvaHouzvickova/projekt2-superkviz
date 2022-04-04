// Nejdříve si vytvoř objekt, který bude držet voje super otázky :-)

let poleOtazek = [
    { poradiOtazky: '1/4', obrazek: 'obrazky/moncicak.jpg', otazka:'Které letiště bylo hlavní pražské letiště, než bylo v roce 1937 otevřeno Letiště Ruzyně?', odpoved1: 'Letiště v Letňanech', odpoved2: 'Letiště v Kbelích', odpoved3: 'Letiště ve Strašnicích'}, 
    { poradiOtazky: '2/4', obrazek: 'obrazky/moncicak.jpg', otazka:'Ve kterém objektu byl pořízen snímek?', odpoved1: 'Čistírna odpadních vod Bubeneč', odpoved2: 'Pivovar Braník', odpoved3: 'Podolská vodárna'},
    { poradiOtazky: '3/4', obrazek: 'obrazky/moncicak.jpg', otazka:'Víte jak je vysoká velká bronzová socha jezdecká socha Jana Žižky na Vítkově?', odpoved1: '6 metrů', odpoved2: '12 metrů', odpoved3: '9 metrů'},
    { poradiOtazky: '4/4', obrazek: 'obrazky/moncicak.jpg', otazka:'Poznáte sídliště na obrázku?', odpoved1: 'Černý Most', odpoved2: 'Lužiny', odpoved3: 'Barrandovské'}
]

let kviz = document.querySelector('#kviz');
let poradi = document.querySelector('#poradi');
let otazka = document.querySelector('#otazka');
let obsah = document.querySelector('#obsah');
let foto = document.querySelector('#foto');
let obrazek = document.querySelector('#obrazek');
let moznostiOdpovedi = document.querySelector('#moznosti');
let odpovedi = document.querySelector('#odpovedi');
let vysledek = document.querySelector('#vysledek');
let hodnoceni = document.querySelector('#hodnoceni');



// Dále budeš potřebovat další proměnné - jaké?


// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function zobrazOtazku() {}

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() {}

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() {}