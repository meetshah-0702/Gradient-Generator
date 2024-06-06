let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#051937";
let rgb2 = "#008793";

const hexValues = () =>{
    let string = "0123456789abcdef";
    let color = "#";
    for(let i=0; i<6; i++){
        color = color + string[Math.floor(Math.random()*16)];
    }
    return color;
};

const handleButton1 = () =>{
    rgb1 = hexValues();
    btn1.innerText = rgb1;
    document.body.style.backgroundImage= `linear-gradient(to right top, ${rgb1} ,  ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right top, ${rgb1},  ${rgb2})`
};

const handleButton2 = () =>{
    rgb2 = hexValues();
    btn2.innerText = rgb2;
    document.body.style.backgroundImage= `linear-gradient(to right top, ${rgb1} , ${rgb2}`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right top, ${rgb1}, ${rgb2})`
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
    alert("Code copied to clipboard.");
});