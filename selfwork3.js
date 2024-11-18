let btnStart = document.querySelector('#btnStart');
let btnPause = document.querySelector('#btnPause');
let btnReset = document.querySelector('#btnReset');

let countdown;
let remainingTime;  
let isPaused = false;

document.querySelector('#btnStart').addEventListener('click', startTimer);

function startTimer() {
    const timeBox = document.querySelector('#timeBox').value;
    if (!isPaused) {
        remainingTime = parseInt(timeBox);
    }
    isPaused = false;
    clearInterval(countdown);
    countdown = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            document.querySelector('#countdownDisplay').innerText = remainingTime;
        } else {
            clearInterval(countdown);
        }
    }, 1000);
}

    btnPause = document.querySelector('#btnPause').addEventListener('click', pauseTimer);
    function pauseTimer() { 
        isPaused = true; 
        clearInterval(countdown);
     }

     btnReset = document.querySelector('#btnReset').addEventListener('click' , resetTimer);
     function resetTimer() {
        clearInterval(countdown);
        document.querySelector('#timeBox').value = '';
        document.querySelector('#countdownDisplay').innerText = '0';
        isPaused = 0;
     }




