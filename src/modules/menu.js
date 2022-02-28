const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
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

  closeBtn.addEventListener("click", handleMenu);
  menuBtn.addEventListener("click", handleMenu);
  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", (event) => {
      event.preventDefault();
      scroll(menuItem);
      handleMenu();
    })
  );
  scrollBtn.addEventListener("click", (event) => {
    event.preventDefault();
    scroll(scrollBtn);
  });
};

export default menu;
