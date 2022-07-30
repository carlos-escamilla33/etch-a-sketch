const gameContainer = document.querySelector("#game-container");

const onHover = (event) => {
    const gridSquare = event.target;
    if (gridSquare.className == "square") {
        gridSquare.style.backgroundColor = "yellow";
    };
};

const createGrid = (rows, cols) => {
    gameContainer.style.setProperty("--grid-rows", rows);
    gameContainer.style.setProperty("--grid-columns", cols);
    for (let i = 0; i < (rows * cols); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        gameContainer.append(square);
        square.addEventListener("mouseover", onHover);
    };
};


const game = () => {
    createGrid(16, 16);
};

game();