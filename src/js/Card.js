import { AddForm } from "./AddForm";

export class Card {
  constructor() {

  }

  addCard(element, data) {
    if (!data.trim()) return;
    const container = element.closest('.column_container');
    const cardContainer = container.querySelector('.cards_container');
    const card = this.getCard(data);

    cardContainer.insertAdjacentHTML('beforeend', card);
  }

  getCard(content, id = Date.now()) {
    return `
    <div class="card_item" data-id="${id}">
      <div class="card_content">${content}</div>
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