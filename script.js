const gameContainer = document.querySelector("#game-container");
const gridSizeBtns = document.querySelectorAll(".btn");
let cols;
let rows;

const onHoverSizeBtns = (event) => {
    if (event.target.className == "square") {
        event.target.style.backgroundColor = "pink";
    };
};

const resizeGrid = (event) => {
    reset();
    if (event.target.className === "btn sm"){
        cols = 16, rows = 16;
    } else if (event.target.className === "btn md") {
        cols = 32, rows = 32;
    } else if (event.target.className === "btn lg") {
        cols = 64, rows = 64;
    }
    createGrid(rows, cols);
};

const createGrid = (rows, cols) => {
    gameContainer.style.setProperty("--grid-rows", rows);
    gameContainer.style.setProperty("--grid-columns", cols);
    for (let i = 0; i < (rows * cols); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        gameContainer.append(square);
        square.addEventListener("mouseover", onHoverSizeBtns);
    };
};

const reset = () => {
    for (let i = 0; i < (rows * cols); i++) {
        const square = document.querySelector(".square");
        gameContainer.removeChild(square);
    };
}

const game = () => {
    gridSizeBtns.forEach(button => {
        button.addEventListener("click", resizeGrid);
    });
};

game();