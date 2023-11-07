/* 
add a square
add 16x16 squares

change grid size
add squares based on grid size
change squaresize to fit 
*/

let container = document.querySelector(".container");
let columns = 16;
let rows = 16;
let totalSquares = columns * rows;

function addSquare() {
    let square = document.createElement("div");

    square.className = "square";
    square.style.height = "40px";
    square.style.width = "40px";
    container.append(square);

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    });
}

for (let i = 0; i < totalSquares; i++) {
    addSquare();
}