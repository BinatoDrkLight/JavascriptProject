function startTimer() {
    var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
    var timerDisplay = document.getElementById("timer");
  
    var timer = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      hours = String(hours).padStart(2, '0');
      minutes = String(minutes).padStart(2, '0');
      seconds = String(seconds).padStart(2, '0');
  
      timerDisplay.textContent = days + "d " + hours + ":" + minutes + ":" + seconds;
  
      if (distance < 0) {
        clearInterval(timer);
        timerDisplay.textContent = "Happy New Year!";
      }
    }, 1000);
  }
  
  startTimer(); 