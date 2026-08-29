export const generateFormData = (form) => {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
};

export const showErrorMessage = (formMessage, messageText) => {
  formMessage.textContent = messageText;
  formMessage.classList.add("modal__message--error");
};
