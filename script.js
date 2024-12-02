const circle = document.getElementById("circle");
const colorInput = document.getElementById("colorInput");

function changeColor(color){
    circle.style.backgroundColor = color;
}

function changeColorFromInput(){
    const color = colorInput.value;
    circle.style.backgroundColor = color;
}



