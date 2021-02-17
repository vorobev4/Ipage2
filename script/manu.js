alert('qwe');
let $menu = $('.header i');
let $nav = $('.header nav');
let open = false;

$(menu).on('click', function() {
    if (!open) {
        $nav.css('display', 'flex');
        open = true;
    } else {
        navigator.css('display', 'none');
        open = false;
    }
});