$(document).ready(function () {
  const envelope = $("#envelope");
  const music = document.getElementById("bg-music");
  let isAnimating = false; // Prevents clicking while animation is running

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
    
    // Attempt to play music
    if (music && music.paused) {
      music.play().catch((e) => console.log("Interaction required for audio"));
    }
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
  }

  envelope.on("click", function () {
    if (isAnimating) return; // Stop logic if currently moving
    isAnimating = true;

    if (envelope.hasClass("open")) {
      closeEnvelope();
    } else {
      openEnvelope();
    }
    
    // Allow clicking again after the animation (1.5s) finishes
    setTimeout(() => {
        isAnimating = false;
    }, 1500); 
  });
});
