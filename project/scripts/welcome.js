function calculateDays(currentTime, lastVisit) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const timeDifference = currentTime - lastVisit;
    return Math.floor(timeDifference / msPerDay);
}

export function displayMessage() {
    const currentTime = Date.now();
    const lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        localStorage.setItem('lastVisit', currentTime);
        return "Welcome! Contact us if you have any questions."
    } else {
        const daysDifference = calculateDays(currentTime, lastVisit);

        if (daysDifference <= 1) {
            return "Back so soon! Awesome!";
        } else {
            return "Ready for a touch-up?";
        }
    }
}