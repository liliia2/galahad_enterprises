$(document).ready(function () {

    // let ua = navigator.userAgent.toLowerCase();
    // let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    // let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    // let trigger = false;
    // let triggerForspecificationBtn = false;
    let currentSlideIndex = 0;

    // var fontSize = localStorage.getItem('font-size');
    // if (isAndroid || iOS === true) {
    //     $("body").addClass("mobile")
    // }

    $('.slider .all-slides').slick({
        speed: 600,
        fade: true,
        cssEase: 'linear',
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 10000
    });

    $('.slider .all-slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.all-slides').addClass("slick-before-change");
    });

    $('.slider .all-slides').on('afterChange', function(event, slick, currentSlide, nextSlide){
        currentSlideIndex = currentSlide;
    });

    $(".nav1").on("click", function () {
        $('.slider .all-slides')[0].slick.slickGoTo(0);
    });
    $(".nav2").on("click", function () {
        $('.slider .all-slides')[0].slick.slickGoTo(1);
    });
    $(".nav3").on("click", function () {
        $('.slider .all-slides')[0].slick.slickGoTo(2);
    });
    $(".nav4").on("click", function () {
        $('.slider .all-slides')[0].slick.slickGoTo(3);
    });

});

function openMenu() {
    document.getElementsByClassName('mobile_menu')[0].classList.remove('inactive'); 
}

function closeMenu() {
    document.getElementsByClassName('mobile_menu')[0].classList.add('inactive'); 
}

function openLangMenu() {
    document.getElementsByClassName('drop-block')[0].classList.add('active'); 
}

function closeLangMenu() {
    document.getElementsByClassName('drop-block')[0].classList.remove('active'); 
}

function sendForm() {
    let errorTxt = 'Ошибка отправки';
    // if (validationForForm()) {}
    // else {
    //     //вывести ошибки
    // }

    console.log('это - ', document.forms[0]);
    // document.getElementById("contact-form").submit();
}

function validationForForm() {
    let form = document.forms.sendform;

    // if () {
    //     return true;
    // } else {
    //     return false;
    // }
}



// $(document).ready(function(){
// 	let errorTxt = 'Ошибка отправки';
// 	$("#sendform").validate({
// 		submitHandler: function(form){
// 			var form = document.forms.sendform,
// 				formData = new FormData(form),
// 				xhr = new XMLHttpRequest();

// 			xhr.open("POST", "https://proverstka.com.ua/demo/send-ajax-php/send.php");
			
// 			xhr.onreadystatechange = function() {
// 				if (xhr.readyState == 4) {
// 					if(xhr.status == 200) {
// 						$("#sendform").html('<p class="thank">Данные отправлены!<p>');
// 					}
// 				}
// 			};
//             xhr.send(formData);
//             console.log('formData', formData);
// 		}
// 	});	
// })