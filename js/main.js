Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

// mobile menu
 const mobileMenu = document.querySelector('.mobile-menu');
 const menuList = document.querySelector('.menu__list');
 const crossButton = document.querySelector('.close'); 

  mobileMenu.addEventListener('click', function(){
    menuList.classList.add('open');
  });
  crossButton.addEventListener('click', function(){
    menuList.classList.remove('open');
  });