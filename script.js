const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const main = document.getElementById('main');

menuBtn.addEventListener('click',() => {
    menu.classList.toggle('flex'); // Display flex menu
    menu.classList.toggle('hidden'); // Hidden menu 
})


