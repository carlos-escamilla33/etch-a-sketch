const gameContainer = document.querySelector("#game-container");
const gridSizeBtn = document.querySelector("#btn");

const onDrag = (event) => {
    const gridSquare = document.querySelector(".square");
    if (event.target.className == "square") {
        event.target.style.backgroundColor = "yellow";
    };
};

const createGrid = (rows, cols) => {
    gameContainer.style.setProperty("--grid-rows", rows);
    gameContainer.style.setProperty("--grid-columns", cols);
    for (let i = 0; i < (rows * cols); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        gameContainer.append(square);
        square.addEventListener("dragover", onDrag);
    };
};

const resizeGrid = () => {

    let rows = parseInt(prompt("Enter number of rows: "));
    let columns = parseInt(prompt("Enter number of columns"));

    createGrid(50, 50);
};

const game = () => {
    createGrid(50, 50);
};

game();