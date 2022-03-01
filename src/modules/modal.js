const modal = () => {
  const modal = document.querySelector(".popup");
  const modalForm = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
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

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};

export default modal;
