const timer = (deadline) => {
  const timerDays = document.getElementById("timer-days");
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  let interval;

  function formatWords(num, array) {
    if (num === 1 || (num % 10 === 1 && num !== 11)) {
      return `${num} ${array[0]}`;
    }
    if ((num > 1 && num < 5) || (num % 10 > 1 && num % 10 < 5 && num > 20)) {
      return `${num} ${array[1]}`;
    }
    return `${num} ${array[2]}`;
  }

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    if (dateNow > dateStop) {
      return { timeRemaining: -1, hours: "00", minutes: "00", seconds: "00" };
    }
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    if (getTime.days > 0) {
      timerDays.textContent = formatWords(getTime.days, [
        "день",
        "дня",
        "дней",
      ]);
    } else {
      timerDays.textContent = "";
    }
    timerHours.textContent = (getTime.hours + "").padStart(2, "0");
    timerMinutes.textContent = (getTime.minutes + "").padStart(2, "0");
    timerSeconds.textContent = (getTime.seconds + "").padStart(2, "0");

    if (getTime.timeRemaining < 0) {
      clearInterval(interval);
    }
  };

  const startClock = () => {
    updateClock();
    interval = setInterval(() => {
      updateClock();
    }, 1000);
  };

  startClock();
};

export default timer;
