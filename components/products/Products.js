import CATALOG from '../../constants/catalog.js';
import { priceFormat } from '../../utils/utils.js';

class Products {
  render () {
    const html = CATALOG.map(({id, name, img, price}) => {
      return `
        <li class="products__elements">
            <span class="products__name">${name}</span>
            <img src="images/catalog/${img}" alt="${name}" class="products__img">
            <span class="products__price">⚡ ${priceFormat(price)}</span>
            <button class="products__btn">В корзину</button>
        </li>
      `;
    }).join('');

    document.querySelector('#products').insertAdjacentHTML('beforeend', `
        <ul class="products">${html}</ul>
    `);
  }
}

export default new Products();