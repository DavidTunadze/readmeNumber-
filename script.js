//
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//
const checkBtn = document.getElementById('check');
const guessInput =document.getElementById('guess');
//

console.log("Secret number " + secretNumber);