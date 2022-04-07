
let poleOtazek = [
    { poradiOtazky: '1/4', obrazek: 'obrazky/moncicak.jpg', otazka: 'Které letiště bylo hlavní pražské letiště, než bylo v roce 1937 otevřeno Letiště Ruzyně?', odpoved1: 'Letiště v Letňanech', odpoved2: 'Letiště v Kbelích', odpoved3: 'Letiště ve Strašnicích', spravnaOdpoved:'Letiště v Kbelích' },
    { poradiOtazky: '2/4', obrazek: 'obrazky/moncicak.jpg', otazka: 'Ve kterém objektu byl pořízen snímek?', odpoved1: 'Čistírna odpadních vod Bubeneč', odpoved2: 'Pivovar Braník', odpoved3: 'Podolská vodárna', spravnaOdpoved:'Podolská vodárna'},
    { poradiOtazky: '3/4', obrazek: 'obrazky/moncicak.jpg', otazka: 'Víte jak je vysoká velká bronzová socha jezdecká socha Jana Žižky na Vítkově?', odpoved1: '6 metrů', odpoved2: '12 metrů', odpoved3: '9 metrů', spravnaOdpoved:'9 metrů'},
    { poradiOtazky: '4/4', obrazek: 'obrazky/moncicak.jpg', otazka: 'Poznáte sídliště na obrázku?', odpoved1: 'Černý Most', odpoved2: 'Lužiny', odpoved3: 'Barrandovské', spravnaOdpoved:'Barrandovské'}
]

let kviz = document.querySelector('#kviz');
let poradi = document.querySelector('#poradi');
let otazka = document.querySelector('#otazka');
let obsah = document.querySelector('#obsah');
let foto = document.querySelector('#foto');
let obrazek = document.querySelector('#obrazek');
let moznosti = document.querySelector('#moznosti');
let odpovedi = document.querySelector('#odpovedi');
let vysledek = document.querySelector('#vysledek');
let hodnoceni = document.querySelector('#hodnoceni');

let odpoved0 = document.querySelector('#odpoved0');
let odpoved1 = document.querySelector('#odpoved1');
let odpoved2 = document.querySelector('#odpoved2');

let otazka1Vyhodnoceni = document.createElement('h3');
hodnoceni.appendChild(otazka1Vyhodnoceni);
let text1Vyhodnoceni = document.createElement('p');
hodnoceni.appendChild(text1Vyhodnoceni);

let otazka2Vyhodnoceni = document.createElement('h3');
hodnoceni.appendChild(otazka2Vyhodnoceni);
let text2Vyhodnoceni = document.createElement('p');
hodnoceni.appendChild(text2Vyhodnoceni);

let otazka3Vyhodnoceni = document.createElement('h3');
hodnoceni.appendChild(otazka3Vyhodnoceni);
let text3Vyhodnoceni = document.createElement('p');
hodnoceni.appendChild(text3Vyhodnoceni);

let otazka4Vyhodnoceni = document.createElement('h3');
hodnoceni.appendChild(otazka4Vyhodnoceni);
let text4Vyhodnoceni = document.createElement('p');
hodnoceni.appendChild(text4Vyhodnoceni);

let sumarizaceUspesnosti = document.createElement('h2');
hodnoceni.appendChild(sumarizaceUspesnosti);


let poleOdpovedi = [];
let pocetSpravnychOdpovedi = 0;

let i = 0;

function zobrazOtazku() {
    poradi.innerHTML = poleOtazek[i].poradiOtazky;
    foto.src = poleOtazek[i].obrazek;
    otazka.innerHTML = poleOtazek[i].otazka;
    odpoved0.innerHTML = poleOtazek[i].odpoved1;
    odpoved1.innerHTML = poleOtazek[i].odpoved2;
    odpoved2.innerHTML = poleOtazek[i].odpoved3;
}

const tlacitkaOdpovedi = document.querySelectorAll('li');

tlacitkaOdpovedi.forEach((tlacitko) => {
    tlacitko.addEventListener('click', klikNaOdpoved);
});

function klikNaOdpoved(e) {
    console.log(e.target.dataset.odpoved);

    if(e.target.dataset.odpoved == 0) {
        poleOdpovedi.push(poleOtazek[i].odpoved1)
    }
    else if (e.target.dataset.odpoved == 1) {
        poleOdpovedi.push(poleOtazek[i].odpoved2)
    }
    else if (e.target.dataset.odpoved == 2) {
        poleOdpovedi.push(poleOtazek[i].odpoved3)
    }

    if (poleOdpovedi[i] == poleOtazek[i].spravnaOdpoved) {
        pocetSpravnychOdpovedi = pocetSpravnychOdpovedi + 1;
    }

    if(i+1 < poleOtazek.length) {
    i++;
    zobrazOtazku();
    }
    else {
    zobrazVyhodnoceni()
    }
}

function zobrazVyhodnoceni() { 
    kviz.style.display = 'none';
    vysledek.style.display = 'block';
    otazka1Vyhodnoceni.innerHTML = poleOtazek[0].otazka;
    otazka2Vyhodnoceni.innerHTML = poleOtazek[1].otazka;
    otazka3Vyhodnoceni.innerHTML = poleOtazek[2].otazka;
    otazka4Vyhodnoceni.innerHTML = poleOtazek[3].otazka;

    if (poleOdpovedi[0] == poleOtazek[0].spravnaOdpoved) {
        text1Vyhodnoceni.innerHTML = 'Tvoje odpověď: ' + poleOdpovedi[0] + '.' + '<br>To je správně.';
    }
    else {
        text1Vyhodnoceni.innerHTML = 'Tvoje odpověď: ' + poleOdpovedi[0] + '.' + '<br>Správná odpověď je: ' + poleOtazek[0].spravnaOdpoved;
    }
    if (poleOdpovedi[1] == poleOtazek[1].spravnaOdpoved) {
        text2Vyhodnoceni.innerHTML = 'Tvoje odpověď: ' + poleOdpovedi[1] + '.' + '<br>To je správně.';
    }
    else {
        text2Vyhodnoceni.innerHTML = 'Tvoje odpověď: ' + poleOdpovedi[1] + '.' + '<br>Správná odpověď je: ' + poleOtazek[1].spravnaOdpoved;
    }
    if (poleOdpovedi[2] == poleOtazek[2].spravnaOdpoved) {
        text3Vyhodnoceni.innerHTML = 'Tvoje odpověď: ' + poleOdpovedi[2] + '.' + '<br>To je správně.';
    }
    else {
        text3Vyhodnoceni.innerHTML = 'Tvoje odpověď: ' + poleOdpovedi[2] + '.' + '<br>Správná odpověď je: ' + poleOtazek[2].spravnaOdpoved;
    }
    if (poleOdpovedi[3] == poleOtazek[3].spravnaOdpoved) {
        text4Vyhodnoceni.innerHTML = 'Tvoje odpověď: ' + poleOdpovedi[3] + '.' + '<br>To je správně.';
    }
    else {
        text4Vyhodnoceni.innerHTML = 'Tvoje odpověď: ' + poleOdpovedi[3] + '.' + '<br>Správná odpověď je: ' + poleOtazek[3].spravnaOdpoved;
    }

    let skore = (pocetSpravnychOdpovedi/poleOtazek.length)*100;
    sumarizaceUspesnosti.innerHTML = 'Správně ' + pocetSpravnychOdpovedi + ' ze ' + poleOtazek.length + ' otázek. Úspěšnost je ' + skore + ' %.';
}