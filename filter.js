/* Valime välja kõik checkbox ehk filtrinuppude elemendid */
var checkboxes = document.querySelectorAll('input[type="checkbox"]');

/* Valime välja kõiki söögikohti */
var listItems = document.querySelectorAll('#restaurants li');

checkboxes.forEach(function(checkbox) {
  /* Kui tekib muudatud (nt. nupp on vajutatud) käivitab all välja kirjutatud funktsiooni */
  checkbox.addEventListener('change', function() {
    /* Kõik vajutatud nupud lähevad muutujasse selectedFilters */
    var selectedFilters = Array.from(checkboxes)
      /*Filtreerib välja nuppe, mis pole vajutatud */
      .filter(function(checkbox) {
        /* Tagastab nuppe, mis on vajutatud */
        return checkbox.checked;
      })
      /* iga vajutatud nupu kohta nimekirjas teeb muudatuse */
      .map(function(checkedCheckbox) {
        /* Tagastab vajutatud nuppude id-d */
        return checkedCheckbox.id;
      });
    /* Iga söögikoha kohta */
    listItems.forEach(function(listItem) {
      /* söögikoha klassid, ehk filtrid */
      var listItemClasses = Array.from(listItem.classList);
      /* Kui on valitud mingi filter */
      if (selectedFilters.length === 0 || selectedFilters.every(function(filter) {
        /* Tagastab söögikohti mille klassides on valitud filter */
        return listItemClasses.includes(filter);
      })) {
        /* Kui söögikohal on see filter: css klass eemaldatakse, et juhul kui see oli peidetud see saaks uuesti nähtavaks */
        listItem.classList.remove('hide');
      } else {
        /* Kui söögikohal puudub see filter: lisandub css klass hide, mis peidab seda söögikohta */
        listItem.classList.add('hide');
      }
    });
  });
});

/*
Allikad:
https://www.w3schools.com/howto/howto_js_filter_elements.asp

https://webdesign.tutsplus.com/how-to-set-up-a-multi-filter-feature-with-vanilla-javascript--cms-93390t
https://stackoverflow.com/questions/49568981/how-to-apply-filtering-from-multiple-div-element-in-javascript

https://stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions
https://betterprogramming.pub/creating-a-multi-filter-function-to-filter-out-multiple-attributes-javascript-react-rails-5aad8e272142?gi=c496702dee2d
*/