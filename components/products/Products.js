import CATALOG from '../../constants/catalog.js';
import { priceFormat, getProducts, putProducts } from '../../utils/utils.js';

const $products = document.querySelector('#products');

class Products {
  #classNameActive = 'products__btn_active';
  #textActiveBtn = 'Убрать из корзины';
  #textNoActiveBtn = 'В корзину';

  constructor () {
    this.#render();
    this.#addToCart();
  }

  #render () {
    $products.textContent = '';

    const productsStore = getProducts('products');

    const html = CATALOG.map(({id, name, img, price}) => {
      let classActive = '';
      let activeText = '';

      if (productsStore.includes(id)) {
        classActive = ' ' + this.#classNameActive;
        activeText = this.#textActiveBtn;
      }
      else {
        activeText = this.#textNoActiveBtn;
      }

      return `
        <li class="products__elements">
            <span class="products__name">${name}</span>
            <img src="images/catalog/${img}" alt="${name}" class="products__img">
            <span class="products__price">⚡ ${priceFormat(price)}</span>
            <button
            class="products__btn${classActive}"
            data-btn="button"
            data-id="${id}"
            >
                ${activeText}
            </button>
        </li>
      `;
    }).join('');

    document.querySelector('#products').insertAdjacentHTML('beforeend', `
        <ul class="products">${html}</ul>
    `);
  }

  #addToCart () {
    $products.addEventListener('click', evt => {
      const btn = evt.target;

      if (btn.dataset.btn) {
        const id = btn.dataset.id;
        const data = putProducts('products', id);

        if (data.activeClass) {
          btn.classList.add(this.#classNameActive);
          btn.textContent = this.#textActiveBtn;
        }
        else {
          btn.classList.remove(this.#classNameActive);
          btn.textContent = this.#textNoActiveBtn;
        }
      }
    });
  }
}

export default new Products();