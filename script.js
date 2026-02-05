const targetTime = Date.UTC(2026, 1, 6, 19, 25, 0);

const pad = (value) => String(value).padStart(2, "0");

const getCard = (unit) => document.querySelector(`[data-unit="${unit}"] .flip-card`);

const setCardValue = (unit, value) => {
  const card = getCard(unit);
  if (!card) return;

  const front = card.querySelector(".flip-card__face--front");
  const back = card.querySelector(".flip-card__face--back");
  const nextValue = unit === "days" ? String(value) : pad(value);

  if (front.textContent === nextValue) return;

  back.textContent = nextValue;
  card.classList.add("is-flipping");

  setTimeout(() => {
    front.textContent = nextValue;
    card.classList.remove("is-flipping");
  }, 600);
};

const updateCountdown = () => {
  const now = Date.now();
  const remaining = Math.max(targetTime - now, 0);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  setCardValue("days", days);
  setCardValue("hours", hours);
  setCardValue("minutes", minutes);
  setCardValue("seconds", seconds);
};

updateCountdown();
setInterval(updateCountdown, 1000);
