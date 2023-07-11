import img1 from '../images/close.svg'; 
import img2 from '../images/menu.svg';

const menu = document.querySelector('#menu');
const iconMenu = document.querySelector('#menu img');
const nav = document.querySelector('#nav-menu');
const ul = document.querySelector('#nav-menu ul');
const links = document.querySelectorAll('.menu-link');	

window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    nav.classList.contains('menu-mobile') ? nav.classList.remove('menu-mobile') : '';
    !ul.classList.contains('mdMax:hidden') ? ul.classList.add('mdMax:hidden') : '';
    !iconMenu.src.includes('menu.svg') ? iconMenu.src = `${img2}` : '';
  } 
});

menu.addEventListener('click', () => {
  nav.classList.toggle('menu-mobile');
  ul.classList.toggle('mdMax:hidden');
  iconMenu.src = nav.classList.contains('menu-mobile') ? `${img1}` : `${img2}`;
});

links.forEach(link => { 
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if(!e.target.classList.contains('border-b-2')){
      e.target.classList.add('border-b-2', 'border-white');
      //remove border from other links
      links.forEach(l => {
        if(l !== e.target){
          l.classList.remove('border-b-2', 'border-white');
        }
      }
      );
    }
  });
});

