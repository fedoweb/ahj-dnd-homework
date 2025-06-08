export class Tooltip {
  constructor() {

  }

  showTooltip(message, element) {
    const tooltipElement = document.createElement('div');

    tooltipElement.classList.add('form_error');
    tooltipElement.textContent = message;

    document.body.append(tooltipElement);

    const { left, top } = element.getBoundingClientRect();

    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top - element.offsetHeight - 5 + 'px';
  }

  removeTooltip() {
    const tooltip = document.querySelector('.form_error');
    if(tooltip) tooltip.remove();
  }
}