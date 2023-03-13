let parceiros_btn = document.getElementById("parceiros-btn");
let servicos_btn = document.getElementById("servicos-btn");
let contato_btn = document.getElementById("contato-btn");
let contato_btn2 = document.getElementById("btn_hero_contato");

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop -100];
    }
}

servicos_btn.addEventListener('click', function() {
    window.scroll(0,findPos(document.getElementById("servicos")));
});

parceiros_btn.addEventListener('click', function() {
    window.scroll(0,findPos(document.getElementById("parceiros")));
});

contato_btn.addEventListener('click', function() {
    window.scroll(0,findPos(document.getElementById("contato")));
});

contato_btn2.addEventListener('click', function() {
    window.scroll(0,findPos(document.getElementById("contato")));
});

const heroID = document.getElementById("hero");
const cardID = document.getElementById("cards");
const servicosID = document.getElementById("servicos");
const parceirosID = document.getElementById("parceiros");

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // 50% of the element is visible
};

//fadein card
const observer1 = new IntersectionObserver(function(entries, observer1) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cardID.style.opacity = "1";
        cardID.style.animation = "fadein 1s ease";
      }
    });
  }, options);
observer1.observe(cardID);

//fadein servicos
const observer2 = new IntersectionObserver(function(entries, observer2) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        servicosID.style.opacity = "1";
        servicosID.style.animation = "fadein 1s ease";
      }
    });
  }, options);
observer2.observe(servicosID);

//fadein parceiros
const observer3 = new IntersectionObserver(function(entries, observer3) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        parceirosID.style.opacity = "1";
        parceirosID.style.animation = "fadein 1s ease";
      }
    });
  }, options);
observer3.observe(parceirosID);

//fadein hero
const observer4 = new IntersectionObserver(function(entries, observer4) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      heroID.style.opacity = "1";
      heroID.style.animation = "fadein 1s ease";
    }
  });
}, options);
observer4.observe(heroID);