const chatBubble = document.getElementById("chatBubble");
const aboutSection = document.getElementById("about");



function say(message, duration = 3500) {
  chatBubble.innerText = message;
  chatBubble.style.display = "block";
  setTimeout(() => {
    chatBubble.style.display = "none";
  }, duration);
}
// 1. Greet + Suggest scroll slowly on load
window.addEventListener("load", () => {
  setTimeout(() => {
    say("Namaste! 🙏 Step into the world of my Sir Swarit.", 6000);
  }, 800);

  setTimeout(() => {
    say("Scroll down slowly to explore ⬇️", 6700);
  }, 9000); // 6 seconds after initial greeting

  // Trigger hover suggestion after 10 seconds
  setTimeout(() => {
    say("Try hovering over the image 👆", 9100);
  }, 16800); // 10 seconds delay after the second message
});

const aiAgent = document.getElementById("ai-agent");

aiAgent.addEventListener("click", () => {
  say("Scroll down slowly ⬇️", 4000); // Show the message for 4 seconds
});


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// 🔹 Zoom the window image slowly (over 150vh)
gsap.to('.hero-img', {
  scale: 8,
  transformOrigin: 'center center',
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.zoomScroll',
    start: 'top top',
    end: 'bottom+=100 top', // zoom spans full 150vh
    scrub: 0.5,
  }
});

// 🔹 Fade out the zoomed window image (after zoom finishes)
gsap.to('.hero-zoom', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.scrollDist',
    start: 'top 90%',
    end: 'top 70%',
    scrub: true,
  }
});

// 🔹 Parallax animation starts AFTER zoom
gsap.timeline({
  scrollTrigger: {
    trigger: '.scrollDist',
    start: 'top top',
    end: '100% 100%',
    scrub: 1,
  }
})
  .fromTo('.sky', { y: 0 }, { y: -200 }, 0)
  .fromTo('.cloud1', { y: 100 }, { y: -800 }, 0)
  .fromTo('.cloud2', { y: -150 }, { y: -500 }, 0)
  .fromTo('.cloud3', { y: -50 }, { y: -650 }, 0)
  .fromTo('.mountBg', { y: -10 }, { y: -100 }, 0)
  .fromTo('.mountMg', { y: -30 }, { y: -250 }, 0)
  .fromTo('.mountFg', { y: -50 }, { y: -600 }, 0);

// 🔹 Arrow button interactions
const arrowBtn = document.querySelector('#arrow-btn');

arrowBtn?.addEventListener('mouseenter', () => {
  gsap.to('.arrow', {
    y: 10,
    duration: 0.8,
    ease: 'back.inOut(3)',
    overwrite: 'auto',
  });
});

arrowBtn?.addEventListener('mouseleave', () => {
  gsap.to('.arrow', {
    y: 0,
    duration: 0.5,
    ease: 'power3.out',
    overwrite: 'auto',
  });
});

arrowBtn?.addEventListener('click', () => {
  gsap.to(window, {
    scrollTo: innerHeight,
    duration: 1.5,
    ease: 'power1.inOut',
  });
});







// let smoother = ScrollSmoother.create({
//   smooth: 1.2,
//   effects: true,
//   normalizeScroll: true
// });

gsap.utils.toArray(".col").forEach((col, index) => {
  gsap.to(col, {
    yPercent: -100 * (index + 1) * 0.46,
    ease: "none",
    scrollTrigger: {
      trigger: col,
      start: "top 70%",
      end: "bottom top",
      scrub: 1
    }
  });
});

function adjustGridHeight() {
  let firstCol = document.querySelector(".col:first-child");
  let grid = document.querySelector(".grid");

  if (firstCol && grid) {
    let firstColHeight = firstCol.scrollHeight;
    let firstColOffset = 0.32 * firstColHeight;
    grid.style.height = (firstColHeight - firstColOffset) + "px";
  }
}

window.addEventListener("load", adjustGridHeight);
window.addEventListener("resize", adjustGridHeight);


gsap.set('.title1', { visibility: 'visible' });


gsap.from(".grid", {
  opacity: 0,
  y: 100,
  ease: "power2.out",
  duration: 1,
  delay: .2,
  scrollTrigger: {
    trigger: ".grid",
    start: "top 100%",
    toggleActions: "play none none none"
  }
});





function getRandomVisitorCount() {
  return Math.floor(Math.random() * 3) + 1; // Random number between 1 and 6
}

function updateVisitorTab() {
  const visitorCountElement = document.getElementById('visitorCount');
  const randomCount = getRandomVisitorCount();
  visitorCountElement.textContent = randomCount;
}

updateVisitorTab();

setInterval(updateVisitorTab, 20000); 


















