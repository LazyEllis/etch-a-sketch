const gridContainer = document.querySelector(".grid-container");
const gridRow = document.createElement("div");
const gridSquare = document.createElement("div");

gridSquare.classList = "grid-square";
gridRow.classList = "grid-row";

for (let i = 1; i <= 16; i++) {
    gridRow.appendChild(gridSquare.cloneNode());
}

for (let j = 1; j <= 16; j++) {
    gridContainer.appendChild(gridRow.cloneNode(true));
}

const gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.classList.add("colored");
    });
});
