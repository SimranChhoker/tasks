





var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
  });
  
  window.addEventListener("scroll", function(){
     const header= document.querySelector("header");
     header.classList.toggle("sticky", window.scrollY > 0)
  });

  const menuBtn = document.querySelector(".nav-menu-btn");
  
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");


  menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
  });


  const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose= document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
} );

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
} );

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
} );

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
} );

