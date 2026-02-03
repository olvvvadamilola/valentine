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
      if (music && music.paused) music.play().catch(e => console.log("Music play blocked"));
    } else {
      envelope.removeClass("open").addClass("close");
      setTimeout(() => { btn.text("Open"); }, 300);
      clearInterval(envelope.data("petalInterval"));
      petalsContainer.empty();
    }
  }

  // YES: Link to your page
  $("#yes-btn").on("click", function(e) {
    e.stopPropagation();
    window.location.href = "YOUR_LINK_HERE"; 
  });

  // NO: Hide and Seek
  $("#no-btn").on("mouseover touchstart", function(e) {
    e.stopPropagation();
    const x = (Math.random() - 0.5) * 120;
    const y = (Math.random() - 0.5) * 80;
    $(this).css('transform', `translate(${x}px, ${y}px)`);
  });

  envelope.on("click", toggleEnvelope);
  btn.on("click", toggleEnvelope);
});
