'use strict';

let productName = document.querySelectorAll('.product-name');
let productPrice = document.querySelectorAll('.product-price');
let buyBtn = document.querySelectorAll('.buy-btn');
let cart = document.querySelector('.cart');
let total = document.querySelector('.total');



//Перебираем все кнопки, что бы назначить им событие клика

buyBtn.forEach(button => {
    button.addEventListener('click', function (event) {
        buyClick(event);
    })
});

let sum = cart.querySelector('summar');

/**
 * Функция назначает обрабочтик событий на кнопки и передаёт данные в корзину
 * @param {MouseEvent} clickedButtonEvent 
 */
function buyClick(clickedButtonEvent) {
    const cartNode = clickedButtonEvent.target.parentNode
    let cartItemName = cartNode.querySelector('.product-name').innerHTML;
    let cartItemPrice = +cartNode.querySelector('#price').innerText;
    let cartTotal = total.querySelector('#total-value');
    cartTotal.innerText = +cartTotal.innerText + cartItemPrice;

    cart.insertAdjacentHTML('beforeend', `
    <div class="product-name">${cartItemName}</div>
    <div class="product-price-cart">${cartItemPrice}</div>
    `)

}