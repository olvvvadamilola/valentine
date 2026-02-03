$(document).ready(function () {
  const envelope = $("#envelope");
  const music = document.getElementById("bg-music");

  envelope.on("click", function () {
    if (envelope.hasClass("close")) {
      envelope.removeClass("close").addClass("open");
      
      // Attempt to play music on interaction
      if (music && music.paused) {
        music.play().catch((err) => {
          console.log("Audio requires manual interaction first.");
        });
      }
    } else {
      // Return to close state
      envelope.removeClass("open").addClass("close");
    }
  });
});
