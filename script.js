// Calculate the target date as the current time plus 48 hours (2 days).
const targetDate = new Date().getTime() + (1000 * 3600 * 48);

let days, hours, minutes, seconds;

// Get a reference to the countdown container element.
const countdown = document.getElementById("tiles");

// Call the `getCountdown` function to initialize the countdown.
getCountdown();

// Set up an interval to update the countdown every 1 second (1000 milliseconds).
const timer = setInterval(getCountdown, 1000);

// This function adds a leading zero to single-digit numbers (e.g., 1 => "01").
function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

// This function calculates the remaining time and updates the countdown display.
function getCountdown() {
    const currentDate = new Date().getTime();
    let secondsLeft = (targetDate - currentDate) / 1000;

    // If the target date has passed, stop the countdown timer.
    if (secondsLeft < 0) {
        clearInterval(timer);
        return;
    }

    // Calculate days, hours, minutes, and seconds from the remaining seconds.
    days = pad(parseInt(secondsLeft / 86400));
    secondsLeft = secondsLeft % 86400;

    hours = pad(parseInt(secondsLeft / 3600));
    secondsLeft = secondsLeft % 3600;

    minutes = pad(parseInt(secondsLeft / 60));
    seconds = pad(parseInt(secondsLeft % 60));

    // Update the HTML content to display the countdown.
    countdown.innerHTML = `
    <span>${days}</span>
    <span>${hours}</span>
    <span>${minutes}</span>
    <span>${seconds}</span>
    `;
}
