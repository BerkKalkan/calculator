let btnNums = document.querySelectorAll(".btn-num");
let showCalc = document.querySelector(".calc-numbers");
let btnDel = document.querySelector(".btn-del");
let btnReset = document.querySelector(".btn-reset")
let btnCalc = document.querySelector(".btn-calc")
for (const btnNum of btnNums) {
    btnNum.addEventListener("click", () => {
    showCalc.innerText += btnNum.innerText;        
    });
};

btnDel.addEventListener("click", () => {
    showCalc.innerText = showCalc.innerText.slice(0, -1);
});

btnReset.addEventListener("click" , () =>  {
    showCalc.innerText = ``
}) 

btnCalc.addEventListener("click", () => {
    let result = eval(showCalc.innerText);
    showCalc.innerText = result;
})