const gridContainer = document.querySelector(".grid-container");
const gridRow = document.createElement("div");
const gridSquare = document.createElement("div");
const page = document.querySelector("body");
const newGridButton = document.querySelector("#new-grid-button");

gridSquare.classList = "grid-square";
gridRow.classList = "grid-row";

const createGrid = (gridDimension) => {
    for (let i = 1; i <= gridDimension; i++) {
        gridRow.appendChild(gridSquare.cloneNode());
    }

    for (let j = 1; j <= gridDimension; j++) {
        gridContainer.appendChild(gridRow.cloneNode(true));
    }
};

const addColorEffect = () => {
    const gridSquares = document.querySelectorAll(".grid-square");

    gridSquares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.classList.add("colored");
        });
    });
};

createGrid(16);
addColorEffect();

const createNewGrid = () => {
    let gridDimension = prompt(
        "Enter the number of squares you want on each side of the grid"
    );

    if (
        gridDimension > 100 ||
        gridDimension < 1 ||
        isNaN(gridDimension) ||
        gridDimension === null
    ) {
        alert("The dimension must be a number between 1 and 100");
        return;
    }

    let newSquareDimension = 31.25 * (16 / gridDimension);

    gridContainer.textContent = "";
    gridRow.textContent = "";
    gridSquare.style.flexBasis = ` ${newSquareDimension}px`;
    gridSquare.style.height = `${newSquareDimension}px`;

    createGrid(gridDimension);
    addColorEffect();
};

newGridButton.addEventListener("click", createNewGrid);
