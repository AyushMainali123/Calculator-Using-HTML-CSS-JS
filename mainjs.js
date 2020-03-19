
const textVal = document.querySelector('form #text');

const display = function (exp){
    
    if(Number(textVal.value) === 0){
         textVal.value = exp;
         console.log(textVal.value);
    }
    else{
         textVal.value += exp;
         console.log(textVal.value);
    }
}
const clearText = function(){
    textVal.value = 0;
    console.log(textVal.value)
}
const calculate = function(){
   textVal.value = eval(textVal.value);
}
const reduce = function(){
    textVal.value = textVal.value.slice(0, textVal.value.length-1);
}