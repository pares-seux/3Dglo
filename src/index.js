import menu from "./modules/menu";
import timer from "./modules/timer";
import modal from "./modules/modal";
import regexp from "./modules/regexp";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer("17 march 2022");
menu();
modal();
regexp();
tabs();
slider("portfolio-content", "portfolio-item");
calc();
sendForm({
  formId: "form1",
  someElement: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form2",
  someElement: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form3",
  someElement: [
    {
      type: "block",
      id: "total",
    },
  ],
});
