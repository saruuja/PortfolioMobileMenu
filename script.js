const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');
const menu = document.getElementById('menu');

menuBtn.onclick = function () {
  if (sideNav.style.top === '-250px') {
    sideNav.style.top = '90px';
    menu.src = 'img/close.png';
  } else {
    sideNav.style.top = '-250px';
    menu.src = 'img/menu.png';
  }
};