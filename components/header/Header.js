import { getProducts } from '../../utils/utils.js';

class Header {
  #$header = document.querySelector('#header');
  #countCartProducts = getProducts('products').length;

  constructor () {
    this.render(this.#countCartProducts);
  }

  render (count) {
    this.#$header.textContent = '';

    const html = `
      <div class="header">
        <div class="header__wrapper">
            <div class="header__counter">🔥 ${count}</div>
        </div>
      </div>
    `;

    this.#$header.insertAdjacentHTML('beforeend', html);
  }
}

export default new Header();