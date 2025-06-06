export class Placeholder {
  constructor() {
    this.element = this.createPlaceholder();
    this.isInDOM = false;
  }

  createPlaceholder() {
    const el = document.createElement('div');
    el.className = 'card-placeholder';
    el.style.display = 'none';
    return el;
  }

  show(parent, height, beforeNode = null) {
    this.element.style.height = `${height}px`;
    
    if (!this.isInDOM) {
      if (beforeNode) {
        parent.insertBefore(this.element, beforeNode);
      } else {
        parent.appendChild(this.element);
      }
      this.isInDOM = true;
    }
    
    this.element.style.display = 'block';
  }

  hide() {
    if (this.isInDOM) {
      this.element.style.display = 'none';
    }
  }

  remove() {
    if (this.isInDOM && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
      this.isInDOM = false;
    }
  }
}