import { validate } from "./validate";

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);

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
      formBody[key] = val;
    });
    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });
    if (validateInputs(formElements)) {
      sendData(formBody)
        .then((data) => {
          formElements.forEach((input) => {
            input.value = "";
            input.classList.remove("success");
          });
        })
        .catch((error) => {
          console.log(error);
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
