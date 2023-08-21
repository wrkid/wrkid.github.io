import '../styles/style.css'

// function importAll(r) {
//     return r.keys().map(r);
//   }
  
// const images = importAll(require.context('../img', false,/\.(png|svg|jpg|jpeg|gif)$/));

//Extra text Readmore
var Items_text = document.querySelector('.readmore_title3');
let ExpandButton_text = document.querySelector('.readmore__button');
var btnContent_text = document.querySelector('.readmore__button > span');
ExpandButton_text.onclick = function() {
    ExpandButton_text.classList.toggle('button1');
    btnContent_text.innerHTML =
      (btnContent_text.innerHTML === 'Читать далее') ? 
      (btnContent_text.innerHTML = 'Скрыть') 
      : btnContent_text.innerHTML = 'Читать далее';
    //var Items = document.querySelectorAll('.brand_select');
    Items_text.classList.toggle('readmore_title3');
    Items_text.classList.toggle('readmore_title3_1'); 
};


//Extra Items Brands
var Items = document.querySelectorAll('.brand_select');
let ExpandButton = document.querySelector('.services-menu__desktop__button');
ExpandButton.onclick = function() {
    var btnContent = document.querySelector('.services-menu__desktop__button > span');
    ExpandButton.classList.toggle('button1');
    btnContent.innerHTML =
      (btnContent.innerHTML === 'Показать все') ? 
      (btnContent.innerHTML = 'Скрыть') 
      : btnContent.innerHTML = 'Показать все';
    //var Items = document.querySelectorAll('.brand_select');
    Items.forEach(x => x.classList.toggle('brand_select'));
    Items.forEach(x => x.classList.toggle('brand_select1'));  
};

//Extra Items Repair scrollbar
var Items1 = document.querySelectorAll('.repair-menu__slide');
let ExpandButton1 = document.querySelector('.repair-menu__desktop__button');
ExpandButton1.onclick = function() {
   var  btnContent1 = document.querySelector('.repair-menu__desktop__button > span');
    ExpandButton1.classList.toggle('button1');
    btnContent1.innerHTML =
      (btnContent1.innerHTML === 'Показать все') ? 
      (btnContent1.innerHTML = 'Скрыть') 
      : btnContent1.innerHTML = 'Показать все';
    //var Items = document.querySelectorAll('.brand_select');
    Items1.forEach(x => x.classList.toggle('repair-menu__slide'));
    Items1.forEach(x => x.classList.toggle('repair-menu__slide1'));  
};

var Items_menu = document.querySelector('.mobile_menu');
var Items_body = document.querySelector('.mobile_body');
let ExpandButton_mob = document.querySelector('.mob_menu');
//Mobile Menu Burger menu opening function
ExpandButton_mob.onclick = function() {
    Items_menu.classList.toggle('mobile_menu');
    Items_menu.classList.toggle('mobile_menu1');
    Items_body.classList.toggle('mobile_body');  
    Items_body.classList.toggle('mobile_body__hidden'); 
        
        //Mobile Feedback modul opener
        var Feedback_modul_mobile = document.querySelector('.modul-feedback');
        let Button_Feedback_mobile_opener = document.querySelector('.modul-feedback__button');
        Button_Feedback_mobile_opener.onclick = function() {
            Feedback_modul_mobile.classList.toggle('modul-feedback');  
            Feedback_modul_mobile.classList.toggle('modul-feedback__opened');
            Items_menu.classList.toggle('mobile_menu');
            Items_menu.classList.toggle('mobile_menu1');
            //Feedback modul closer
            let Button_Feedback_mobile_closer = document.querySelector('.modul-feedback__close-button');
            Button_Feedback_mobile_closer.onclick = function () {
                Items_menu.classList.toggle('mobile_menu');
                Items_menu.classList.toggle('mobile_menu1');
                Feedback_modul_mobile.classList.toggle('modul-feedback');  
                Feedback_modul_mobile.classList.toggle('modul-feedback__opened');
            }};

        //Mobile Call Order modul opener
        var Call_modul_mobile = document.querySelector('.modul-call');
        let Button_Call_mobile_opener = document.querySelector('.modul-call__button');
        Button_Call_mobile_opener.onclick = function () {
            Call_modul_mobile.classList.toggle('modul-call');
            Call_modul_mobile.classList.toggle('modul-call__opened');
            let Button_Call_mobile_closer = document.querySelector('.modul-call__close-button');
            Button_Call_mobile_closer.onclick = function () {
                Call_modul_mobile.classList.toggle('modul-call');  
                Call_modul_mobile.classList.toggle('modul-call__opened');
            }};
};


