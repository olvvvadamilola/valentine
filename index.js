$(document).ready(function () {
  const envelope = $("#envelope");
  const music = document.getElementById("bg-music");

  envelope.on("click", function () {
    if (envelope.hasClass("close")) {
      envelope.removeClass("close").addClass("open");
      
      if (music && music.paused) {
        music.play().catch((err) => {
          console.log("Interaction required for audio.");
        });
      }
    } else {
      envelope.removeClass("open").addClass("close");
    }
  });
});
