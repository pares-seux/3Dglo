const regexp = () => {
  const calcInputs = document.querySelectorAll(
    ".calc-block > input[type=text]"
  );
  const textInputs = document.querySelectorAll("form input[type=text]");
  const emailInputs = document.querySelectorAll("form input[type=email]");
  const telInputs = document.querySelectorAll("form input[type=tel]");
  const errorSpan = document.createElement("p");
  errorSpan.innerText = "*Значение введено неверно";
  errorSpan.style.cssText = " margin-bottom: 10px;";

  textInputs.forEach((item) => {
    item.addEventListener("blur", () => {
      if (/[^а-яА-Я\s-]+/g.test(item.value)) {
        item.parentElement.append(errorSpan);
      } else {
        errorSpan.remove();
        item.value = item.value
          .replace(/(^[^а-яА-Я]+)|([^а-яА-Я]+)$/g, "")
          .replace(/\s\s/g, " ")
          .replace(/--/g, "-");
      }
    });
  });

  emailInputs.forEach((item) => {
    item.addEventListener("blur", () => {
      if (/[^a-zA-z0-9@-_\.!~\*\']+/g.test(item.value)) {
        item.parentElement.append(errorSpan);
      } else {
        errorSpan.remove();
        item.value = item.value
          .replace(/(^[^a-zA-z0-9]+)|([^a-zA-z0-9]+)$/g, "")
          .replace(/@@/g, "@")
          .replace(/\.\./g, ".");
      }
    });
  });

  telInputs.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/^\d-()]+/g, "");
    });
    item.addEventListener("blur", () => {
      item.value = item.value.replace(/[()-]/g, "");
      if (item.value.length < 10) {
        item.parentElement.append(errorSpan);
      } else {
        errorSpan.remove();
        item.value = `(${item.value.slice(0, 3)})${item.value.slice(
          3,
          6
        )}-${item.value.slice(6, 8)}-${item.value.slice(8, 10)}`;
      }
    });
  });

  calcInputs.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[\D]+/, "");
    });
  });
};

export default regexp;
