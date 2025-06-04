import { AddForm } from "./AddForm";

export class Card {
  constructor() {

  }

  addCard(element, data) {
    const container = element.closest('.column_container');
    const cardContainer = container.querySelector('.cards_container');
    const card = this.getCard(data);

    cardContainer.insertAdjacentHTML('beforeend', card);
  }

  getCard(data) {
    return `
    <div class="card_item">
      <div class="card_content">${data}</div>
      <div class="card_status"></div>
    </div>
    `;
  }

  getCloseButton() {
    return `
    <button type="button" class="delete_card_button">&#215;</button>
    `;
  }
}