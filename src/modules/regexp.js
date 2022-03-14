import { validate } from "./validate";

const regexp = () => {
  document.addEventListener("input", (e) => {
    if (e.target.classList.contains("calc-item")) {
      e.target.value = e.target.value.replace(/[\D]+/, "");
    } else {
      switch (e.target.type) {
        case "text":
          if (e.target.name === "user_name") {
            e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\-\s]+/g, "");
          } else {
            e.target.value = e.target.value.replace(
              /[^а-яА-ЯёЁ\-()@_.,!?~*'\s]+/g,
              ""
            );
          }
          if (
            e.target.classList.contains("error") ||
            e.target.classList.contains("success")
          ) {
            let element = document.getElementById(e.target.id);
            validate(element);
          }
          break;
        case "email":
          e.target.value = e.target.value.replace(
            /[^a-zA-z0-9@-_\.!~\*\']+/g,
            ""
          );
          if (
            e.target.classList.contains("error") ||
            e.target.classList.contains("success")
          ) {
            let element = document.getElementById(e.target.id);
            validate(element);
          }
          break;
        case "tel":
          e.target.value = e.target.value.replace(/[^\d\-()+]+/g, "");
          if (
            e.target.classList.contains("error") ||
            e.target.classList.contains("success")
          ) {
            let element = document.getElementById(e.target.id);
            validate(element);
          }
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
              .replace(/(^[^а-яА-ЯёЁ]+)|([^а-яА-ЯёЁ.!?]+)$/g, "")
              .replace(/([-()@_.,!?~*'])(?=[-()@_.,!?~*']*\1)/g, "")
              .replace(/\s+/g, " ")
              .replace(/(^|\s)\S/g, (letter) => {
                return letter.toUpperCase();
              });
            break;
          case "email":
            e.target.value = e.target.value.replace(
              /([-()@_.,?!~*'])(?=[-()@_.,?!~*']*\1)/g,
              ""
            );
            break;
          case "tel":
            e.target.value = e.target.value.replace(
              /([-()@_.,?!~*'])(?=[-()@_.,?!~*']*\1)/g,
              ""
            );
            break;
        }
      }
    },
    true
  );

  document.addEventListener(
    "invalid",
    (e) => {
      e.preventDefault();
      if (
        e.target.localName === "input" &&
        !e.target.classList.contains("calc-item")
      ) {
        e.target.classList.add("error");
      }
    },
    true
  );
};

export default regexp;
