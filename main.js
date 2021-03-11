'use strict';

let display = document.querySelector('.display');
let panel = document.querySelector('.panel');
let equal = document.getElementById('equal');
let i = 0;

panel.addEventListener('click', numberToScreen);
equal.addEventListener('click', resolve);

function numberToScreen(num) {
  const button = num.target.innerHTML;
  
  if (button =='C') {
   display.innerHTML = "0"; 
  }
  
  else if (i == 0) {

    if (display.innerHTML == '0') {
      
      if (button == '.') {
        display.innerHTML += button
      }
      
      else {
        display.innerHTML = button
      }
      
    }
    else {
      display.innerHTML += button 
    }
  }
  
  else if (i == 1) {
     display.innerHTML = button 
     i = 0;
  }
  
}

function resolve(){
  display.innerHTML=display.innerHTML.replaceAll("×","*");
  display.innerHTML=display.innerHTML.replaceAll("÷","/");
  display.innerHTML=Math.round(eval(display.innerHTML));
  i = 1;
}
