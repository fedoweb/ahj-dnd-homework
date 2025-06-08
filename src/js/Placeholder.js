export class Placeholder {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'card_placeholder';
    this.element.style.display = 'none';
  }

  show(parent, height, beforeNode = null) {
    this.element.style.height = `${height}px`;
    if (beforeNode) {
      parent.insertBefore(this.element, beforeNode);
    } else {
      parent.appendChild(this.element);
    }
    this.element.style.display = 'block';
  }

  hide() {
    this.element.style.display = 'none';
  }

  remove() {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }

  insertBefore(node) {
    node.parentNode.insertBefore(this.element, node);
  }

  insertAfter(node) {
    if (node.nextSibling) {
      node.parentNode.insertBefore(this.element, node.nextSibling);
    } else {
      node.parentNode.appendChild(this.element);
    }
  }

  appendTo(container) {
    container.appendChild(this.element);
  }

  isVisible() {
    return this.element.style.display !== 'none';
  }
}