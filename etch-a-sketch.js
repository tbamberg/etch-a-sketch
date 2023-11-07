let container = document.querySelector(".container");
let squaresPerSide = 16;


function addSquare(squareSize) {
    let square = document.createElement("div");

    square.className = "square";
    square.style.width = square.style.height = squareSize + "px";
    
    container.append(square);

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "aliceblue";
    });
}

function buildGrid(numSquares) {
    let totalSquares = numSquares * numSquares;
    let squareSize = 640 / numSquares; // 640 = width&height of .container

    for (let i = 0; i < totalSquares; i++) {
        addSquare(squareSize);
    }
}

buildGrid(squaresPerSide);

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    buildGrid(prompt("Change squares per side (1-100)"));
    //need to add logic to remove previous grid
});

