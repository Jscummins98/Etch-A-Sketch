const sizeButton = document.querySelector("#size");
sizeButton.addEventListener("click", createGrid);
const container = document.querySelector('.container');

function createGrid(){
    while(container.firstChild) container.removeChild(container.firstChild); //Clears the grid

    let numPerRow = prompt("Choose number of pixels per row. (Between 8 and 100)");
    if(numPerRow > 100 || numPerRow < 8){ //Check if user enters a number between 8 and 100
        alert("Invalid entry. Try again");
    }else{
        let side = getDimension(numPerRow);//Determines the width/height of each pixel

        let numOfPixels = numPerRow*numPerRow;
        for(let i = 0; i < numOfPixels; i++){
            const pixelDiv = document.createElement('div');
            pixelDiv.classList.add('pixel');
            pixelDiv.setAttribute('style', `width: ${side}%; height: ${side}%;`);
            container.appendChild(pixelDiv);

            pixelDiv.addEventListener('mouseenter', () => {
                pixelDiv.classList.add("selected");
            });
        }
    }
}

function getDimension(n) {
    let width = 1/n * 100;
    return width;
}