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

const getImages = async () => {
    const API_KEY = '6W37YsXGmsBvGwCjnwwUW2lMcylWHmBWM0H1MqPDuUs';

    const basURL = 'https://api.unsplash.com/search/photos/';
    const query = `?client_id=${API_KEY}&query=furniture&orientation=landscape&ar=4:3&fit=crop?per_page=10`;

    const response = await fetch(basURL + query);

    if (response.status !== 200) {
        throw new Error('there was an error getting the information');
    }

   const data = await response.json();

   console.log(data);

   return data;
}


const updateUI =  (data) => {

    const {total, total_pages, results} = data;

    const hero = document.querySelector('section.hero');
    const gridImg = document.querySelectorAll('.img-features div.grid-img img');
    const moreImg = document.querySelectorAll('.more-img img');

    hero.style.backgroundImage = `url(${results[0].urls.regular})`;

    for(let index = 0; index < gridImg.length; index++){
        gridImg[index].src = results[index + 1].urls.regular;
    }

    for (let index = 0; index < moreImg.length; index++) {
        moreImg[index].src = results[gridImg.length + index].urls.regular;
    }
}

openMenu();

getImages()
    .then(data => updateUI(data))
    .catch(err => console.log(err.message));

onscroll = () => {
    fixedOnScroll();
}

