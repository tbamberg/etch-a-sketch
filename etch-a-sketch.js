/* 
add a square
add 16x16 squares

change grid size
add squares based on grid size
change squaresize to fit 
*/

let container = document.querySelector(".container");

function addSquare() {
    let square = document.createElement("div");
    square.className = "square";
    square.style.height = "40px";
    square.style.width = "40px";
    container.append(square);
}

addSquare();
addSquare();
addSquare();
addSquare();
