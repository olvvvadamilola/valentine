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
      btn.text("Close");
      const interval = setInterval(createPetal, 250);
      envelope.data("petalInterval", interval);
      if (music && music.paused) music.play().catch(e => {});
    } else {
      envelope.removeClass("open").addClass("close");
      btn.text("Open");
      clearInterval(envelope.data("petalInterval"));
      petalsContainer.empty();
    }
  }

  $("#yes-btn").on("click", function(e) {
    e.stopPropagation();
    window.location.href = "YOUR_LINK_HERE"; 
  });

  // NO: Hide and Seek (Screen-wide version)
  noBtn.on("touchstart mouseover", function(e) {
    if (e.type === "touchstart") e.preventDefault();
    e.stopPropagation();

    // Get screen dimensions (minus button size to keep it on screen)
    const maxX = window.innerWidth - $(this).outerWidth();
    const maxY = window.innerHeight - $(this).outerHeight();

    // Generate random absolute positions
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    $(this).css({
      'position': 'fixed',
      'left': randomX + 'px',
      'top': randomY + 'px',
      'transition': '0.2s ease-out',
      'z-index': '9999' // Ensure it stays above everything
    });
  });

  envelope.on("click", toggleEnvelope);
  btn.on("click", toggleEnvelope);
});
