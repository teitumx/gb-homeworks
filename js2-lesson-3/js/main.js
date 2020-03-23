'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';


// let getRequest = (url) => {
//     return new Promise((resolve, reject) => {

//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//         xhr.onreadystatechange = () => {
//             resolve(xhr.responseText);
//             reject(console.log('Error'));
//         }
//         xhr.send();
//     });

// }

// getRequest();

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getProducts().then(data => {
            this.goods = [...data];
            this.render();
        });
        this.totalCount();
    }

    _getProducts() {
        return fetch(`${API}`).then(result => result.json()).catch(error => {
            console.log('Error!Ошибка!');
        })
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
    totalCount() {
        let totalSum = 0;
        for (let products of this.goods) {
            let sum = products.price;
            totalSum += products.price;
        };

        let basketInfo = document.querySelector('.basket-info');
        basketInfo.insertAdjacentHTML('afterbegin', `Сумма всех товаров: ${totalSum}`);
    }
}

class ProductItem {
    constructor(product, img = 'img/1.jpg') {
        this.product_name = product.product_name;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
       <img src="${this.img}">
        <h3 class="product-name">${this.product_name}</h3>
        <p class="product-price">${this.price}</p>
        <button class="buy-btn">Добавить в корзину</button>
         </div>`
    }
};

new ProductList();

class BasketList {
    // класс списка корзины
}

