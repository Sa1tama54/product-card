import { generateFormData } from "./utils.js";

export class Form {
  constructor(formId) {
    this.form = document.querySelector(formId);
  }

  get formElement() {
    return this.form;
  }

  getValues() {
    return generateFormData(this.form);
  }

  isValid() {
    return this.form.checkValidity();
  }

  resetValues() {
    this.form.reset();
  }
}
