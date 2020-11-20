import { CATALOG, priceFormat, getProducts } from '../../utils/utils.js';

class Shopping {
  #$cart = document.querySelector('#shopping');

  async render () {
    const productsStore = getProducts('products');
    this.#$cart.textContent = '';

    let allSum = 0;

    try {
      await CATALOG(data => {
        const html = data.map(({id, name, price}) => {
          if (productsStore.includes(id)) {
            allSum += +price;

            return `
          <tr>
            <td class="cart__name">⚡ ${name}</td>
            <td class="cart__price">${priceFormat(price)}</td>
          </tr>
        `;
          }
        }).join('');

        this.#$cart.insertAdjacentHTML('beforeend', `
      <div class="cart">
        <div class="cart__close" data-close="close" title="Закрыть">&#10005;</div>
        <table>
            ${html}
            <tr>
                <td class="cart__name">👌 Итого:</td>
                <td class="cart__price">${priceFormat(allSum)}</td>
            </tr>
        </table>
      </div>
    `);
      });
    }
    catch (error) {
      console.error(error);
    }
  }

  closeCart () {
    this.#$cart.addEventListener('click', evt => {
      const close = evt.target.dataset.close;

      if (close) {
        this.#$cart.textContent = '';
      }
    });
  }
}

export default new Shopping();