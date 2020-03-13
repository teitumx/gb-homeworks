'use strict';

const products = [{
        id: 1,
        title: 'Notebook',
        price: 20000
    },
    {
        id: 2,
        title: 'Mouse',
        price: 1000
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 3000
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 2000
    }
];

const renderProduct = (title, price, img = 'img/1.jpg') => {
    return `<div class="product-item">
    <img src="${img}">
    <h3 class="product-name">${title}</h3>
    <p class="product-price">${price}</p>
    <button class="buy-btn">Добавить в корзину</button>
    </div>`
};

const renderProducts = list => {
    const productList = list.map(item =>
        renderProduct(item.title, item.price)
    );
    document.querySelector('.products').innerHTML = productList.join('');
};

renderProducts(products);