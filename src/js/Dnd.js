import { Placeholder } from "./Placeholder";

export class Dnd {
  constructor(container, callback) {
    this.container = container;
    this.placeholder = new Placeholder();
    this.callback = callback;
    this.dndCard = null;
    this.dragOffset = { x: 0, y: 0 };
    this.originalDimensions = { width: 0, height: 0 };
    
    this.init();
  }

  init() {
    this.container.addEventListener('mousedown', this.onMousedown);
  }

  onMousedown = (e) => {
    if (!e.target.closest('.card_item')) return;
    if (e.target.classList.contains('delete_card_button')) return;
    
    e.preventDefault();

    this.dndCard = e.target.closest('.card_item');
    
    this.dndCard.classList.add('dragged');
    document.body.style.cursor = 'grabbing';

    this.originalDimensions = {
      width: this.dndCard.offsetWidth,
      height: this.dndCard.offsetHeight
    };

    const cardRect = this.dndCard.getBoundingClientRect();
    this.dragOffset = {
      x: e.clientX - cardRect.left,
      y: e.clientY - cardRect.top
    };

    document.addEventListener('mousemove', this.onMousemove);
    document.addEventListener('mouseup', this.onMouseup);
  };

  onMousemove = (e) => {
    if (!this.dndCard) return;

    this.placeholder.show(this.dndCard.closest('.cards_container'),
                          this.originalDimensions.height,
                          this.dndCard.nextSibling);

    this.dndCard.style.position = 'absolute';
    this.dndCard.style.width = `${this.originalDimensions.width}px`;
    this.dndCard.style.left = `${e.clientX - this.dragOffset.x}px`;
    this.dndCard.style.top = `${e.clientY - this.dragOffset.y}px`;

    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const column = elements.find(el => el.classList.contains('column_container'));
    
    if (column) {
      const cardsContainer = column.querySelector('.cards_container');
      const cards = Array.from(cardsContainer.children)
        .filter(child => child !== this.dndCard && child !== this.placeholder.element);

      const closestCard = this.findClosestCard(cards, e.clientY);
      
      if (closestCard) {
        const cardRect = closestCard.getBoundingClientRect();
        if (e.clientY < cardRect.top + cardRect.height / 2) {
          this.placeholder.insertBefore(closestCard);
        } else {
          this.placeholder.insertAfter(closestCard);
        }
      } else {
        this.placeholder.appendTo(cardsContainer);
      }
    }
  };

  onMouseup = (e) => {
    if (!this.dndCard) return;

    if (this.placeholder.isVisible() && this.placeholder.element.parentNode) {
      this.placeholder.element.replaceWith(this.dndCard);
    }

    this.dndCard.style.position = '';
    this.dndCard.style.left = '';
    this.dndCard.style.top = '';
    this.dndCard.style.width = '';
    document.body.style.cursor = '';
    this.dndCard.classList.remove('dragged');
    
    this.placeholder.remove();
    this.dndCard = null;

    if (this.callback) {
      this.callback();
    }

    document.removeEventListener('mousemove', this.onMousemove);
    document.removeEventListener('mouseup', this.onMouseup);
  };

  findClosestCard(cards, mouseY) {
    return cards.reduce(
      (closest, card) => {
        const rect = card.getBoundingClientRect();
        const offset = mouseY - rect.top - rect.height / 2;
        return offset < 0 && offset > closest.offset ? { offset, element: card } : closest;
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }
}