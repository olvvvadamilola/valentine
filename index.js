// NO: Hide and Seek (Mobile & Desktop Optimized)
  $("#no-btn").on("touchstart mouseover", function(e) {
    e.preventDefault(); // Prevents the actual click on mobile
    e.stopPropagation();

    // Generate random movement
    const x = (Math.random() - 0.5) * 150;
    const y = (Math.random() - 0.5) * 100;
    
    $(this).css({
      'transform': `translate(${x}px, ${y}px)`,
      'transition': '0.2s ease'
    });

    // Optional: Reset position after 1 second so it doesn't stay lost
    setTimeout(() => {
      $(this).css('transform', 'translate(0, 0)');
    }, 1000);
  });

  // Explicitly handle the 'No' click just in case they manage to tap it
  $("#no-btn").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    alert("Nice try, but 'No' is not an option! 😉");
  });