(function() {
  "use strict";
  
  var card = document.getElementById('card'),
      gloss = card.querySelector('.card__gloss'),
      content = card.querySelector('.card__content'),
      width = window.innerWidth,
      height = window.innerHeight;
  
  
  function init() {
    bindMouse();
    
    // Initial tilt
    light(350, -125);
    tilt(350, -125);    
  }
  
  function bindMouse() {
    document.addEventListener('mousemove', (event) => {
      let x = event.clientX - (width / 2),
          y = event.clientY - (height / 2);

      light(x, y);
      tilt(x, y);
    });
  }
  
  
  function light(x, y) {
    let angle = (Math.atan2(y, x) * 180) / Math.PI - 90;
    
    gloss.style.background = 'linear-gradient(' + angle + 'deg, rgba(255, 255, 255,' + y / height * .9 + ') 0%, rgba(255, 255, 255, 0) 80%)';    
  }
  
  function tilt(x, y) {
    let force = 80,
        rx = (x / width) * force,
        ry = (y / height) * -force;

    card.style.transform = 'rotateY(' + (rx) + 'deg) rotateX(' + (ry) + 'deg)';    
    // content.style.transform = 'translateX(' + (rx * .75) + 'px) translateY(' + (ry * .75) + 'px)';
  }
  
  
  
  
  init();
  
})();





(function() {
  "use strict";
  
  var card = document.getElementById('cardq'),
      gloss = card.querySelector('.cardq__gloss'),
      content = card.querySelector('.cardq__content'),
      width = window.innerWidth,
      height = window.innerHeight;
  
  
  function init() {
    bindMouse();
    
    // Initial tilt
    light(350, -125);
    tilt(350, -125);    
  }
  
  function bindMouse() {
    document.addEventListener('mousemove', (event) => {
      let x = event.clientX - (width / 2),
          y = event.clientY - (height / 2);

      light(x, y);
      tilt(x, y);
    });
  }
  
  
  function light(x, y) {
    let angle = (Math.atan2(y, x) * 180) / Math.PI - 90;
    
    gloss.style.background = 'linear-gradient(' + angle + 'deg, rgba(255, 255, 255,' + y / height * .9 + ') 0%, rgba(255, 255, 255, 0) 80%)';    
  }
  
  function tilt(x, y) {
    let force = 80,
        rx = (x / width) * force,
        ry = (y / height) * -force;

    card.style.transform = 'rotateY(' + (rx) + 'deg) rotateX(' + (ry) + 'deg)';    
    // content.style.transform = 'translateX(' + (rx * .75) + 'px) translateY(' + (ry * .75) + 'px)';
  }
  
  
  
  
  init();
  
})();



(function() {
  "use strict";
  
  var card = document.getElementById('cardw'),
      gloss = card.querySelector('.cardw__gloss'),
      content = card.querySelector('.cardw__content'),
      width = window.innerWidth,
      height = window.innerHeight;
  
  
  function init() {
    bindMouse();
    
    // Initial tilt
    light(350, -125);
    tilt(350, -125);    
  }
  
  function bindMouse() {
    document.addEventListener('mousemove', (event) => {
      let x = event.clientX - (width / 2),
          y = event.clientY - (height / 2);

      light(x, y);
      tilt(x, y);
    });
  }
  
  
  function light(x, y) {
    let angle = (Math.atan2(y, x) * 180) / Math.PI - 90;
    
    gloss.style.background = 'linear-gradient(' + angle + 'deg, rgba(255, 255, 255,' + y / height * .9 + ') 0%, rgba(255, 255, 255, 0) 80%)';    
  }
  
  function tilt(x, y) {
    let force = 80,
        rx = (x / width) * force,
        ry = (y / height) * -force;

    card.style.transform = 'rotateY(' + (rx) + 'deg) rotateX(' + (ry) + 'deg)';    
    // content.style.transform = 'translateX(' + (rx * .75) + 'px) translateY(' + (ry * .75) + 'px)';
  }
  
  
  
  
  init();
  
})();



(function() {
  "use strict";
  
  var card = document.getElementById('carde'),
      gloss = card.querySelector('.carde__gloss'),
      content = card.querySelector('.carde__content'),
      width = window.innerWidth,
      height = window.innerHeight;
  
  
  function init() {
    bindMouse();
    
    // Initial tilt
    light(350, -125);
    tilt(350, -125);    
  }
  
  function bindMouse() {
    document.addEventListener('mousemove', (event) => {
      let x = event.clientX - (width / 2),
          y = event.clientY - (height / 2);

      light(x, y);
      tilt(x, y);
    });
  }
  
  
  function light(x, y) {
    let angle = (Math.atan2(y, x) * 180) / Math.PI - 90;
    
    gloss.style.background = 'linear-gradient(' + angle + 'deg, rgba(255, 255, 255,' + y / height * .9 + ') 0%, rgba(255, 255, 255, 0) 80%)';    
  }
  
  function tilt(x, y) {
    let force = 80,
        rx = (x / width) * force,
        ry = (y / height) * -force;

    card.style.transform = 'rotateY(' + (rx) + 'deg) rotateX(' + (ry) + 'deg)';    
    // content.style.transform = 'translateX(' + (rx * .75) + 'px) translateY(' + (ry * .75) + 'px)';
  }
  
  
  
  
  init();
  
})();
