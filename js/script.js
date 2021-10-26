
const num_1 = document.querySelector("#num_1");
num_1.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "1";
});
const num_2 = document.querySelector("#num_2");
num_2.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "2";
});
const num_3 = document.querySelector("#num_3");
num_3.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "3";
});
const num_4 = document.querySelector("#num_4");
num_4.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "4";
});
const num_5 = document.querySelector("#num_5");
num_5.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "5";
});
const num_6 = document.querySelector("#num_6");
num_6.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "6";
});
const num_7 = document.querySelector("#num_7");
num_7.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "7";
});
const num_8 = document.querySelector("#num_8");
num_8.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "8";
});
const num_9 = document.querySelector("#num_9");
num_9.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "9";
});
const num_0 = document.querySelector("#num_0");
num_0.addEventListener("click", function f() {
    document.getElementById("wn").innerHTML += "0";
});
$('.header_display_menu').hide();
$('.header_display_work').hide();
$('.header_display_password').hide();
$('.header_button1').hide();
$('.headaer_messenjers').hide();
$('.header_bottom_menu').hide();

$('.header_button_pasword').hide();
$('.header_bottom_menu_controller_box').show();

var touchtime = 0;
$(".header_block_top").on("click", function() {
    if (touchtime == 0) {
        // set first click
        touchtime = new Date().getTime();
    } else {
        // compare first click to this click and see if they occurred within double click threshold
        if (((new Date().getTime()) - touchtime) < 800) {
            function myFunctions() {
                $('.header_display_menu').show();
                $('.header_display_work').show();
                $('.header_display_work_time_open').hide();
                $('.header_bottom_menu_controller_box').show();
  
            }
            myFunctions();
            touchtime = 0;
        } else {
            // not a double click so set as a new first click
            touchtime = new Date().getTime();
        }
    }
});

// function myFunctions() {
//     $('.header_display_menu').show();
//     $('.header_display_work').show();
//     $('.header_display_work_time_open').hide();
//     $('.header_bottom_menu_controller_box').show();
  
// }

// 

var touchtime = 0;
$(".password_block_key-2").on("click", function() {
    if (touchtime == 0) {
        // set first click
        touchtime = new Date().getTime();
    } else {
        // compare first click to this click and see if they occurred within double click threshold
        if (((new Date().getTime()) - touchtime) < 800) {
            function myFunction() {
                $('.header_display_menu').show();
                $('.fa-lock').hide();
                $('.header_display_work').show();
                $('.ekran').hide();
                $('.header_button1').show();
                $('.header_button').hide();
                $('.header_bottom_menu').show();
                $('.headaer_messenjers').show();
                $('.header_display_work_time_open').show();
                $('.header_button_pasword').hide();
                $('.header_display_password').css({
                    display: 'none'
                })
                $('.hours, .minutes, .nuqta_box').css({
                    display: 'none'
                })
                $('.header_display').css({
                    background: 'url(https://im.bloha.ru/bh/1s.jpg)no-repeat center center / cover'
                })
                $('.header_display_menu').css({
                    display: 'block'
                })
                $('.header_bottom_menu_controller_box').show();
           
                
            }
            myFunction();
            touchtime = 0;
        } else {
            // not a double click so set as a new first click
            touchtime = new Date().getTime();
        }
    }
});

$('.header_bottom_menu_controller_box').hide();


$(".header_button").click(function () {
    $('.header_display_menu').hide();
    $('.header_display_work').hide();
    $('.header_bottom_menu').hide();
    $('.ekran').show();
    $('.header_button_pasword').show();
    $('.header_button').hide();
    $('.headaer_messenjers').hide();
    $('.header_display_password').css({
        display: 'block'
    })
});


function mybutton() {
    $('.header_display_menu').hide();
    $('.header_display_work').hide();
    $('.headaer_messenjers').hide();
    $('.header_display_password').hide();
    $('.header_display_work').hide();
    $('.header_bottom_menu').hide();
    $('.header_button').show();
    $('.header_button1').hide();
    $('.header_display').css({
        background: 'black'
    })

}

 $(".header_bottom_menu_controller_box").click(function () {
     $('.header_bottom_menu_controller').toggle(500);
 })
 $('.header_bottom_menu_controller').hide();

 
 
//  icons
$('.controller_wf_bt .fa-wifi').click(function () {
 
    $('.controller_wf_bt .fa-wifi').css({
        background : ' blue',
        color : 'white'
    })
})

$('.controller_wf_bt .fa-bluetooth-b').click(function () {
    $('.controller_wf_bt .fa-bluetooth-b').css({
        background : ' blue',
        color : 'white'
    })
})
$('.controller_wf_bt .fa-broadcast-tower').click(function () {
    $('.controller_wf_bt .fa-broadcast-tower').css({
        background : ' green'
    })
})
$('.controller_wf_bt .fa-plane').click(function () {
    $('.controller_wf_bt .fa-plane').css({
        background : ' orange'
    })
})


var touchtime = 0;
$(".header_button1").on("click", function() {
    if (touchtime == 0) {
        // set first click
        touchtime = new Date().getTime();
    } else {
        // compare first click to this click and see if they occurred within double click threshold
        if (((new Date().getTime()) - touchtime) < 800) {
            function mybutton() {
                $('.header_display_menu').hide();
                $('.header_display_work').hide();
                $('.headaer_messenjers').hide();
                $('.header_display_password').hide();
                $('.header_display_work').hide();
                $('.header_bottom_menu').hide();
                $('.header_button').show();
                $('.header_button1').hide();
                $('.header_display').css({
                    background: 'black'
                })
                window.location.reload();
            }
            mybutton();
            touchtime = 0;
        } else {
            // not a double click so set as a new first click
            touchtime = new Date().getTime();
        }
    }
});





// var touchtime = 0;
// $(".header_button_pasword").on("click", function() {
//     if (touchtime == 0) {
//         // set first click
//         touchtime = new Date().getTime();
//     } else {
//         // compare first click to this click and see if they occurred within double click threshold
//         if (((new Date().getTime()) - touchtime) < 800) {
//             // double click occurred
//             alert("double clicked");
//             touchtime = 0;
//         } else {
//             // not a double click so set as a new first click
//             touchtime = new Date().getTime();
//         }
//     }
// });

//time
const Hours = document.querySelector(".hours");
const Minut = document.querySelector(".minutes");
const Hours1 = document.querySelector(".hours1");
const Minut1 = document.querySelector(".minutes1");

function clock() {
    let time = new Date();
    Hours.innerHTML = time.getHours();
    Minut.innerHTML = time.getMinutes();
    Hours1.innerHTML = time.getHours();
    Minut1.innerHTML = time.getMinutes();

    setTimeout(() => clock(), 1000);
}
clock();
