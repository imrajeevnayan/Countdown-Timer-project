let countdown;

function startTimer() {
    const durationInput = document.getElementById("durationInput");
    const timerDisplay = document.getElementById("timer");

    const duration = parseInt(durationInput.value);

    if (!isNaN(duration) && duration > 0) {
        clearInterval(countdown);

        let timeLeft = duration;

        countdown = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                timerDisplay.textContent = "Countdown Complete!";
            } else {
                timerDisplay.textContent = `Time Left: ${timeLeft} seconds`;
                timeLeft--;
            }
        }, 1000);
    } else {
        timerDisplay.textContent = "Please enter a valid duration (in seconds).";
    }
}
