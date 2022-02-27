const modal = () => {
  const modal = document.querySelector(".popup");
  const modalForm = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  let appearanceFrame, animateCount;

  const modalAppearance = () => {
    appearanceFrame = requestAnimationFrame(modalAppearance);
    if (animateCount < 100) {
      animateCount += 2;
      modalForm.style.opacity = `${animateCount}%`;
    } else {
      cancelAnimationFrame(appearanceFrame);
      modalForm.style.opacity = "";
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      console.log(screen.width);
      if (+screen.width > 768) {
        animateCount = 0;
        modalForm.style.opacity = 0;
        modalAppearance();
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

export default modal;
