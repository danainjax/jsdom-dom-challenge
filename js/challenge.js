let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let pause = document.getElementById('pause');
// isPaused? = false

setInterval(incrementCounter, 1000)

function incrementCounter () {
   counter.innerText = parseInt(counter.innerText) + 1
   minus.addEventListener('click', handleMinus)
   plus.addEventListener('click', handlePlus)
   pause.addEventListener('click', handlePause)
  

}

function handleMinus() {
    counter.innerText = parseInt(counter.innerText) - 1

}

function handlePlus() {
    counter.innerText = parseInt(counter.innerText) +1
}

// function handlePause() {
//     isPaused = true;
//     let stopPoint = counter.innerText
//     timer = setTimeout(function(){
//         counter();

//     })
//     // keep track of stop point above, then 

// }