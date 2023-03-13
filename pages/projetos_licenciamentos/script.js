let hero_btn = document.getElementById("btn_hero_saibaMais");

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop -100];
    }
}

hero_btn.addEventListener('click', function() {
    window.scroll(0,findPos(document.getElementById("cards")));
});


const cardID = document.getElementById("cards");

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