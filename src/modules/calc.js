const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");
  let totalAnimate,
    counter = 0,
    animateFrame;

  const animate = (totalValue) => {
    const step = (totalValue - +total.textContent) / 25;

    return function () {
      animateFrame = requestAnimationFrame(totalAnimate);
      if (
        (counter < totalValue && counter + step < totalValue) ||
        (counter > totalValue && counter + step > totalValue)
      ) {
        counter += step;
        console.log(totalValue, counter, step);
        total.textContent = Math.round(counter);
      } else {
        total.textContent = Math.round(totalValue);
        counter = totalValue;
        cancelAnimationFrame(animateFrame);
        calcType.removeAttribute("readonly");
        calcSquare.removeAttribute("readonly");
        calcCount.removeAttribute("readonly");
        calcDay.removeAttribute("readonly");
      }
    };
  };

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;
    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value < 5 && calcDay.value) {
      calcDayValue = 2;
    } else if (calcDay.value < 10 && calcDay.value) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    totalAnimate = animate(totalValue);
    totalAnimate();
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      calcType.setAttribute("readonly", "readonly");
      calcSquare.setAttribute("readonly", "readonly");
      calcCount.setAttribute("readonly", "readonly");
      calcDay.setAttribute("readonly", "readonly");
      countCalc();
    }
  });
};

export default calc;
