
const ShowColorEl = document.querySelector(".color-num-show");
const GenerateBtnEl = document.querySelector(".generator-btn");
const ColorBoxEl = document.querySelector(".color-box");
const ColorCopyEl = document.querySelector(".Copy-color");


let colors = rgba();
console.log(colors);


GenerateBtnEl.addEventListener('click', ()=>{

   ColorBoxEl.style.backgroundColor = colors;
   ShowColorEl.textContent = colors;
});

function rgba(){

    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let a = Math.random().toFixed(1);

    return `rgba(${r}, ${g}, ${b}, ${a})`;

}

ColorCopyEl.addEventListener('click',()=>{
     CopyColor();
    
   

   });
let CopyColor = ()=>{

   let input = document.createElement('input');
   let container = document.querySelector(".container");
   document.body.appendChild(input);
   input.value = colors;
   input.select();
   document.execCommand('copy');
   alert("Your Code has been Succesfully copyied");
   document.body.removeChild(input);

}

 









