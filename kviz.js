
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

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() { 
    kviz.style.display = 'none';
    vysledek.style.display = 'block';
    
}