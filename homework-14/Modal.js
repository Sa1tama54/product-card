export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.closeBtn = this.modal.querySelector("#modal-close-button");
    this.handleCloseClick = () => this.close();
    this.#initOpen(buttonId, shouldCloseOnOverlay);
  }

  open() {
    this.#initClose();
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
  }

  close() {
    this.overlay.removeEventListener("click", this.handleCloseClick);
    this.closeBtn.removeEventListener("click", this.handleCloseClick);

    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  #initOpen(buttonId, shouldCloseOnOverlay) {
    const button = document.getElementById(buttonId);

    button.addEventListener("click", () => {
      this.open();

      if (shouldCloseOnOverlay) {
        this.overlay.addEventListener("click", this.handleCloseClick);
      }
    });
  }

  #initClose() {
    this.closeBtn.addEventListener("click", this.handleCloseClick);
  }
}
