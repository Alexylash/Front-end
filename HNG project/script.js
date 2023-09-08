// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Function to get the current day of the week
    function getCurrentDayOfWeek() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
        return dayOfWeek;
    }

    // Function to get the current UTC time in milliseconds
    function getCurrentUTCTime() {
        return Date.now();
    }

    // Update the elements with dynamic data
    const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    slackNameElement.textContent = "Opillo1000"; // Replace with your Slack name
    currentDayElement.textContent = getCurrentDayOfWeek();
    currentUTCTimeElement.textContent = `Current UTC Time: ${getCurrentUTCTime()} milliseconds`;
});
