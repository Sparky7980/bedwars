const player = document.getElementById("player");
const bots = document.querySelectorAll(".bot");

// Set initial player position
let playerX = 50;
let playerY = 50;

player.style.left = playerX + "px";
player.style.top = playerY + "px";

// Move player with arrow keys
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            playerY -= 10;
            break;
        case "ArrowDown":
            playerY += 10;
            break;
        case "ArrowLeft":
            playerX -= 10;
            break;
        case "ArrowRight":
            playerX += 10;
            break;
    }

    // Update player position
    player.style.left = playerX + "px";
    player.style.top = playerY + "px";
});

// Check for collisions with bots
function checkCollisions() {
    bots.forEach((bot) => {
        if (isColliding(player, bot)) {
            alert("You collided with a bot! Game over.");
            // You can add more logic here for game over or scoring
            resetGame();
        }
    });

    // Call the function continuously
    requestAnimationFrame(checkCollisions);
}

// Check if two elements are colliding
function isColliding(elem1, elem2) {
    const rect1 = elem1.getBoundingClientRect();
    const rect2 = elem2.getBoundingClientRect();

    return (
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top &&
        rect1.left < rect2.right &&
        rect1.right > rect2.left
    );
}

// Start checking for collisions
checkCollisions();

// Reset game state
function resetGame() {
    playerX = 50;
    playerY = 50;
    player.style.left = playerX + "px";
    player.style.top = playerY + "px";
}
