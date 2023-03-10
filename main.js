let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
  cart.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');
}

let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () => {
  cart.classList.toggle('active');
  search.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');

}

let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick = () => {
  user.classList.toggle('active');
  search.classList.remove('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');

}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
  navbar.classList.toggle('active');
  user.classList.remove('active');
  search.classList.remove('active');
  cart.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  user.classList.remove('active');
  search.classList.remove('active');
  cart.classList.remove('active');
}


var swiper = new Swiper(".new-arrival", {
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 0,
    },
    368: {
      slidesPerView: 2,
    },
    468: {
      slidesPerView: 2,
    },
    620: {
      slidesPerView: 3,
    },
  },
});

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0)
})

