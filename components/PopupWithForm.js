import Popup from "./Popup.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector: popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".popup__form");
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const name = evt.target.name.value;
      const dateInput = evt.target.date.value;
      const date = new Date(dateInput);
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

      const id = uuidv4();
      const values = { name, date, id };
      this._handleFormSubmit(values);
    });
  }
}

export default PopupWithForm;
