document.addEventListener("DOMContentLoaded", function () {
  var musicToggle = document.getElementById("music-toggle");
  var backgroundMusic = document.getElementById("background-music");

  musicToggle.addEventListener("click", function () {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      musicToggle.classList.remove("music-muted");
    } else {
      backgroundMusic.pause();
      musicToggle.classList.add("music-muted");
    }
  });
});

//
document.addEventListener("DOMContentLoaded", function () {
  function typeWriterEffect(element, text, speed) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // Apply typewriter effect
  document.querySelectorAll(".big-text").forEach((element) => {
    let text = element.innerText;
    element.innerText = "";
    typeWriterEffect(element, text, 50);
  });

  // Apply typewriter effect to p tags
  document.querySelectorAll("p").forEach((el) => {
    let text = el.innerText;
    el.innerText = "";
    typeWriterEffect(el, text, 30); // Faster speed for paragraphs
  });
});

//

document.addEventListener("DOMContentLoaded", function () {
  console.log("Fade-in script initialized!"); // Debugging

  const fadeInElements = document.querySelectorAll(".fade-in");

  if (fadeInElements.length === 0) {
    console.warn("No elements with .fade-in found.");
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element is visible:", entry.target); // Debugging
          entry.target.classList.add("fade-in-visible");
          observer.unobserve(entry.target); // Stops observing after fade-in
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeInElements.forEach((element) => observer.observe(element));
});
