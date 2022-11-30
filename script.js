const sizeButton = document.querySelector("#size");
sizeButton.addEventListener("click", createGrid);
const container = document.querySelector('.container');

// ***************Below code will give option buttons styling when they are clicked************/
//const optionButtons = document.querySelectorAll('.option');
// function unClick(){
//     optionButtons.forEach((button) =>{
//         button.classList.remove('clickedButton');
//     });
// }
// optionButtons.forEach((button) => {
//     button.addEventListener('click', () =>{
//         // unClick;
//         console.log('you clicked a button');
//         if(button.classList.contains("classic")){
//             console.log('classic');
//             optionButtons[0].classList.add('clickedButton');
//         }else if(button.classList.contains("random")){
//             console.log('random');
//             optionButtons[1].classList.add('clickedButton');
//         }else if(button.classList.contains("shade")){
//             console.log('shade');
//             optionButtons[2].classList.add('clickedButton');
//         }
//     });
// });

//************Below code creates the grid  */
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

//********************Below code gives the color button functionality */
const randomColorButton = document.querySelector('#random');
randomColorButton.addEventListener("click", randomColorGrid);

function randomColorGrid(){
    let pixelNodeList = container.children;
    for(pixel of pixelNodeList){
        pixel.addEventListener('mouseenter', function(e){
            e.target.style.backgroundColor = getRandomColor();
        });
    }
}

function getRandomColor(){
    let hexArray = '0123456789ABCDEF';
    let randomColor = '#';
    for(let i = 0; i < 6; i++){
        randomColor += hexArray[Math.floor(Math.random() * 16)];
    }
    return randomColor;
}

//***************Below code gives classic button functionality */
const classicButton = document.querySelector('#classic');
classicButton.addEventListener("click", classicGrid);

function classicGrid(){
    let pixelNodeList = container.children;
    for(pixel of pixelNodeList){
        pixel.addEventListener('mouseenter', function(e){
            e.target.style.backgroundColor = "black";
        });
    }
}

// *******************Below Code gives custom button functionality ***/
const colorPicker = document.querySelector('#color-picker');
colorPicker.addEventListener('change', setColor);
let color = colorPicker.value;

function setColor(){
    color = this.value;
}

const customButton = document.querySelector('#custom');
customButton.addEventListener("click", colorPixel);

function colorPixel(){
    let pixelNodeList = container.children;
    for(pixel of pixelNodeList){
        pixel.addEventListener("mouseenter", function(e){
            e.target.style.backgroundColor = color;
        });
    }
}

