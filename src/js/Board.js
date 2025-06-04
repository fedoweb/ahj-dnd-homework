import { Card } from "./Card";
import { AddForm } from "./AddForm";

export class Board {
  constructor() {
    this.container = document.querySelector('.container');
    this.card = new Card();
    this.addForm = new AddForm();
    this.data;
    this.dndCard = null;
    this.mouseUpCard = null;
  }

  init() {
    this.container.addEventListener('click', this.onClick);
    this.container.addEventListener('change', this.onInput);

    document.documentElement.addEventListener('mouseover', this.onMouseover);
    document.documentElement.addEventListener('mouseout', this.onMouseout);

    this.container.addEventListener('mousedown', this.onMousedown);
    //this.container.addEventListener('mouseup', this.onMouseup);
  }

  onClick = (e) => {
    //e.preventDefault();

    const addButton = e.target.classList.contains('add_button');
    const closeFormButton = e.target.classList.contains('close_form_button');
    const addCardButton = e.target.classList.contains('add_card_button');
    const deleteCardButton = e.target.classList.contains('delete_card_button');

    if(addButton) this.addForm.addCardForm(e.target);

    if(closeFormButton) this.addForm.closeCardForm(e.target);

    if(addCardButton) {
      const input = document.querySelector('.card_input');
  
      if (!input.value.trim()) {
        input.focus();
        return;
      };

      this.card.addCard(e.target, this.data);
      this.addForm.closeCardForm(e.target);
    };

    if(deleteCardButton) {
      const card = e.target.closest('.card_item');
      card.remove();
    };
  }

  onInput = (e) => {
    this.data = e.target.value;
  }

  onMouseover = (e) => {
    const cardItem = e.target.closest('.card_item');
      if (cardItem) {
          const button = this.card.getCloseButton();
          
          if (!cardItem.querySelector('.delete_card_button')) {
              cardItem.insertAdjacentHTML('beforeend', button);
          }
      }

      if(this.dndCard) {
        this.dndCard.style.top = e.clientY + 'px';
        this.dndCard.style.left = e.clientX + 'px';
      }
      
  }

  onMouseout = (e) => {
      const cardItem = e.target.closest('.card_item');
      
      if (cardItem && !cardItem.contains(e.relatedTarget)) {
          const button = cardItem.querySelector('.delete_card_button');
          if (button) {
              button.remove();
          }
      }
  }

  onMouseup = (e) => {
    const columnContainer = e.target.closest('.column_container');
    const cardContainer = columnContainer.querySelector('.cards_container')
    const mouseUpCard = e.target.closest('.card_item');

    if(!mouseUpCard) {
      cardContainer.append(this.dndCard)
    } else {
      cardContainer.insertBefore(this.dndCard, mouseUpCard);
    };

    

    if (!this.dndCard) return;
    this.dndCard.classList.remove('dragged');
    this.dndCard = null;
    document.body.style.cursor = '';

    document.documentElement.removeEventListener('mouseup', this.onMouseup);
  }

  onMousedown = (e) => {
    if (!e.target.closest('.card_item')) return;
    if (e.target.classList.contains('delete_card_button')) return;
    
    e.preventDefault();

    this.dndCard = e.target.closest('.card_item');
    this.dndCard.classList.add('dragged');
    document.body.style.cursor = 'grabbing';

    document.documentElement.addEventListener('mouseup', this.onMouseup);
  };
}