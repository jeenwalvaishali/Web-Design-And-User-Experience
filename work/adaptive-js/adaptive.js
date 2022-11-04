// Whole-script strict mode syntax
'use strict';
const myButton = document.querySelector('button');
myButton.disabled = true;
const label= document.querySelector('p.info__report');
const inputField = document.querySelector('input');

inputField.addEventListener("keypress", function(){
  myButton.disabled = false;
})

myButton.addEventListener('click', function(event){
    event.preventDefault();
    console.log("onclick Called");
    let userInput = inputField.value;
    let storageValue = localStorage.getItem(userInput);
    if(storageValue === null){
      localStorage.setItem(userInput, 1);
      storageValue = localStorage.getItem(userInput);
    }else{
      localStorage.setItem(userInput, Number(storageValue) + 1);
      storageValue = localStorage.getItem(userInput);
    }
    label.textContent = 'The count for ' + userInput + ' is ' + storageValue;
})





