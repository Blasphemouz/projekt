// Andmete korjamine
fetch('andmed.json')
  .then(vastus => vastus.json())
  .then(kohad => {
    // Nupule vajutuse kontroll
    document.querySelectorAll('.nimi').forEach(restoran => {
      restoran.addEventListener('click', function(event) {
        localStorage.removeItem('RestoraniInfo');
        // Söögikoha nime ülesotsimine ja meeldejätmine
        let söögikoht = event.currentTarget.querySelector('h4').innerText;
        // Vajalike andmete leidmine
        let andmed = kohad.find(rest => rest.Nimi === söögikoht)
        if (andmed) {
        // Söögikoha info salvestamine localStorage'isse
        localStorage.setItem('RestoraniInfo', JSON.stringify(andmed));
        }
        // Uue lehe avamise funktsioon
        uusKoht();
      });
    });
  })
  .catch(error => console.error('Error:', error));

function uusKoht() {
  window.location.href = 'koht.html';
};

/* Allikad
https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

https://www.w3schools.com/js/js_htmldom_eventlistener.asp

https://stackoverflow.com/questions/41410958/open-a-new-html-page-in-a-js-function-and-then-write-some-html-on-it

https://blog.logrocket.com/localstorage-javascript-complete-guide/
*/