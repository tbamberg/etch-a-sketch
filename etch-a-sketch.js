let container = document.querySelector(".container");
let size = 16;
let totalSquares = size * size;

function addSquare() {
    let square = document.createElement("div");

    square.className = "square";
    square.style.width = "40px";
    square.style.height = "40px";
    
    container.append(square);

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "aliceblue";
    });
}

for (let i = 0; i < totalSquares; i++) {
    addSquare();
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    size = prompt("Change size of side (1-100)");
    console.log(size);
});

