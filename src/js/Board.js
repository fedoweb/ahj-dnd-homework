import { Card } from "./Card";
import { AddForm } from "./AddForm";
import { Dnd } from "./Dnd";
import { Tooltip } from "./Tooltip";

export class Board {
  constructor() {
    this.STORAGE_KEY = 'dnd_board_data';
    this.container = document.querySelector('.container');
    this.card = new Card();
    this.addForm = new AddForm();
    this.dnd = new Dnd(this.container, () => this.saveState());
    this.data = this.loadState() || {
      todo: [],
      in_progress: [],
      done: []
    };
    this.tooltip = new Tooltip();
  }

  init() {
    this.renderCards();
    
    this.container.addEventListener('click', this.onClick);
    this.container.addEventListener('change', this.onChange);

    document.documentElement.addEventListener('mouseover', this.onMouseover);
    document.documentElement.addEventListener('mouseout', this.onMouseout);

    window.addEventListener('beforeunload', () => this.saveState());
  }

  onClick = (e) => {
    const addButton = e.target.classList.contains('add_button');
    const closeFormButton = e.target.classList.contains('close_form_button');
    const addCardButton = e.target.classList.contains('add_card_button');
    const deleteCardButton = e.target.classList.contains('delete_card_button');

    if (addButton) this.addForm.addCardForm(e.target);

    if (closeFormButton) this.addForm.closeCardForm(e.target);

    if (addCardButton) {
      e.preventDefault();

      const input = document.querySelector('.card_input');
      const inputValue = input.value;
  
      if (!input.value.trim()) {
        this.tooltip.showTooltip('Введите текст, пожалуйста!', input);
        return null;
      };

      this.card.addCard(e.target, this.data);
      this.addForm.closeCardForm(e.target);
      this.saveState();
    };

    if (deleteCardButton) {
      const card = e.target.closest('.card_item');
      card.remove();
      this.saveState();
    };

    this.tooltip.removeTooltip();
  }

  onChange = (e) => {
    this.data = e.target.value;
  }

  onMouseover = (e) => {
    const cardItem = e.target.closest('.card_item');
      if (cardItem && !this.dnd.dndCard) {
          const button = this.card.getCloseButton();
          
          if (!cardItem.querySelector('.delete_card_button')) {
              cardItem.insertAdjacentHTML('beforeend', button);
          }
      }   
  }

  onMouseout = (e) => {
      const cardItem = e.target.closest('.card_item');
      
      if (cardItem && !cardItem.contains(e.relatedTarget)) {
          const button = cardItem.querySelector('.delete_card_button');
          if (button) button.remove();
      }
  }

  loadState() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }

  saveState() {
    const columns = {
      todo: this.getColumnData('todo'),
      in_progress: this.getColumnData('in_progress'),
      done: this.getColumnData('done')
    };

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(columns));
  }

  getColumnData(className) {
    const column = this.container.querySelector(`.${className}`);
    if (!column) return [];

    console.log(column.querySelectorAll('.card_item'));

    return Array.from(column.querySelectorAll('.card_item')).map(card => ({
      content: card.querySelector('.card_content').textContent || '',
    }));
  }

  renderCards() {
    Object.entries(this.data).forEach(([column, cards]) => {
      const columnEl = this.container.querySelector(`.${column}`);
      if (!columnEl) return;
      
      const cardsContainer = columnEl.querySelector('.cards_container');
      cardsContainer.innerHTML = '';
      
      cards.forEach(cardData => {
        cardsContainer.insertAdjacentHTML('beforeend', this.card.getCard(cardData.content));
      });
    });
  }
}