const regexp = () => {
  const textInputs = document.querySelectorAll("form input[type=text]");
  const areaInput = document.querySelector(".mess");
  const emailInputs = document.querySelectorAll("form input[type=email]");
  const telInputs = document.querySelectorAll("form input[type=tel]");

  document.addEventListener("input", (e) => {
    if (e.target.classList.contains("calc-item")) {
      e.target.value = e.target.value.replace(/[\D]+/, "");
    } else {
      switch (e.target.type) {
        case "text":
          e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s-]+/g, "");
          break;
        case "email":
          e.target.value = e.target.value.replace(
            /[^a-zA-z0-9@-_\.!~\*\']+/g,
            ""
          );
          break;
        case "tel":
          e.target.value = e.target.value.replace(/[^\d-()+]+/g, "");
          break;
      }
    }
  });

  // textInputs.forEach((item) => {
  //   item.addEventListener("blur", () => {
  //     item.value = item.value
  //       .replace(/(^[^а-яА-Я]+)|([^а-яА-Я]+)$/g, "")
  //       .replace(/([-()@_.!~*'])(?=[-()@_.!~*']*\1)/g, "");
  //   });
  // });

  // areaInput.addEventListener("blur", () => {
  //   item.value = item.value
  //     .replace(/(^[^а-яА-Я]+)|([^а-яА-Я]+)$/g, "")
  //     .replace(/([-()@_.!~*'])(?=[-()@_.!~*']*\1)/g, "");
  // });

  // emailInputs.forEach((item) => {
  //   item.addEventListener("blur", () => {
  //     item.value = item.value.replace(/([-()@_.!~*'])(?=[-()@_.!~*']*\1)/g, "");
  //   });
  // });

  // telInputs.forEach((item) => {
  //   item.addEventListener("blur", () => {
  //     item.value = item.value.replace(/[()-+]/g, "");
  //     if (item.value.length === 10) {
  //       item.value = `(${item.value.slice(0, 3)})${item.value.slice(
  //         3,
  //         6
  //       )}-${item.value.slice(6, 8)}-${item.value.slice(8, 10)}`;
  //     } else if (
  //       item.value.length === 11 &&
  //       (item.value[0] === "7" || item.value[0] === "8")
  //     ) {
  //       {
  //         item.value = `+7(${item.value.slice(1, 4)})${item.value.slice(
  //           4,
  //           7
  //         )}-${item.value.slice(7, 9)}-${item.value.slice(9, 11)}`;
  //       }
  //     }
  //   });
  // });
};

export default regexp;
