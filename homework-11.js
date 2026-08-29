import { Form } from "./Form.js";
import { Modal } from "./Modal.js";
import { showErrorMessage } from "./utils.js";

// Задание 1. Форма подписки
const subscribeForm = new Form("#subscribe-form");
const subscribeMessage = document.querySelector(".footer__subscribe-message");

const showSubscribeMessage = (text, isError) => {
  const errorMessageClass = "footer__subscribe-message--error";
  const successMessageClass = "footer__subscribe-message--success";
  subscribeMessage.textContent = text;
  subscribeMessage.classList.toggle(errorMessageClass, isError);
  subscribeMessage.classList.toggle(successMessageClass, !isError);
};

subscribeForm.formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!subscribeForm.isValid()) {
    showSubscribeMessage(
      "Пожалуйста, введите действительный адрес электронной почты.",
      true,
    );
  } else {
    const data = subscribeForm.getValues();

    console.log(data);

    showSubscribeMessage("Спасибо! Вы успешно подписались.", false);
    subscribeForm.resetValues();
  }
});

// Задание 2. Модальное окно с регистрацией
const registrationModal = new Modal("#registration-modal");
const registrationForm = new Form("#registration-form");
const openModalBtn = document.querySelector("#open-registration-modal-btn");
const passwordInput = document.querySelector("#register-password");
const passwordRepeatInput = document.querySelector("#register-password-repeat");
const registrationFormMessage = document.querySelector(
  "#registration-form-message",
);

openModalBtn.addEventListener("click", () => {
  registrationModal.openModal();
});

let user = null;

registrationForm.formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const isPasswordMismatch = passwordInput.value !== passwordRepeatInput.value;

  if (isPasswordMismatch || !registrationForm.isValid()) {
    showErrorMessage(
      registrationFormMessage,
      "Не удалось завершить регистрацию. Ошибка заполнения!",
    );
  } else {
    const data = registrationForm.getValues();

    user = { ...data, createdOn: new Date() };

    console.log(user);

    registrationFormMessage.textContent = "";
    registrationFormMessage.classList.remove("modal__message--error");
    registrationForm.resetValues();
    registrationModal.closeModal();
  }
});
