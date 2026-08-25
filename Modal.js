export class Modal {
  constructor(id) {
    this.modalElement = document.querySelector(id);
    this.closeBtn = document.querySelector(".modal__close");

    this.initCloseListener();
  }

  openModal() {
    this.modalElement.classList.add("modal-showed");
  }

  closeModal() {
    this.modalElement.classList.remove("modal-showed");
  }

  hasOpenModal() {
    return this.modalElement.classList.contains("modal-showed");
  }

  initCloseListener() {
    this.closeBtn.addEventListener("click", () => {
      this.closeModal();
    });
  }
}
