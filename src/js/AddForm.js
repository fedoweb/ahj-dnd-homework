export class AddForm {
  constructor() {

  }

  addCardForm(element) {
    const form = document.querySelector('.add_form');
    if(form) form.remove();
    
    const addedForm = this.getAddForm();
    element.insertAdjacentHTML('beforebegin', addedForm);
  }

  closeCardForm(element) {
    const closeElement = element.closest('.add_form');
    closeElement.remove();
  }

  getAddForm() {
    return `
      <form class="add_form">
        <input class="card_input" type="text" placeholder="write something..." required>
        <div class="add_form_buttons">
          <button type="submit" class="add_card_button">Add Card</button>
          <button type="button" class="close_form_button">Close</button>
        </div>
      </form>
    `;
  }
}