$(document).ready(function () {
  const envelope = $("#envelope");
  const music = document.getElementById("bg-music");

  envelope.on("click", function () {
    if (envelope.hasClass("close")) {
      // Open
      envelope.removeClass("close").addClass("open");
      
      // Play music logic
      if (music && music.paused) {
        music.play().catch((e) => console.log("Audio play error:", e));
      }
    } else {
      // Close
      envelope.removeClass("open").addClass("close");
    }
  });
});
