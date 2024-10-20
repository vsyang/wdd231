function calculateDays(currentTime, lastVisit) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const timeDifference = currentTime - lastVisit;
    return Math.floor(timeDifference / msPerDay);
}

function displayMessage() {
    const message = document.getElementById('welcome');
    const currentTime = Date.now();
    const lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        message.textContent = "Welcome! Contact us if you have any questions."
    } else {
        const daysDifference = calculateDays(currentTime, lastVisit);

        if (daysDifference < 1) {
            message.textContent = "Back so soon! Awesome!";
        } else {
            message.textContent = "Ready for a touch-up?";
        }
    }

    localStorage.setItem('lastVisit', currentTime);
}

window.onload = displayMessage;