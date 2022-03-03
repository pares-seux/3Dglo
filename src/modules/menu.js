const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const scrollBtn = document.querySelector("main>a");

  const scroll = (element) => {
    const time = 500;
      let href = element.getAttribute('href');
      console.log(href, document.getElementById(href.slice(1)));
      let target = document.getElementById(href.slice(1));
      target.scrollIntoView({block: "center", behavior: "smooth"});    
  };

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);
  menu.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target, e);
    if (e.target === closeBtn || e === null) {
      handleMenu();
    } else if (e.target.localName === "a") {
      scroll(e.target);
      handleMenu();
    }
  });

  scrollBtn.addEventListener("click", (event) => {
    event.preventDefault();
    scroll(scrollBtn);
  });
};

export default menu;
