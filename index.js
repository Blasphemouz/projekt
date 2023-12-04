function reveal() {
  // Valib kõik elemendid, millele on antud klass ".reveal"
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    // Salvestab lehe kõrguse
    var windowHeight = window.innerHeight;
    // Salvestab iga elemendi ülemise piiri suhteliselt akna ülemisest servast
    var elementTop = reveals[i].getBoundingClientRect().top;
    // Määrab, kui palju pikslitest elemendi ülemisest servast akna sisemise kõrgusega võrreldes peab olema nähtav, et klass "active" lisataks
    var elementVisible = 150;

    // Kontrollib, kas elemendi ülemine piir on piisavalt allpool akna ülemist serva
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Lisab 'reveal' funktsiooni kerimise sündmuse kuulajaks
window.addEventListener("scroll", reveal);

/*
Allikas:
https://alvarotrigo.com/blog/css-animations-scroll/

*/