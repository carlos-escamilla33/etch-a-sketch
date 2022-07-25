const gameContainer = document.querySelector("#game-container");

const onHover = (event) => {
    if (event.target.className == "square") {
        console.log(event.target);
    }
}

const createGrid = (rows, cols) => {
    gameContainer.style.setProperty("--grid-rows", rows);
    gameContainer.style.setProperty("--grid-columns", cols);
    for (let i = 0; i < (rows * cols); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.textContent = (i + 1);
        gameContainer.append(square);
        square.addEventListener("mouseover", onHover);
    }
}


const game = () => {
    createGrid(16, 16);
}

game();