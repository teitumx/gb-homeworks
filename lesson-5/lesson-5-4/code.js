'use strict';

let productName = "Товар #";
let productImg = "https://b.radikal.ru/b19/2002/2c/335b3bd07c24.jpg";

let products = document.querySelector('.products')
let productCard = `
    <div class="product">
        ${productName}
        <img src="${productImg}" alt="${productName}">
        <button id="button">Подробнее</button>
    </div>
`
/**
 * Функция создаёт карточку товара
 * @param {number} productCount Количество создаваемых карточек товаров 
 */
function productList(productCount) {
    for (let i = 1; i <= productCount; i++) {
        let productCard = `
        <div class="product">
        ${productName}${i}<br>
        <div class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, cumque.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, cumque.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, cumque.<br></div>
        <button class="btn-close">Закрыть</button>
        <div class="image"><img src="${productImg}" alt="${productName}"></div>
        <button class="button-more">Подробнее</button><br>
         </div>
`
        products.insertAdjacentHTML("afterbegin", productCard);
    }
}

productList(4);

let btn = document.querySelectorAll('.button-more');
let btnClose = document.querySelectorAll('.btn-close');

btn.forEach(function (element) {
    element.addEventListener('click', function (event) {
        changeText(event);
    })
})


/**
 * Функция скрывает изображение товара и кнопку "Подробнее" и показывает текст и кнопку "Закрыть"
 * @param {event} clickButton  Событие при нажатии на кнопку "Подробнее"
 */
function changeText(clickButton) {
    let cardNode = clickButton.target.parentNode;
    let img = cardNode.querySelector('.image');
    img.style.display = "none";
    let desc = cardNode.querySelector('.desc');
    desc.style.display = "block";
    let btnMore = cardNode.querySelector('.button-more');
    btnMore.style.display = "none"
    let btnClosed = cardNode.querySelector('.btn-close');
    btnClosed.style.display = "block"

};

btnClose.forEach((item) => {
    item.addEventListener('click', function (event) {
        backImage(event);
    })
})

/**
 * Функция скрывает текст и кнопку закрыть и возвращает картинку товара и кнопку 
 * @param {event} clickCloseBtn 
 */
function backImage(clickCloseBtn) {
    let backNode = clickCloseBtn.target.parentNode;
    let img = backNode.querySelector('.image');
    img.style.display = 'block';
    let desc = backNode.querySelector('.desc');
    desc.style.display = "none";
    let btnMore = backNode.querySelector('.button-more');
    btnMore.style.display = "block"
    let btnClosed = backNode.querySelector('.btn-close');
    btnClosed.style.display = "none"
};