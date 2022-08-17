const gameContainer = document.querySelector("#game-container");
const gridSizeBtns = document.querySelectorAll(".btn");

const onHover = (event) => {
    if (event.target.className == "square") {
        event.target.style.backgroundColor = "yellow";
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
    
};

const game = () => {
    createGrid(16,16);
};

game();