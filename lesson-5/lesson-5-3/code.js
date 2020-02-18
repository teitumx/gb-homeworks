'use sctrict';
let modal = document.querySelector('.modal');
let btn = document.getElementById('btn');
let closeBtn = document.querySelector('.close-button');



btn.addEventListener('click', function () {
    modal.style.display = "flex";
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
})