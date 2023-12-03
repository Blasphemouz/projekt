// Söögikohtade andmed
let kohad = [
  {
    Nimi: "Delta kohvik",
    Info: {
      Aadress: "Narva mnt 18",
      Lahtiolekuajad: "E-R 11.00-17.00",
      Hinnaklass: "$$",
      Kirjeldus: "Delta kohvik on klassikaline koolikohvik, mis asub Delta esimesel korrusel. Seal saab nautida maitsvaid toite, olles ümbritsetud ülikooli kiiresti ja busy'st atmosfäärist. Suviti on avatud ka väliterrass, kus saab sooja päikese käes imetleda Emajõe ja rohelusega sisustatud vaadet.",
      Hinnang: "★ 3.5"
    },
    PiltURL: "https://delta.ut.ee/wp-content/uploads/2020/02/Delta_kohvik-1200x800.jpg",
  },
  {
    Nimi: "Restoran Muru",
    Info: {
      Aadress: "Roheline tänav 14, Tähtvere küla",
      Lahtiolekuajad: "E-R 10.00-19.30, L-P 10.00-17.30",
      Hinnaklass: "$",
      Kirjeldus: "Kui otsite kohta, kus saab nautida enda toitu olles ümbritsetud rohelisusest ja hubasest keskkonnast, siis Restoran Muru on selle jaoks õige valik. Tähtveres asuvas restoranis ootavad teid külalislahked teenindajad ning maitsvad ja kosutavad road. Iga päev kell 10-12 pakutakse Murus hommikumenüüd ja tööpäevadel kella 12-15 vahemikus on pakkumises ka päevapraad ja ka kõigi lemmik: supp! Restoran on piisavalt suur - mahutab lausa 150 inimest - nii et koha leiab kõigile. Suveperioodil on avatud ka õueala. Samuti on alati võimalus (kokkuleppel) korraldada ka mitme sajale külalisele üritusi, isegi väljaspool lahtiolekuaegu.",
      Hinnang: "★ 4.6"
    },
    PiltURL: "https://visittartu.com/sites/default/files/vemedia/275190_59f2346d134cedd6a6caa1e4bc3db484.jpg"
  },
  {
    Nimi: "Trikster Tihane",
    Info: {
      Aadress: "Kastani tänav 42",
      Lahtiolekuajad: "E-N 11.30-21.00, R 11.30-22.00, L 12.00-22.00",
      Hinnaklass: "$",
      Kirjeldus: "Tartu Aparaaditehases leidub mitmeid häid söögikohti ning üks kõige märkimisväärsematest neist on Kohvik-Resto Trikster Tihane. Oma modernse sisekujunduse ja heade toitudega muutub Trikster Tihane peale esimest külaliskäiku teie uueks lemmikuks. Menüüst võib leida hommikusööke, lõunapakkumisi, a la carte menüüd ja ka taimetoidu võimalusi. Siseruumis on 80 kohta ning see sobib igasuguste ürituste korraldamiseks. Lisaks sellele kõigele on võimalik Trikster Tihasest tellida ka catering teenust.",
      Hinnang: "★ 4.6"
    },
    PiltURL: "https://trikstertihane.ee/wp-content/uploads/2020/12/DSC04189-Edit-2.jpg"
  },
  {
    Nimi: "Beckeri pubi",
    Info: {
      Aadress: "Lembitu 1e",
      Lahtiolekuajad: "E-R 10.00 -16.00",
      Hinnaklass: "$$",
      Kirjeldus: "Beckeri pubi on väike vaikne lapsesõbralik söögikoht Vaksali läheduses. Beckeri pubi paistab silma just oma suurte ja maitsvate toiduportsude tõttu. Menüü on valikurohke, nii et igaüks võib leida endale midagi meelepärast. Pubis on kaks saali: üks suurem, kus käivad lõunatamas lõunapausil olevad ehitajad, ja teine väiksem, mis sobib just juhuslikele möödaminejatele. On olemas ka õueala. Pubi on lastesõbralik.",
      Hinnang: "★ 4.7"
    },
    PiltURL: "https://www.turismiweb.ee/files/Photos/beckeri-pubi-1695.jpg"
  },
  {
    Nimi: "Restoran Balkan",
    Info: {
      Aadress: "Rüütli tänav 5",
      Lahtiolekuajad: "E-P 12.00-00.00",
      Hinnaklass: "$$",
      Kirjeldus: "Kui tunnete soovi millegi erineva ja teistsuguse vastu, siis Restoran Balkan just seda pakubki. Toidumenüüst võib leida traditsioonilis Bulgaaria ja Kreeka roogasid, mida ükski teine restoran ei paku. Õhkkonna õhutamiseks kuuleb restoranis ka bulgaaria ja kreeka muusikat ning teenindus on nagu Balkani kultuurile omane sõbralik ja külalislahke. Restoran pakub päevapraade ja suppe. Ettetellimisel saab ka broneerida privaatse ruumi peolauaga, mis mahutab 15 inimest.",
      Hinnang: "★ 3.5"
    },
    PiltURL: "https://www.restoranbalkan.ee/uploads/images/Gallery/pildigalerii/rest-1.jpg"
  },
  {
    Nimi: "Ränduri Pubi",
    Info: {
      Aadress: "Turu tänav 2",
      Lahtiolekuajad: "E-L 10.00-21.00, P 10.00-18.00",
      Hinnaklass: "$$",
      Kirjeldus: "Nagu nimigi ütleb, tõmbab Ränduri Pubi tänu oma asukohale - Tasku keskuse teisel korrusel ja Tartu bussijaama läheduses - kõiki väsinuid šoppajaid ja reisiselle. Pubi interjöör loob tänu rohkele puidust mööblile hubase keskkonna. Kui satute olema Tasku keskuses kella 11.45 - 14.30 paiku, siis kindlasti külastage Ränduri Pubi, et mitte ilma jääda nende rikkaliku valikuga ja klientide poolt kiidetud lõunabuffeest. Pubis on ka laste mängutuba, nii et tegevust leiab kõigile. Siseruum mahutab 130 inimest.",
      Hinnang: "★ 4.0"
    },
    PiltURL: "https://visittartu.com/sites/default/files/vemedia/241045_25608a163640da05f0f43e7fe68b03f1.jpg"
  },
  {
    Nimi: "Püssirohukelder",
    Info: {
      Aadress: "Lossi tänav 28",
      Lahtiolekuajad: "P-T 12.00-22.00, K-L 12.00-01.00",
      Hinnaklass: "$$",
      Kirjeldus: "Püssirohukeldrisse astudes rändate ajas 300 aastat tagasi, nii tänu restorani põnevale sisekujundusele kui ka eesti- ja saksapärasele menüüle. Kohapeal saab maitsta restorani omaenda patenteeritud õlu “Püssirohu Punane” ja suppe, mida restorani sõnul kuskilt mujalt ei leia. Restoran mahutab 300 inimest ning on võimalus ka pidada soovi korral privaatseid sündmuseid. Lisaks pearuumile leidub ka kaks väiksemat privaatsemat tuba: Katariina II auks nimetatud Katariina tuba, kuhu mahub 25 inimest, ja Schrammi kamber, kuhu saab 30 inimest end mugavalt pika laua ümber ära mahutada. Suvel on avatud ka väliterrass.",
      Hinnang: "★ 4.3"
    },
    PiltURL: "https://pyss.ee/wp-content/gallery/yldine/img_2584.jpg"
  },
  {
    Nimi: "Restoran Kampus",
    Info: {
      Aadress: "Rüütli tänav 7",
      Lahtiolekuajad: "T-N 12.00-23.00, R-L 12.00-01.00, P-E 12.00-21.00",
      Hinnaklass: "$$",
      Kirjeldus: "Kui te ei suuda valida ainult ühte restorani ja soovite proovida nii palju erinevaid kohti kui võimalik, siis Restoran Kampus on teie jaoks õige koht. Tegemist pole ainult ühe restoraniga, vaid mitme söögikohaga ühes kohas. Tartu vanalinnas tuiksoonel ootavad teid sellised kohad nagu Peakoka nurk, Uulitsa Tänavagurmee ja Kauss Poke. Kui aga kõht polegi väga tühi ja isu on pigem meelemürkide vastu (alkohol), siis leiab Kampusest ka suure joogi valikuga baari. Uulitsast leidub igasugust tänavagurmeed: boad, burgerid ja käsitööfriikad. Kauss Poke pakub midagi nii taimetoidulistele kui ka lihaarmastajatele. Peakoka nurk suudab külalisi alati üllatada eksklusiivsete ja mänguliste toidunaudingutega.",
      Hinnang: "★ 4.5"
    },
    PiltURL: "https://visittartu.com/sites/default/files/vemedia/301428_b603dbd3c5c9805855e6fbd41c14cce0.jpg"
  },
  {
    Nimi: "Vapiano",
    Info: {
      Aadress: "Riia tänav 2",
      Lahtiolekuajad: "E-K 11.00-21.00, N-R 11.00-22.00, L 12.00-22.00, P 12.00-21.00",
      Hinnaklass: "$$",
      Kirjeldus: "Vapiano menüü pakub teile tõelist itaalia toidu elamust. Valik on lai: pitsad, pastad, salatid, antipastisid ja magustoidud. Nagu nende hüüdlausest - 'Värskuse kodu!' - võib välja lugeda, on tegemist restoraniga, kus värskus ja nauding on esmakohal. Restoran asub kvartalis ning hubasele õhkkonnale aitab kaasa saalis olev rohelus ja puitmööbel.",
      Hinnang: "★ 4.3"
    },
    PiltURL: "https://media-cdn.tripadvisor.com/media/photo-s/0c/16/59/ee/vapiano-in-kvartal.jpg"
  },
  {
    Nimi: "Tokyo sushibaar",
    Info: {
      Aadress: "Ülikooli tänav 5, Riia tänav 2",
      Lahtiolekuajad: "T-N 12.00-22.00, R 12.00-23.00, L 13.00-23.00, P 13.00-21.0",
      Hinnaklass: "$$",
      Kirjeldus: "Tegemist on kõige esimese sushibaariga Tartus. Jaapani restoranile põhinev toiduvalik on ühendatud europaalike maitsetega ja sushi pole ainus, mida seal pakutakse. Seega kes toorest kala ei armasta, leiab ikkagi ka endale sealt midagi meelepärast. Ruumi mahub ära kuni 50 inimest ja saab reserveerida ka privaatruumi. Võimalik on ka kojutoomine.",
      Hinnang: "★ 4.7"
    },
    PiltURL: "https://ringo.eco/content/uploads/2022/02/Tokyo-Sushibaar-Kvartal.jpg"
  },
  {
    Nimi: "Wok Stop",
    Info: {
      Aadress: "Riia tänav 1",
      Lahtiolekuajad: "E-N 10.00-22.00, R-L 10.00-0.00,  P 10.00-21.00",
      Hinnaklass: "$",
      Kirjeldus: "Kas keegi ütles aasia tänavatoit? Sest Wok Stop on siin! Indiast ja Nepalist pärit oma ala professionaalide käe all valmivad värskest toorainest maitsvad vokiroad. Tartu Kaubamaja Wok Stop menüü pakub 15 vokirooga, kuid spetsiifilise soovi korral saab kombineerida ka oma enda roa. Lisaks sellele leidub laia valikuga kokteilimenüü.",
      Hinnang: "★ 4.3"
    },
    PiltURL: "https://www.tartukaubamaja.ee/wp-content/uploads/2023/05/wokstop6-768x513.jpg"
  },
]

// Nupule vajutuse kontroll
document.querySelectorAll('.nimi').forEach(restoran => {
  restoran.addEventListener('click', function(event) {
    localStorage.removeItem('RestoraniInfo');
    // Söögikoha nime meeldejätmine
    let söögikoht = event.currentTarget.querySelector('h4').innerText;
    // Vajalike andmete leidmine
    let andmed = kohad.find(rest => rest.Nimi === söögikoht)
    if (andmed) {
    // Söögikoha info salvestamine localStorage'isse
    localStorage.setItem('RestoraniInfo', JSON.stringify(andmed));
    }
    // Uue lehe avamine
    uusKoht();
  });
});

function uusKoht() {
  window.location.href = 'koht.html';
};
