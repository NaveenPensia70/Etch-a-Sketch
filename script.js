var boxContainer = document.querySelector(".container");
var gridBoxes = document.querySelector(".grid-boxes");
var btn = document.querySelector(".btn");
var shadeBtn = document.querySelector(".shading-btn");
var eraserBtn=document.querySelector(".eraser-btn");
var rainbowBtn=document.querySelector(".rainbow-btn");
var newBoxArray = [];
var inputBox;

btn.addEventListener("click", runPrompt);
shadeBtn.addEventListener("click", runShading); 
eraserBtn.addEventListener("click",runErasing);
rainbowBtn.addEventListener("click",runRainbow);

function runPrompt() {
    inputBox = prompt("Enter the number of squares per side: ");
    if (inputBox != null) {
        // We need to empty the gridBoxes before filling it again
        while (gridBoxes.firstChild) {
            gridBoxes.firstChild.remove();
        }
        newBoxArray = [];
        // Setting custom css property for each side of gridBoxes
        gridBoxes.style.setProperty("--each-side", inputBox);

        for (var i = 0; i < inputBox; i++) {
            for (var j = 0; j < inputBox; j++) {
                var newBox = document.createElement("div");
                newBox.classList.add("new-box");
                gridBoxes.appendChild(newBox);
                newBox.textContent = `${i},${j}`;
                newBox.setAttribute("darkness",255)
                newBoxArray.push(newBox);
            }
        }
    }
}

function runShading() {
    newBoxArray.forEach(function(newo) {
        newo.addEventListener("mouseover", shading);
    });
}

function shading(event) {
    let temp=event.target;
    let currentDarkness=parseInt(temp.getAttribute("darkness"));
    if(currentDarkness>0)
    {
        currentDarkness-=25;
        temp.style.backgroundColor=`rgb(${currentDarkness},${currentDarkness},${currentDarkness})`;
        temp.setAttribute("darkness",currentDarkness);
    }
}

function runErasing(event)
{
    newBoxArray.forEach(function(newErase){
        newErase.addEventListener("mouseover",erasing);
    });
}

function erasing(event){
    event.target.style.backgroundColor="rgb(255,255,255)";
}

function runRainbow()
{
    newBoxArray.forEach(function(newRainbow){
        newRainbow.addEventListener("mouseover",rainbow);
    });
}

function randomNumber(){
    let min=0;
    let max=255;
    let randomColor;
    return randomColor=Math.floor(Math.random()*(max-min+1)+min);
}
function rainbow(event){
    event.target.style.backgroundColor=`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}
