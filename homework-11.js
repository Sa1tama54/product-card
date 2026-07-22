const subscribeForm = document.querySelector(".footer__subscribe-form");
const emailInput = document.querySelector(".footer__subscribe-input");
const subscribeMessage = document.querySelector(".footer__subscribe-message");
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const showSubscribeMessage = (text, isError) => {
  const errorMessageClass = "footer__subscribe-message--error";
  const successMessageClass = "footer__subscribe-message--success";
  subscribeMessage.textContent = text;
  subscribeMessage.classList.toggle(errorMessageClass, isError);
  subscribeMessage.classList.toggle(successMessageClass, !isError);
};

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!email || !EMAIL_PATTERN.test(email)) {
    showSubscribeMessage(
      "Пожалуйста, введите действительный адрес электронной почты.",
      true,
    );
    return;
  }

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  showSubscribeMessage("Спасибо! Вы успешно подписались.", false);
  emailInput.value = "";
});
