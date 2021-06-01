let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let pause = document.getElementById('pause');
const commentForm = document.getElementById('comment-form');
const commentList = document.querySelector('#list');



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
// 4. As a user, I can pause the counter, which should:

//   * pause the counter
//   * disable all buttons except the pause button
//   * switch the label on the button from "pause" to "resume"
function handlePause() {
    isPaused = true;
    let stopPoint = counter.innerText
    timer = setTimeout(function(){
        counter();

    })
//     // keep track of stop point above, then 

}

commentForm.addEventListener('submit', function(e){
    e.preventDefault()
    let newComment = document.querySelector('#comment-input').value;
    newP = document.createElement('p')
    newP.innerText = newComment
    console.log(newComment);
    commentList.append(newP)
    commentForm.reset()
})