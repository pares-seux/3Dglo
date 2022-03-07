import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const modalForm = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  let appearanceFrame, animateCount;

  const modalAppearance = () => {
    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modalForm.style.opacity = progress * 100 + "%";
      },
    });
    modalForm.style.opacity = "";
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
