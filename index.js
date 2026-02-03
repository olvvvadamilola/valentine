$(document).ready(function () {
  const envelope = $("#envelope");
  const music = document.getElementById("bg-music");
  let hasInteracted = false;

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");

    if (hasInteracted && music && music.paused) {
      music.play().catch(() => {});
    }
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
  }

  envelope.on("click", function () {
    hasInteracted = true;

    if (envelope.hasClass("open")) {
      closeEnvelope();
      setTimeout(openEnvelope, 400);
    } else {
      openEnvelope();
    }
  });

  setTimeout(openEnvelope, 2000);
});
