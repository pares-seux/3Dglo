const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    if (dateNow > dateStop) {
      return { timeRemaining: -1, hours: "00", minutes: "00", seconds: "00" };
    }
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 120 / 24);
    let hours = Math.floor((timeRemaining / 120) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    let interval = setInterval(() => {
      let getTime = getTimeRemaining();
      timerHours.textContent = (getTime.hours + "").padStart(2, "0");
      timerMinutes.textContent = (getTime.minutes + "").padStart(2, "0");
      timerSeconds.textContent = (getTime.seconds + "").padStart(2, "0");

      if (getTime.timeRemaining < 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  updateClock();
};

export default timer;
