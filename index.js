$(document).ready(function () {
  var envelope = $("#envelope");
  var music = document.getElementById("bg-music");
  
  // Function to open envelope
  function open() {
    envelope.addClass("open").removeClass("close");
    // Play music once after first click (mobile friendly)
    if (music && music.paused) {
      music.play().catch(function(error) {
        console.log("Audio playback failed:", error);
      });
    }
  }
  
  // Function to close envelope
  function close() {
    envelope.addClass("close").removeClass("open");
  }
  
  // Open on click (replay)
  envelope.click(function () {
    // If already open, reset briefly
    if (envelope.hasClass("open")) {
      close();
      setTimeout(open, 400); // small delay for smooth animation
    } else {
      open();
    }
  });
  
  // Automatically open after 2 seconds
  setTimeout(open, 2000);
});
