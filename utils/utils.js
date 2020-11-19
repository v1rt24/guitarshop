export const priceFormat = price => {
  return new Intl.NumberFormat('ru-RU', {
    currency: 'rub',
    style: 'currency',
  }).format(price);
};

export const getProducts = key => {
  if (!key) {
    return false;
  }

  return JSON.parse(localStorage.getItem(key)) || [];
};

export const putProducts = (key, id) => {
  if (key && id) {
    const products = getProducts(key);
    let activeClass = null;

    if (!products.includes(id)) {
      products.push(id);
      activeClass = true;
    }
    else {
      products.splice(products.indexOf(id), 1);
      activeClass = false;
    }

    localStorage.setItem(key, JSON.stringify(products));

    return {
      activeClass,
      products,
    };
  }
  else {
    return false;
  }
};