document.addEventListener("DOMContentLoaded", function() {
    createFireflies();
  });
  
  function createFireflies() {
    const fireflyContainer = document.querySelector(".firefly-container");
    const numFireflies = 65; // Number of fireflies
    
    for (let i = 0; i < numFireflies; i++) {
      const firefly = document.createElement("div");
      firefly.classList.add("firefly");
      fireflyContainer.appendChild(firefly);
      
      animateFirefly(firefly);
    }
  }
  
  function animateFirefly(firefly) {
    // Random initial position within the viewport
    firefly.style.left = Math.random() * window.innerWidth + "px";
    firefly.style.top = Math.random() * window.innerHeight + "px";
    
    // Random speed and direction
    const speedX = Math.random() * 2 - 1; // Random horizontal speed between -1 and 1 pixels per frame
    const speedY = Math.random() * 2 - 1; // Random vertical speed between -1 and 1 pixels per frame
    
    // Random size
    const size = Math.random() * 10 + 5; // Random size between 5px and 15px
    firefly.style.width = size + "px";
    firefly.style.height = size + "px";
    
    // Random opacity
    const opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
    firefly.style.opacity = opacity;
    
    setInterval(() => {
      const currentLeft = parseFloat(firefly.style.left);
      const currentTop = parseFloat(firefly.style.top);
      const newLeft = currentLeft + speedX;
      const newTop = currentTop + speedY;
      
      // Wrap around if firefly goes out of bounds
      if (newLeft < -20) {
        firefly.style.left = window.innerWidth + "px";
      } else if (newLeft > window.innerWidth) {
        firefly.style.left = "-20px";
      } else {
        firefly.style.left = newLeft + "px";
      }
      
      if (newTop < -20) {
        firefly.style.top = window.innerHeight + "px";
      } else if (newTop > window.innerHeight) {
        firefly.style.top = "-20px";
      } else {
        firefly.style.top = newTop + "px";
      }
    }, 1000 / 60); // Update position approximately 60 times per second
  }