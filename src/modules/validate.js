const validate = (element) => {
  const checkValue = () => {
    switch (element.type) {
      case "text":
        if (element.name === "user_name") {
          if (
            element.value.trim().length < 3 ||
            /^([^\s]*\s){3,}[^\s]*$/.test(
              element.value.trim().replace(/\s+/g, " ")
            )
          ) {
            element.classList.add("error");
            element.classList.remove("success");
            return false;
          } else {
            element.classList.remove("error");
            element.classList.add("success");
            return true;
          }
        } else {
          if (element.value.trim() !== "") {
            return true;
          } else {
            return false;
          }
        }
        break;
      case "email":
        if (
          /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(element.value.trim())
        ) {
          element.classList.remove("error");
          element.classList.add("success");
          return true;
        } else {
          element.classList.add("error");
          element.classList.remove("success");
          return false;
        }
        break;
      case "tel":
        if (
          /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(
            element.value.trim()
          )
        ) {
          element.classList.remove("error");
          element.classList.add("success");
          return true;
        } else {
          element.classList.add("error");
          element.classList.remove("success");
          return false;
        }
        break;
    }
  };

  checkValue();
};

export { validate };
