

const regexp = () => {
  const calcInputs = document.querySelectorAll(".calc-block > input[type=text]");
  const textInputs = document.querySelectorAll("form input[type=text]");
  const emailInputs = document.querySelectorAll("form input[type=email]");
  const telInputs = document.querySelectorAll("form input[type=tel]");
  const errorSpan = document.createElement("p");
  errorSpan.innerText = "*Значение введено неверно";
  errorSpan.style.cssText = " margin-bottom: 10px;";

  textInputs.forEach( (item) => {
    item.addEventListener('blur', () => {
      if(/[^а-яА-Я\s-]+/g.test(item.value)) {
        item.parentElement.append(errorSpan);
      } else {
        errorSpan.remove();
        item.value = item.value.replace(/^-+|-+$|^\s+|\s+$/g, '').replace(/\s\s/g, ' ').replace(/--/g, '-');
      }
    });
  });


  calcInputs.forEach( (item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[\D]+/,"");
    });
  });
}

export default regexp;