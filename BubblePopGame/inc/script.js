document.addEventListener('DOMContentLoaded', function() {
    const titleBox = document.getElementById('titleBox');
    const scoreBox = document.getElementById('scoreBox');
    const playButton = document.getElementById('playButton');
    const restartButton = document.getElementById('restartButton');
    const finalScoreDisplay = document.getElementById('finalScore');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    let gameInterval;

    // Function to generate a random number between min and max
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to create a bubble element
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.top = getRandomNumber(0, window.innerHeight - 40) + 'px';
        bubble.style.left = getRandomNumber(0, window.innerWidth - 40) + 'px';
        document.body.appendChild(bubble);
        setTimeout(() => {
            if (!bubble.classList.contains('popped')) {
                bubble.style.opacity = 0; // Make the bubble disappear slowly if not popped
            }
            setTimeout(() => {
                bubble.remove();
            }, 1000);
        }, 2000); // Bubble disappears after 4 seconds
        bubble.addEventListener('click', popBubble);
    }

    // Function to pop a bubble and update score
    function popBubble() {
        this.classList.add('popped');
        score++;
        scoreDisplay.textContent = score;
        setTimeout(() => {
            this.remove();
        }, 500); // Delay removal to allow burst animation to play
    }

    // Function to start the game
    function startGame() {
        score = 0;
        scoreBox.style.display = 'none'; // Hide score box
        titleBox.style.display = 'none'; // Hide title box
        playButton.style.display = 'none'; // Hide play button
        restartButton.style.display = 'none'; // Hide restart button
        scoreDisplay.textContent = '0';
        gameInterval = setInterval(createBubble, 1000); // Spawn bubble every 3 seconds
        setTimeout(endGame, 60000); // Game ends after 1 minute
    }

    // Function to end the game
    function endGame() {
        clearInterval(gameInterval);
        scoreBox.style.display = 'block'; // Show score box
        finalScoreDisplay.textContent = score;
        playButton.style.display = 'block'; // Show play button
        restartButton.style.display = 'block'; // Show restart button
    }

    // Event listener for play button
    playButton.addEventListener('click', startGame);

    // Event listener for restart button
    restartButton.addEventListener('click', startGame);
});