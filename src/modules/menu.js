const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const scrollBtn = document.querySelector("main>a");

  const scroll = (element) => {
    let href = element.getAttribute("href");
    let target = document.getElementById(href.slice(1));
    target.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest(".active-menu")) {
      e.preventDefault();
      if (e.target === closeBtn) {
        handleMenu();
      } else if (e.target.localName === "a") {
        scroll(e.target);
        handleMenu();
      }
    } else {
      if (
        menu.classList.contains("active-menu") ||
        e.target === menuBtn ||
        e.target.closest(".menu")
      ) {
        e.preventDefault();
        handleMenu();
      }
      if (e.target === scrollBtn || scrollBtn === e.target.parentElement) {
        e.preventDefault();
        scroll(scrollBtn);
      }
    }
  });
};

export default menu;
