$(document).ready(function () {
  const envelope = $("#envelope");
  const btn = $("#action-btn");
  const music = document.getElementById("bg-music");
  const petalsContainer = $("#petals-container");
  const noBtn = $("#no-btn");

  // --- PETAL RAIN LOGIC ---
  function createPetal() {
    if (!envelope.hasClass("open")) return;
    const petal = $('<div class="petal"></div>');
    const size = Math.random() * 15 + 10 + "px";
    const left = Math.random() * 100 + "vw";
    const duration = Math.random() * 3 + 2 + "s";
    petal.css({ 
      width: size, 
      height: size, 
      left: left, 
      animationDuration: duration 
    });
    petalsContainer.append(petal);
    setTimeout(() => { petal.remove(); }, 5000);
  }

  // --- ENVELOPE TOGGLE ---
  function toggleEnvelope() {
    if (envelope.hasClass("close")) {
      envelope.removeClass("close").addClass("open");
      setTimeout(() => { btn.text("Close"); }, 300);
      const interval = setInterval(createPetal, 250);
      envelope.data("petalInterval", interval);
      
      if (music && music.paused) {
        music.play().catch(e => console.log("Playback blocked by browser."));
      }
    } else {
      envelope.removeClass("open").addClass("close");
      setTimeout(() => { btn.text("Open"); }, 300);
      clearInterval(envelope.data("petalInterval"));
      petalsContainer.empty();
    }
  }

  // --- YES BUTTON: REDIRECT ---
  $("#yes-btn").on("click", function(e) {
    e.stopPropagation();
    // Replace the link below with your actual Notion or video URL
    window.location.href = "https://YOUR_LINK_HERE"; 
  });

  // --- NO BUTTON: HIDE AND SEEK (MOBILE & DESKTOP) ---
  // Using 'touchstart' specifically for mobile responsiveness
  noBtn.on("touchstart mouseover", function(e) {
    // Prevent the click/tap from actually registering
    if (e.type === "touchstart") e.preventDefault();
    e.stopPropagation();

    // Random movement range
    const x = (Math.random() - 0.5) * 150;
    const y = (Math.random() - 0.5) * 100;
    
    $(this).css({
      'transform': `translate(${x}px, ${y}px)`,
      'transition': '0.2s ease-out'
    });

    // Reset position after 1 second so she doesn't lose the button
    setTimeout(() => {
      $(this).css('transform', 'translate(0, 0)');
    }, 1000);
  });

  // Backup for 'No' click just in case
  noBtn.on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // --- EVENT LISTENERS ---
  envelope.on("click", toggleEnvelope);
  btn.on("click", toggleEnvelope);
});
