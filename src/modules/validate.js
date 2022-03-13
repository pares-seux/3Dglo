const validate = (element) => {
  const checkValue = () => {
    switch (element.type) {
      case "text":
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
          /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(
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
