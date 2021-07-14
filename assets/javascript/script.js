
  // Desktop SubMenu-header Open/Close
  document.getElementById('menu-close').onclick = function(){
    document.getElementsByClassName('products')[0].classList.toggle("close");
    setTimeout(function(){ 
      document.getElementsByClassName('products')[0].classList.toggle("close");
    }, 500);
  }

  // Open/Close
    document.getElementById('responsive-menu').onclick = function(){
    document.body.classList.toggle("menu_open");
  }
  // Show submenus
  const menuItems = Array.prototype.slice.apply(
    document.querySelectorAll(".menu-item")
  );
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      menuItem.classList.toggle("mobile_submenu_open");
    });
  });
