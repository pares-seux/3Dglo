import { validate } from "./validate";

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с Вами свяжется!";

  const validateInputs = (list) => {
    let success = true;
    list.forEach((input) => {
      validate(input);
      if (input.classList.contains("error")) {
        success = false;
      }
    });
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      if (key !== "user_message") {
        formBody[key] = val;
      } else if (val !== "") {
        formBody[key] = val;
      }
    });
    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block" && element.textContent !== "0") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input" && element.value !== "0") {
        formBody[elem.id] = element.value;
      }
    });
    if (validateInputs(formElements)) {
      form.append(statusBlock);
      if (formId === "form3") {
        statusBlock.style.color = "white";
      }
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          setTimeout(() => {
            statusBlock.textContent = "";
          }, 5000);
          formElements.forEach((input) => {
            input.value = "";
            input.classList.remove("success");
          });
          console.log(document.querySelectorAll(".calc-item"));
          document
            .querySelectorAll(".calc-item")
            .forEach((elem) => (elem.value = ""));
          someElem.forEach((elem) => {
            const element = document.getElementById(elem.id);
            if (elem.type === "block") {
              element.textContent = 0;
            } else if (elem.type === "input") {
              element.value = 0;
            }
          });
        })
        .catch((error) => {
          console.log(error);
          statusBlock.textContent = errorText;
          setTimeout(() => {
            statusBlock.textContent = "";
          }, 5000);
        });
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму");
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
