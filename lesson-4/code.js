"use strict";

let number = prompt("Введите любое целове число от 0 до 999");
let keys = {};

/**
 *
 * Функция разбивает трёхзначеное число на разряды и возвращает объект с ними
 * @param {num} number Число от 0 до 999, которое необходимо разбить на разряды
 */
function rights(number) {
    if (number >= 0 && number < 999) {
        keys.units = number % 10;
        keys.tens = ((number - keys.units) / 10) % 10;
        keys.hundreds = (number - keys.tens * 10 - keys.units) / 100;
    } else(`Вы ввели не правильное число!`);
}

rights(number);
console.log(keys);