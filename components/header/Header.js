import { getProducts } from '../../utils/utils.js';
import Shopping from '../shopping/Shopping.js';

class Header {
  #$header = document.querySelector('#header');
  #countCartProducts = getProducts('products').length;

  constructor () {
    this.render(this.#countCartProducts);
    this.#handlerOpenCart();
  }

  render (count) {
    this.#$header.textContent = '';

    const html = `
      <div class="header">
        <div class="header__wrapper">
            <div class="header__counter" data-cart="cart">🔥 ${count}</div>
        </div>
      </div>
    `;

    this.#$header.insertAdjacentHTML('beforeend', html);
  }

  #handlerOpenCart () {
    this.#$header.addEventListener('click', async evt => {
      const cart = evt.target.dataset.cart;

      if (cart) {
        await Shopping.render();
      }
    });
  }
}

export default new Header();