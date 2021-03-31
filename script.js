var counterValue = 0;


var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var counterValueDiv = document.querySelector('#countervalue');


plus.addEventListener('click',function(){
    counterValue++;
    counterValueDiv.textContent = counterValue;
})

minus.addEventListener('click',function(){

    if(counterValue > 0){
        counterValue--;
        counterValueDiv.textContent = counterValue;
    }
   
})