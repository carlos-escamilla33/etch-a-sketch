const gameContainer = document.querySelector("#game-container");
const gridSizeBtns = document.querySelectorAll(".btn");
let cols;
let rows;

const onHover = (event) => {
    if (event.target.className == "square") {
        event.target.style.backgroundColor = "purple";
    };
};

const createGrid = (rows=16, cols=16) => {
    gameContainer.style.setProperty("--grid-rows", rows);
    gameContainer.style.setProperty("--grid-columns", cols);
    for (let i = 0; i < (rows * cols); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        gameContainer.append(square);
        square.addEventListener("mouseover", onHover);
    };
};

const resizeGrid = (event) => {
    if (event.target.className === "btn sm"){
        cols = 16, rows = 16;
    } else if (event.target.className === "btn md") {
        cols = 50, rows = 50;
    } else if (event.target.className === "btn lg") {
        cols = 100, rows = 100;
    }
};

const game = () => {
    // gridSizeBtns.forEach(btn => btn.addEventListener("click", createGrid));
    createGrid();
};

game();