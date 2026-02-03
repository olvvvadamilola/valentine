$(document).ready(function () {
  const envelope = $("#envelope");
  const btn = $("#action-btn");
  const music = document.getElementById("bg-music");
  const petalsContainer = $("#petals-container");
  const noBtn = $("#no-btn");

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
      if (music && music.paused) music.play();
    } else {
      envelope.removeClass("open").addClass("close");
      setTimeout(() => { btn.text("Open"); }, 300);
      clearInterval(envelope.data("petalInterval"));
      petalsContainer.empty();
    }
  }

  // PRANK: Runaway Button
  noBtn.on("mouseover touchstart", function () {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      $(this).css("transform", `translate(${x}px, ${y}px)`);
  });

  noBtn.on("click", (e) => { e.stopPropagation(); $("#sike-overlay").css("display", "flex"); });
  
  $("#yes-btn").on("click", (e) => { 
      e.stopPropagation(); 
      $("#video-page").css("display", "flex"); 
      document.getElementById("yes-video").play(); 
  });

  $("#try-again, .close-overlay").on("click", () => { 
      $(".overlay").hide(); 
      noBtn.css("transform", "translate(0,0)");
      document.getElementById("yes-video").pause();
  });

  envelope.on("click", toggleEnvelope);
  btn.on("click", toggleEnvelope);
});
