const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLogo = document.querySelector('.menu-logo');
const menuNav = document.querySelector('.menu-nav');
const menuItem = document.querySelectorAll('.nav-item');

let showMenu=false;
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu()
{
    if(!showMenu)
    {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuLogo.classList.add('show');
        menuItem.forEach(item => item.classList.add('show'));
        showMenu=true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuLogo.classList.remove('show');
        menuItem.forEach(item => item.classList.remove('show'));
        showMenu=false;
    }
}
