var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var listItems = document.querySelectorAll('#restaurants li');

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    var selectedFilters = Array.from(checkboxes)
      .filter(function(checkbox) {
        return checkbox.checked;
      })
      .map(function(checkedCheckbox) {
        return checkedCheckbox.id;
      });

    listItems.forEach(function(listItem) {
      var listItemClasses = Array.from(listItem.classList);

      if (selectedFilters.length === 0 || selectedFilters.every(function(filter) {
        return listItemClasses.includes(filter);
      })) {
        listItem.classList.remove('hide');
      } else {
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