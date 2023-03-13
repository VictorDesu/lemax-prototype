const mainID = document.getElementById("hero");
const vantagensID = document.getElementById("vantagens");
const vantagensTitle = document.getElementById("vantagens_title");
const dadosID = document.getElementById("hero_dados");

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // 50% of the element is visible
};

//fadein hero
const observer1 = new IntersectionObserver(function(entries, observer1) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        mainID.style.opacity = "1";
        mainID.style.animation = "fadein 1.5s ease";
      }
      else {
        mainID.style.opacity = "0";
        mainID.style.animation = "none";
      }
    });
  }, options);
observer1.observe(mainID);

//fadein vantagens
const observer2 = new IntersectionObserver(function(entries, observer2) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        vantagensID.style.opacity = "1";
        vantagensID.style.animation = "fadein_side 1s ease";
      }
      else {
        vantagensID.style.opacity = "0";
        vantagensID.style.animation = "none";
      }
    });
  }, options);
observer2.observe(vantagensID);

//fadein dados
const observer3 = new IntersectionObserver(function(entries, observer3) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dadosID.style.opacity = "1";
        dadosID.style.animation = "fadein 1.5s ease";
      }
      else {
        dadosID.style.opacity = "0";
        dadosID.style.animation = "none";
      }
    });
  }, options);
observer3.observe(dadosID);