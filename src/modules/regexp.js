const regexp = () => {
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

  document.addEventListener(
    "blur",
    (e) => {
      if (
        e.target.localName === "input" &&
        !e.target.classList.contains("calc-item")
      ) {
        switch (e.target.type) {
          case "text":
            e.target.value = e.target.value
              .replace(/(^[^а-яА-ЯёЁ]+)|([^а-яА-ЯёЁ]+)$/g, "")
              .replace(/([-()@_.!~*'/s])(?=[-()@_.!~*'/s]*\1)/g, "")
              .replace(/(^|\s)\S/g, (letter) => {
                return letter.toUpperCase();
              });

            break;
          case "email":
            e.target.value = e.target.value.replace(
              /([-()@_.!~*'])(?=[-()@_.!~*']*\1)/g,
              ""
            );
            break;
          case "tel":
            e.target.value = e.target.value.replace(
              /([-()@_.!~*'])(?=[-()@_.!~*']*\1)/g,
              ""
            );
            break;
        }
      }
    },
    true
  );

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
