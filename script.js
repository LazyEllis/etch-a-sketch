const gridContainer = document.querySelector(".grid-container");
const gridRow = document.createElement("div");
const gridSquare = document.createElement("div");
const page = document.querySelector("body");
const newGridButton = document.querySelector("#new-grid-button");
const colorButton = document.querySelector("#color");
const rainbowButton = document.querySelector("#rainbow");
const greyscaleButton = document.querySelector("#greyScale");

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

const addSingleColorEffect = () => {
    const gridSquares = document.querySelectorAll(".grid-square");

    addcolorEffect = (e) => {
        e.target.style.backgroundColor = "black";
    };

    gridSquares.forEach((square) => {
        square.addEventListener("mouseover", addcolorEffect);
    });
};

const addRainbowColorEffect = () => {
    const gridSquares = document.querySelectorAll(".grid-square");

    addcolorEffect = (e) => {
        redValue = Math.floor(Math.random() * 255) + 1;
        greenValue = Math.floor(Math.random() * 255) + 1;
        blueValue = Math.floor(Math.random() * 255) + 1;
        e.target.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    };

    gridSquares.forEach((square) => {
        square.addEventListener("mouseover", addcolorEffect);
    });
};

const chooseColorEffect = () => {
    if (colorButton.className === "active") {
        addSingleColorEffect();
    } else if (rainbowButton.className === "active") {
        addRainbowColorEffect();
    }
};

const removeColorEffect = () => {
    const gridSquares = document.querySelectorAll(".grid-square");

    gridSquares.forEach((square) => {
        square.removeEventListener("mouseover", addcolorEffect);
    });
};

const activateColorButton = () => {
    if (rainbowButton.className === "active") {
        rainbowButton.classList.remove("active");
        removeColorEffect();
    } else if (greyscaleButton.className === "active") {
        greyscaleButton.classList.remove("active");
    } else {
        return;
    }

    colorButton.classList.add("active");
    addSingleColorEffect();
};

const activateRainbowButton = () => {
    if (colorButton.className === "active") {
        colorButton.classList.remove("active");
        removeColorEffect();
    } else if (greyscaleButton.className === "active") {
        greyscaleButton.classList.remove("active");
    } else {
        return;
    }

    rainbowButton.classList.add("active");
    addRainbowColorEffect();
};

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
    chooseColorEffect();
};

createGrid(16);
chooseColorEffect();

newGridButton.addEventListener("click", createNewGrid);
colorButton.addEventListener("click", activateColorButton);
rainbowButton.addEventListener("click", activateRainbowButton);