var Items_menu = document.querySelector('.mobile_menu');
var Items_body = document.querySelector('.mobile_body');
let ExpandButton_d1 = document.querySelector('.d1_menu');
//Desktop burger menu opening function
ExpandButton_d1.onclick = function() {
    Items_menu.classList.toggle('mobile_menu');
    Items_menu.classList.toggle('mobile_menu1');
    Items_body.classList.toggle('mobile_body');  
    Items_body.classList.toggle('mobile_body__hidden'); 
    //Desktop Feedback modul opener
    var Feedback_opener_button = document.querySelector('.modul-feedback__button');
    var Feedback_modul_desktop = document.querySelector('.modul-feedback');
    //Items_menu - mobile menu class
    //Items_body - main body
    Feedback_opener_button.onclick = function () {
        Items_menu.classList.toggle('mobile_menu1');
        Items_menu.classList.toggle('mobile_menu');
        Feedback_modul_desktop.classList.toggle('modul-feedback');
        Feedback_modul_desktop.classList.toggle('modul-feedback__opened');
        let Button_Feedback_desktop_closer = document.querySelector('.modul-feedback__close-button');
            Button_Feedback_desktop_closer.onclick = function () {
                Feedback_modul_desktop.classList.toggle('modul-feedback');  
                Feedback_modul_desktop.classList.toggle('modul-feedback__opened');
                Items_menu.classList.toggle('mobile_menu1');
                Items_menu.classList.toggle('mobile_menu');
            }
    };
    
    //Desktop Call modul opener
    var Call_opener_button = document.querySelector('.modul-call__button');
    var Call_modul_desktop = document.querySelector('.modul-call');
    //Items_menu - mobile menu class
    //Items_body - main body
    Call_opener_button.onclick = function () {
        Items_menu.classList.toggle('mobile_menu1');
        Items_menu.classList.toggle('mobile_menu');
        Call_modul_desktop.classList.toggle('modul-call');
        Call_modul_desktop.classList.toggle('modul-call__opened');
        var Button_Call_desktop_closer = document.querySelector('.modul-call__close-button');
            Button_Call_desktop_closer.onclick = function () {
                Call_modul_desktop.classList.toggle('modul-call');  
                Call_modul_desktop.classList.toggle('modul-call__opened');
                Items_menu.classList.toggle('mobile_menu1');
                Items_menu.classList.toggle('mobile_menu');
            }
    };
    

};


var Items_menu = document.querySelector('.mobile_menu');
var Items_body = document.querySelector('.mobile_body');
let ExpandButton_mob_menu = document.querySelector('.mobile_menu-header-close_button');
//Desktop and Mobile burger menu closing function
ExpandButton_mob_menu.onclick = function() {
    Items_menu.classList.toggle('mobile_menu');
    Items_menu.classList.toggle('mobile_menu1');
    Items_body.classList.toggle('mobile_body');  
    Items_body.classList.toggle('mobile_body__hidden');
};

//Desktop1440 feedback opener
var Button_opener_feedback_1440 = document.querySelector('.modul-feedback__button_1440');
Button_opener_feedback_1440.onclick = function () {
    let Feedback_modul_1440 = document.querySelector('.modul-feedback');
    console.log(Feedback_modul_1440);
    Feedback_modul_1440.classList.toggle('modul-feedback');
    Feedback_modul_1440.classList.toggle('modul-feedback__opened');

    let Button_closer_feedback_1440 = document.querySelector('.modul-feedback__close-button');
    Button_closer_feedback_1440.onclick = function () {
        Feedback_modul_1440.classList.toggle('modul-feedback');
        Feedback_modul_1440.classList.toggle('modul-feedback__opened');
    }
};


//Desktop1440 call opener
var Button_opener_call_1440 = document.querySelector('.modul-call__button_1440');
Button_opener_call_1440.onclick = function () {
    let Call_modul_1440 = document.querySelector('.modul-call');
    Call_modul_1440.classList.toggle('modul-call');
    Call_modul_1440.classList.toggle('modul-call__opened');

    let Button_closer_call_1440 = document.querySelector('.modul-call__close-button');
    Button_closer_call_1440.onclick = function () {
        Call_modul_1440.classList.toggle('modul-call');
        Call_modul_1440.classList.toggle('modul-call__opened');
    }
};





var swiper = new Swiper(".swiper", {
    speed: 1000,
    loop: true,
    updateOnWindowResize: true,
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10
        },
        360: {
            slidesPerView: 1.47,
            spaceBetween: 20
        },
        390: {
            slidesPerView: 1.65,
            spaceBetween: 20
        },
        767.8: {
            enabled: false
        }
    }
});