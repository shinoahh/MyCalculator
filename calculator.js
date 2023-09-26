let allNumb = document.querySelectorAll(".num");
let allOper = document.querySelectorAll(".operation");
let zero = document.querySelector(".zero-num");
let dotBtn = document.querySelector(".dot-btn");
let operationDivision = document.querySelector(".division-btn");
let equalBtn = document.querySelector(".equal-btn");
let operator = document.querySelector(".operator");
let clearBtn = document.querySelector(".clear-btn");
let delBtn = document.querySelector(".del-btn");

let num1 = document.querySelector(".num-1");
let num2 = document.querySelector(".num-2");

let add;
let minu;
let miltipy;
let devide;
let haveDot = false;

zero.innerText = 0;

allNumb.forEach(allNumber =>{
  allNumber.addEventListener("click", ()=>{
     if(zero.innerText == 0){
       zero.innerText = "";
     }
     zero.innerText += allNumber.innerHTML;
  })
});

allOper.forEach(allOpedator =>{
  allOpedator.addEventListener("click", ()=>{
    operator.innerText = allOpedator.innerHTML;
    
    oper()
  })
})

function oper(){
  if(operator.innerText === "+" || "-" || "÷"|| "x"){
    num1.innerText = zero.innerText;
    zero.innerText = "";
    num2.innerText = "";
  }
};

function devision(){
  devide = parseFloat(zero.innerText) / parseFloat(num1.innerText);
  num2.innerText = devide;
};

function subtraction(){
  minus = parseFloat(num1.innerText) - parseFloat(zero.innerText);
  num2.innerText = minus;
};

function multiplication() {
  multiply = parseFloat(zero.innerText) * parseFloat(num1.innerText);
  num2.innerText = multiply;
};

function addition() {
  add = parseFloat(zero.innerText) + parseFloat(num1.innerText);
  num2.innerText = add;
};

delBtn.addEventListener("click", ()=>{
  let newString = "";
  for (let i=0; i < zero.innerText.length -1; i++){
    newString += zero.innerText[i]
  }
  
  zero.innerText = newString;
})

equalBtn.addEventListener("click", ()=>{
  if(operator.innerText === "÷"){
    devision();
  }else if(operator.innerText === "-"){
    subtraction();
  }else if(operator.innerText === "+"){
    addition();
  }else if (operator.innerText === "x") {
    multiplication();
  };
  zero.innerText = num2.innerText;
  
  if (!haveDot){
    haveDot = true;
  } else if (num2.innerText.includes("=") && haveDot) {
    return;
  }
  
  if(zero.innerText === ""){
    return;
  }else{
    num2.innerText = "= " + num2.innerText;
  }
  
});

clearBtn.addEventListener("click", ()=>{
  zero.innerText = 0;
  operator.innerText = "";
  num1.innerText = "";
  num2.innerText = "";
})

dotBtn.addEventListener("click", ()=>{
  
  if (!haveDot){
    haveDot = true;
  } else if (zero.innerText.includes(".") && haveDot) {
    return;
  }
  zero.innerText += ".";
});
