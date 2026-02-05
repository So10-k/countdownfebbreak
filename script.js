const targetTime = Date.UTC(2026, 1, 6, 19, 25, 0);

const countdownElements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const pad = (value) => String(value).padStart(2, "0");

const updateCountdown = () => {
  const now = Date.now();
  const remaining = Math.max(targetTime - now, 0);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownElements.days.textContent = days;
  countdownElements.hours.textContent = pad(hours);
  countdownElements.minutes.textContent = pad(minutes);
  countdownElements.seconds.textContent = pad(seconds);
};

updateCountdown();
setInterval(updateCountdown, 1000);
