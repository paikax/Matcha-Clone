const swiper = new Swiper('.slider-wrapper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: { 
    0: {
      slidesPerView: 1, 
    },
    600: {
      slidesPerView: 1.3, 
    },
    768: {
      slidesPerView: 2.1, 
    },
    992: {
      slidesPerView: 2.5, 
    },
    1200: {
      slidesPerView: 3.2, 
    },
  }
});


window.addEventListener('scroll', function() {
  const productLogo = document.querySelector('.product-logo');
  const stickyThreshold = productLogo.offsetTop; // Lấy vị trí của product-logo

  if (window.pageYOffset > stickyThreshold) {
      productLogo.classList.add('sticky');
  } else {
      productLogo.classList.remove('sticky');
  }
});



          