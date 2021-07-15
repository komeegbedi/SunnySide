const burgerMenu = document.querySelector('.burger-menu');
const menuList = document.querySelector('.menu');
const scroll = document.querySelector('.scroll');

const openMenu = ()=>{

    const burgerBar = document.querySelector('div#nav-icon3');

    burgerMenu.addEventListener('click' , () => {

        burgerBar.classList.toggle('open');
        menuList.classList.toggle('show');
    });
}

const fixedOnScroll = () =>{
    let header = document.querySelector('nav.navbar');
    let sticky = header.offsetTop + 350;

    if(window.pageYOffset > sticky && window.innerWidth > 992){
        header.classList.add('onScroll');
    }
    else{
        header.classList.remove('onScroll');
    }
}

openMenu();

onscroll = () => {
    fixedOnScroll();
}