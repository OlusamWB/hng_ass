document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = now.toUTCString();
        document.querySelector('[data-testid="currentDay"]').textContent = now.toLocaleString('en-US', { weekday: 'long' });
    }

    updateTime();
    setInterval(updateTime, 1000);
});
