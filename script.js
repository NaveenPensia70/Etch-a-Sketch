var boxContainer=document.querySelector(".container");
var gridBoxes=document.querySelector(".grid-boxes");
var btn=document.querySelector(".btn");
var inputBox;

btn.addEventListener("click",runPrompt);
function runPrompt(){
inputBox=prompt("Enter the number of squares per side: ");
if(inputBox!=null)
    {
         //We need to empty the gridBoxes before filling it again
        while(gridBoxes.firstChild)
            {
                gridBoxes.firstChild.remove();
            } 
            //Setting custom css property for each side of gridBoxes 
            gridBoxes.style.setProperty("--each-side",inputBox);   
         for(var i=0;i<inputBox;i++)
             { 
                for(var j=0;j<inputBox;j++) 
                {                   
                var newBox=document.createElement("div");
                newBox.classList.add("new-box");               
                gridBoxes.appendChild(newBox);
                newBox.textContent=j + 1; 
                newBox.textContent= `${i},${j}`;          
                } 
                var nextLine=document.createElement("br");
                gridBoxes.appendChild(nextLine);
                }
                }
     }








