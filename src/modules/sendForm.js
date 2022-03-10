const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      metod: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };
  form.addEventListener("submit", (e) => {
    e.defaultPrevented();
    const formData = new FormData(form);
    const formBody = {};
    formData.forEach((val, key) => {
      formBody[key] = val;
    });
    sendData(formBody).then();
  });
};

export default sendForm;
