
const gridContainer = document.querySelector(".grid-container");
let gridSize = 10;


function GenerateGrid(gridSize)
{
    for(let i=0; i<gridSize; i++)
        {
            let column = gridContainer.appendChild(document.createElement("div"));
            column.classList.add("column");
            column.style.backgroundColor = "gray";
        
            for(let i=0; i<gridSize; i++)
                {
                    let pixel = column.appendChild(document.createElement("div"));
                    pixel.classList.add("pixel");
                    pixel.style.backgroundColor = "white";
                    pixel.addEventListener("mouseover", () => {
                        pixel.style.backgroundColor = "black"
                    });
                }
        }
}
let grid = document.querySelectorAll(".column");
let columns = document.querySelectorAll(".column");
let pixels = document.querySelectorAll(".pixel");

function Clear(){
    columns.forEach((div) => {
        div.style.backgroundColor = "white"
      });
}

function RemoveGrid(){
    while(gridContainer.firstChild)
    {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    RemoveGrid();
    GenerateGrid(gridSize);
});


const sizeButton = document.querySelector(".change-size");
sizeButton.addEventListener("click", () => {
    RemoveGrid();
    
    gridSize = prompt("enter A grid size from 16-100:");
    while(gridSize < 16 || gridSize == null)
    {
        gridSize = prompt("enter A grid size from 16-100:");
    }
    
        
    GenerateGrid(gridSize);
    
});

GenerateGrid(gridSize);