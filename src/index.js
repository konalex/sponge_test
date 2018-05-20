function checkElementOnVisibility(element) {
    let elem_top_distance = element.getBoundingClientRect();
    if((window.outerHeight * 75) / 100 < elem_top_distance.top) {
        element.style.opacity = '0';
        element.style.top = '55px';
    }
    else {
        element.style.opacity = '1';
        element.style.top = '0';
    }
}
/*
*
* */
function mobileMenu(menu, button) {
    if(menu.classList.contains('active')) {
        menu.classList.remove('active');
        button.classList.remove('active');
    }
    else {
        menu.classList.add('active');
        button.classList.add('active');
    }
}
/*
* При скролле ставить бэкграунд для хедера
* */
function bgMobileMenu(menu) {
    if(window.pageYOffset > 0) {
        menu.style.backgroundColor = 'rgba(255,255,255,0.9)';
    }
    else {
        menu.style.backgroundColor = 'transparent';
    }
}
/*
*
* */
document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
        // check services
        for(let iterator = 0; iterator < document.body.getElementsByClassName('main-services__wrapper-item').length; iterator++) {
            checkElementOnVisibility(document.body.getElementsByClassName('main-services__wrapper-item')[iterator]);
        }
        // check offers title
        checkElementOnVisibility(document.querySelector('.main-offers__title'));
        // check offers
        for(let iterator = 0; iterator < document.body.getElementsByClassName('main-offers__wrapper_item').length; iterator++) {
            checkElementOnVisibility(document.body.getElementsByClassName('main-offers__wrapper_item')[iterator]);
        }
        bgMobileMenu(document.querySelector('.header__wrapper'));
    }
    /*
    *
    * */
    document.getElementById('mobile_menu_button').onclick = function () {
        mobileMenu(document.querySelector('.header__wrapper-menu'), this);
    }
});