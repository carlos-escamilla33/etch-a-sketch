const gameContainer = document.querySelector("#game-container");

const createGrid = () => {
    // later on we can add a parameter so we can set the number of sqaures
    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        gameContainer.append(square);
    }
}

createGrid();