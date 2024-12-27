const endDate = new Date("2025-01-14T17:30:00").getTime();

// Taymerni har soniyada yangilash uchun funksiyani o'rnatamiz
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  if (timeLeft > 0) {
    // Kun, soat, daqiqa va soniyalarni hisoblash
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // HTML elementlarini yangilash
    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent =
      hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent =
      minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent =
      seconds < 10 ? "0" + seconds : seconds;
  } else {
    // Taymer tugadi
    clearInterval(countdown);
    document.getElementById("countdown").textContent = "Time's up!";
  }
}, 1000);
