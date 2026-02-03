$(document).ready(function () {
  const envelope = $("#envelope");
  const btn = $("#action-btn");
  const music = document.getElementById("bg-music");
  const petalsContainer = $("#petals-container");

  function createPetal() {
    if (!envelope.hasClass("open")) return;
    const petal = $('<div class="petal"></div>');
    const size = Math.random() * 15 + 10 + "px";
    const left = Math.random() * 100 + "vw";
    const duration = Math.random() * 3 + 2 + "s";
    petal.css({ width: size, height: size, left: left, animationDuration: duration });
    petalsContainer.append(petal);
    setTimeout(() => { petal.remove(); }, 5000);
  }

  function toggleEnvelope() {
    if (envelope.hasClass("close")) {
      envelope.removeClass("close").addClass("open");
      setTimeout(() => { btn.text("Close"); }, 300);
      const interval = setInterval(createPetal, 250);
      envelope.data("petalInterval", interval);
      if (music && music.paused) {
        music.play().catch(err => console.log("Audio waiting for user click."));
      }
    } else {
      envelope.removeClass("open").addClass("close");
      setTimeout(() => { btn.text("Open"); }, 300);
      clearInterval(envelope.data("petalInterval"));
      petalsContainer.empty();
    }
  }

  envelope.on("click", toggleEnvelope);
  btn.on("click", toggleEnvelope);
});
