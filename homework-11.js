// Задание 1. Форма подписки
const subscribeForm = document.querySelector(".footer__subscribe-form");
const emailInput = document.querySelector(".footer__subscribe-input");
const subscribeMessage = document.querySelector(".footer__subscribe-message");

const showSubscribeMessage = (text, isError) => {
  const errorMessageClass = "footer__subscribe-message--error";
  const successMessageClass = "footer__subscribe-message--success";
  subscribeMessage.textContent = text;
  subscribeMessage.classList.toggle(errorMessageClass, isError);
  subscribeMessage.classList.toggle(successMessageClass, !isError);
};

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.checkValidity()) {
    showSubscribeMessage(
      "Пожалуйста, введите действительный адрес электронной почты.",
      true,
    );
  } else {
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    showSubscribeMessage("Спасибо! Вы успешно подписались.", false);
    emailInput.value = "";
  }
});

// Задание 2. Модальное окно с регистрацией
const modal = document.querySelector("#registration-modal");
const openModalBtn = document.querySelector("#open-registration-modal-btn");
const closeModalBtn = document.querySelector("#close-registration-modal-btn");
const registrationForm = document.querySelector("#registration-form");
const passwordInput = document.querySelector("#register-password");
const passwordRepeatInput = document.querySelector("#register-password-repeat");
const registrationFormMessage = document.querySelector(
  "#registration-form-message",
);

openModalBtn.addEventListener("click", () => {
  modal.classList.add("modal-showed");
});

const closeModal = () => {
  modal.classList.remove("modal-showed");
};

closeModalBtn.addEventListener("click", closeModal);

const showErrorMessage = () => {
  const errorText = "Не удалось завершить регистрацию. Ошибка заполнения!";

  registrationFormMessage.textContent = errorText;
  registrationFormMessage.classList.add("modal__message--error");
};

let user = null;

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const isPasswordMismatch = passwordInput.value !== passwordRepeatInput.value;

  if (isPasswordMismatch || !form.checkValidity()) {
    showErrorMessage();
  } else {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    user = { ...data, createdOn: new Date() };

    console.log(user);

    registrationFormMessage.textContent = "";
    registrationFormMessage.classList.remove("modal__message--error");
    form.reset();
    closeModal();
  }
});
