let queryParams = new URLSearchParams(window.location.search);

let nameUser = queryParams.get("name");
let cohorte = queryParams.get("cohorte");
console.log(nameUser)
alert ("Hola " + nameUser + " del cohorte " + cohorte + "ahora pondrás a prueba tu memoria");


var timer; 
var timeLeft = 30; // seconds

// What to do when the timer runs out
/*function gameOver() {
  // This cancels the setInterval, so the updateTimer stops getting called
  cancelInterval(timer);
  
  // re-show the button, so they can start it again
  $('#playAgainButton').show();
}*/

function updateTimer() {
  timeLeft = timeLeft - 1;
  if(timeLeft >= 0)
    $('#timer').html(timeLeft);
  else {
    gameOver();
  }
}

// The button has an on-click event handler that calls this
function start() {
  // setInterval is a built-in function that will call the given function
  // every N milliseconds (1 second = 1000 ms)
  timer = setInterval(updateTimer, 1000);
  console.log('start')
  
  // It will be a whole second before the time changes, so we'll call the update
  // once ourselves
  updateTimer();
  
  // We don't want the to be able to restart the timer while it is running,
  // so hide the button.
   $('#playAgainButton').hide();

}