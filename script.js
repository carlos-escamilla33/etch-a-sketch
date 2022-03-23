const gameContainer = document.querySelector("#game-container");


const game = () => {
    createGrid(16, 16);
}

const createGrid = (rows, cols) => {
    gameContainer.style.setProperty("--grid-rows", rows);
    gameContainer.style.setProperty("--grid-columns", cols);
    for (let i = 0; i < (rows * cols); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.textContent = (i + 1);
        gameContainer.append(square);
    }
}

game();