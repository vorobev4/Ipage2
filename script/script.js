//меню
let $menu = $('.header i');
let $menu_btn = ('.header a');
let $nav = $('.header nav');
let open = false;

$($menu).on('click', function() {
    if (!open) {
        $nav.css('display', 'flex');
        
        open = true;
    } else {
        $nav.css('display', 'none');
        open = false;
    }
});
$($menu_btn).on('click', function() {
    if ($('.header span').css('display') == 'block') {
        $nav.css('display', 'none');
        open = false;
    }
});

$(window).resize(function () {
    if (($('.header span').css('display') == 'none') & ($('.header nav').css('display') == 'none')) {
        if ($(window).width() > 700) {
            $('.header nav').css('display', 'flex');
        }
    }
})

//первый прогресс бар
const circle = document.querySelector('.progress-ring_circle.first');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;
function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}
setProgress(90);
//второй прогресс бар
const circle2 = document.querySelector('.progress-ring_circle.second');
const radius2 = circle2.r.baseVal.value;
const circumference2 = 2 * Math.PI * radius2;
circle2.style.strokeDasharray = `${circumference2} ${circumference2}`;
circle2.style.strokeDashoffset = circumference2;
function setProgress2(percent2) {
    const offset2 = circumference2 - percent2 / 100 * circumference2;
    circle2.style.strokeDashoffset = offset2;
}
setProgress2(75);
//третий прогресс бар
const circle3 = document.querySelector('.progress-ring_circle.third');
const radius3 = circle3.r.baseVal.value;
const circumference3 = 2 * Math.PI * radius3;
circle3.style.strokeDasharray = `${circumference3} ${circumference3}`;
circle3.style.strokeDashoffset = circumference3;
function setProgress3(percent3) {
    const offset3 = circumference3 - percent3 / 100 * circumference3;
    circle3.style.strokeDashoffset = offset3;
}
setProgress3(70);
//четвертый прогресс бар
const circle4 = document.querySelector('.progress-ring_circle.fourth');
const radius4 = circle4.r.baseVal.value;
const circumference4 = 2 * Math.PI * radius4;
circle4.style.strokeDasharray = `${circumference4} ${circumference4}`;
circle4.style.strokeDashoffset = circumference4;
function setProgress4(percent4) {
    const offset4 = circumference4 - percent4 / 100 * circumference4;
    circle4.style.strokeDashoffset = offset4;
}
setProgress4(85);

// портфолио

let all_btn = $('#all');
let web_btn = $('#web');
let apps_btn = $('#apps');
let icons_btn = $('#icons');

let btn_on = false;

$(all_btn).on('click', function() {
    $('.photo_blocks .photo').css('display', 'none');
    $('.photo_blocks .photo').fadeIn(300);
    $('.photo_blocks .photo').css('display', 'block');
});
$(web_btn).on('click', function() {
    $('.photo_blocks .photo').css('display', 'none');
    $('#photo_web').fadeIn(300);
    $('#photo_web').css('display', 'block');
});
$(apps_btn).on('click', function() {
    $('.photo_blocks .photo').css('display', 'none');
    $('#photo_apps_first').fadeIn(300);
    $('#photo_apps_second').fadeIn(300);
    $('#photo_apps_first').css('display', 'block');
    $('#photo_apps_second').css('display', 'block');
});
$(icons_btn).on('click', function() {
    $('.photo_blocks .photo').css('display', 'none');
    $('#photo_icons').fadeIn(300);
    $('#photo_icons').css('display', 'block');
});
// $($menu_btn).on('click', function() {
//     $nav.css('display', 'none');
//     open = false;
// });