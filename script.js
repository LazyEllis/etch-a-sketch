const gridContainer = document.querySelector(".grid-container");
const gridRow = document.createElement("div");
const gridSquare = document.createElement("div");
const page = document.querySelector("body");

gridSquare.classList = "grid-square";
gridRow.classList = "grid-row";

for (let i = 1; i <= 16; i++) {
    gridRow.appendChild(gridSquare.cloneNode());
}

for (let j = 1; j <= 16; j++) {
    gridContainer.appendChild(gridRow.cloneNode(true));
}

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

    for (let i = 1; i <= gridDimension; i++) {
        gridRow.appendChild(gridSquare.cloneNode());
    }

    for (let j = 1; j <= gridDimension; j++) {
        gridContainer.appendChild(gridRow.cloneNode(true));
    }

    const gridSquares = document.querySelectorAll(".grid-square");

    gridSquares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.classList.add("colored");
        });
    });
};

const newGridButton = document.querySelector("#new-grid-button");
newGridButton.addEventListener("click", createNewGrid);

const gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.classList.add("colored");
    });
});
