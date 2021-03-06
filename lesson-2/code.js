"use sctrict";

// Задание #1
// Объясните почему код даёт именно такие результаты? Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в браузере со включенными точками остановки.

//пример 1
let a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); // ответ: 2, т.к. префиксная форма записи инкремента увеличила значение переменной а на единицу и вернуло новое значение 2.

//пример 2
d = b++;
alert(d); //ответ: 1, т.к. постфиксная форма записи увеличивает перменную b на единицу, но возвращает старое значение.

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5, т.к. в примере 1 мы увлеличивали значение перменной а на единицу и значение переменной а стала равна 2. теперь увеличили еще на единицу и т.к. мы использовали префиксную форму, то резултат вернулся сразу и переменная а стала равна 3, затем сложили 2 и 3 и получили 5.

//пример 4
d = 2 + b++;
alert(d); //ответ: 4, т.к. после примера 2 значение переменной b стало равно 2 и использовав в данном примере постфиксную форму записи возвращается зачение переменной 2 и при сложении 2 и 2 будет равно 4.
alert(a); //3 после примера 3 значение переменной а было увеличено до 3.
alert(b); //3, т.к. изначально значение пеменной b было 1, после примера 2 оно стало 2, а после примера 4 увеличилось еще на единицу и стало 3.


// Задание #2
// Чему будут равны переменные x и a в примере ниже? Написать почему так произошло (описать последовательность действий).

let a = 2;
let x = 1 + (a *= 2);

// переменная а = 4, переменная x = 5, т.к. запись вида a *= 2 - это сокращенная арифметика с присвоением, значение переменной не только умножается на 2, но и результат этого умножения сразу сохраняется в ней.


// Задание #3
// Объявить две переменные a и b и задать им целочисленные произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу: 
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;

let a = 8;
let b = 3;

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else if (Math.sign(a) == 1 && Math.sign(b) == -1 || Math.sign(b) == 1 && Math.sign(a) == -1) {
    console.log(a + b);
};


// Задание #4
// Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат. Обязательно использовать оператор return.

// /**
//  * Функция возвращает сумму двух чисел
//  * @param {num} a первый парметр 
//  * @param {num} b второй параметр
//  * @returns {num} сумма двух праметров
//  */
function sum(a, b) {
    return a + b
};

/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
function minus(a, b) {
    return a - b
};

// /**
//  * Функция возвращает произведение двух чисел
//  * @param {num} a первый параметр
//  * @param {num} b второй параметр
//  * @returns {num} произведение двух параметров
//  */
function multiplication(a, b) {
    return a * b
};

// /**
//  * Функция возвращает результат деления двух чисел
//  * @param {num} a первый параметр
//  * @param {num} b второй параметр
//  * @returns {num} результат деления двух параметров
//  */
function division(a, b) {
    return a / b
};


// Задание #5
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции (использовать switch) выполнить одну из арифметических операций (использовать функции из задания 4) и вернуть полученное значение.

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case sum:
            return sum(arg1, arg2);
            break;
        case minus:
            return minus(arg1, arg2);
            break;
        case multiplication:
            return multiplication(arg1, arg2);
            break;
        case division:
            return division(arg1, arg2);
            break;
    }
};

// Проверка:
let numberOne = +prompt("Введите любое целое число");
let numberTwo = +prompt("Введите еще одно любое целое число");

let result = mathOperation(numberOne, numberTwo, minus);
console.log(result);

// Задание #6

let moneys = +prompt("Сколько рублей Вы хотите положить на счёт?");
let str = String(moneys);
let last = str.charAt(str.length - 1);

switch (last) {
    case "1":
        alert(`Ваша сумма в ${moneys} рубль успешно зачислена!`);
        break;
    case "2":
    case "3":
    case "4":
        alert(`Ваша сумма в ${moneys} рубля успешно зачислена!`);
        break;
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
        alert(`Ваша сумма в ${moneys} рублей успешно зачислена!`);
        break;
    default:
        alert(`Вы ввели не корректуную сумму.`);
        break;
}