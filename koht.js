// Andmed võetakse alles pärast uue lehe laadimist
document.addEventListener('DOMContentLoaded', function() {
  // Söögikoha info saamine localStorage'ist
  const salvestatudInfo = localStorage.getItem('RestoraniInfo');
      if (salvestatudInfo) {
        // Andmete tüübi muutmine
        const andmed = JSON.parse(salvestatudInfo);
        // Vajalike andmete kuvamine vastavalt elemendi ID-le
        document.getElementById('nimi').innerText = andmed.Nimi;
        document.getElementById('aadress').innerText = andmed.Info.Aadress;
        document.getElementById('lahtiolekuajad').innerText = andmed.Info.Lahtiolekuajad;
        document.getElementById('hinnaklass').innerText = andmed.Info.Hinnaklass;
        document.getElementById('hinnang').innerText = andmed.Info.Hinnang;
        document.getElementById('kirjeldus').innerText = andmed.Info.Kirjeldus;

        // Pildi kuvamine lehel
        const piltElement = document.getElementById('pilt');
        if (andmed.PiltURL) {
          piltElement.src = andmed.PiltURL;
          piltElement.alt = andmed.Nimi;
        } else {
          piltElement.style.display = 'none';
        }

      } else {
        document.getElementById('nimi').innerText = 'Andmed puuduvad';
      }
  })
