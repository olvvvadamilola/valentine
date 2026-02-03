$(document).ready(function () {
  const envelope = $("#envelope");
  const btnOpen = $("#openBtn");
  const btnClose = $("#closeBtn");
  const music = document.getElementById("bg-music");

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
    
    // Play music when opened
    if (music && music.paused) {
      music.play().catch((e) => console.log("Audio play failed (user interaction needed first)"));
    }
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
  }

  // Button Event Listeners
  btnOpen.click(function() {
    openEnvelope();
  });

  btnClose.click(function() {
    closeEnvelope();
  });
});
