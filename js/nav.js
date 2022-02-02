// let iconMenu = document.getElementById('iconMenu');
let burgerIcon = document.getElementById('burgerIcon');
let showIconMenu = false;

function hideMenu(){
    $('.nav-items').toggleClass('show').toggleClass('hide');
    $('nav').toggleClass('bgNavShow').toggleClass('bgNavHide');
    if (showIconMenu) {
        burgerIcon.innerHTML='<i class="fas fa-bars"></i>';
        showIconMenu = false;
    }
    else {
        burgerIcon.innerHTML='<i class="fas fa-times"></i>';
        showIconMenu = true;
    };
};

$(document).ready(function(){
    $('.showMenu').click(function(){
      hideMenu();
    });
});