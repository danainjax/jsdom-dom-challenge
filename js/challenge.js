let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let pause = document.getElementById('pause');
const commentForm = document.getElementById('comment-form');
const commentList = document.querySelector('#list');
let likesList = document.querySelector('.likes')
const heartLikes = {}
console.log(likesList);



// isPaused? = false

setInterval(incrementCounter, 1000)

function incrementCounter () {
   counter.innerText = parseInt(counter.innerText) + 1
   minus.addEventListener('click', handleMinus)
   plus.addEventListener('click', handlePlus)
   heart.addEventListener('click', handleHeart)
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
}

    function handleHeart() {
        const time = parseInt(counter.innerText)
        heartLikes[time] ? heartLikes[time] += 1 : heartLikes[time] = 1
        if (document.getElementById(`like-${time}`)) {
            document.getElementById(`like-${time}`).innerText = `${time} was clicked ${heartLikes[time]} times` 

        } else {
        console.log(heartLikes);
        newLike = document.createElement('li')
        newLike.id = `like-${time}`
        newLike.innerText = (`${time} has been clicked ${heartLikes[time]} times`)
        }
        console.log(newLike)
        likesList.appendChild(newLike)
    }
        // console.log(newLike)
        
        // likesList().appendChild += (newLike);
    
        

    
//     // keep track of stop point above, then 
    


commentForm.addEventListener('submit', function(e){
    e.preventDefault()
    let newComment = document.querySelector('#comment-input').value;
    newP = document.createElement('p')
    newP.innerText = newComment
    console.log(newComment);
    commentList.append(newP)
    commentForm.reset()
})