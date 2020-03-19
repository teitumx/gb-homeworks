'use strict';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this.render();
        this.basketCount();
    }

    //метод поулчения товаров
    _fetchProducts() {
        this.goods = [{
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
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }

    //  Метод, определяющий суммарную стоимость всех товаров.
    basketCount() {
        let sum = 0;
        for (let products of this.goods) {
            sum += products.price;
        };

        let basketInfo = document.querySelector('.basket-info');
        basketInfo.insertAdjacentHTML('afterbegin', `Сумма всех товаров: ${sum}`);
    }
}

class ProductItem {
    constructor(product, img = 'img/1.jpg') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
       <img src="${this.img}">
        <h3 class="product-name">${this.title}</h3>
        <p class="product-price">${this.price}</p>
        <button class="buy-btn">Добавить в корзину</button>
         </div>`
    }
};

new ProductList();

class Basket {
    // класс корзины
}

class BasketItem {
    //класс элемента корзины
}