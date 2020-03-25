let text = document.querySelector('.text').innerHTML;

let regexp = new RegExp('\'', 'gs');

let newText = text.replace(regexp, '\"');
console.log(newText);

let reg = /\b\"\b/gi;
let quotedText = newText.replace(reg, '\'');
console.log(quotedText);