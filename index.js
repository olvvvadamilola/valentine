$(document).ready(function () {
  const envelope = $("#envelope");
  const music = document.getElementById("bg-music");

  envelope.on("click", function () {
    if (envelope.hasClass("close")) {
      envelope.removeClass("close").addClass("open");
      if (music && music.paused) {
        music.play().catch(() => {});
      }
    } else {
      // Transition delay in CSS handles the smooth "letter first, then flap" sequence
      envelope.removeClass("open").addClass("close");
    }
  });
});
