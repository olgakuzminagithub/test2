$(".search-button").click(function(e) {
    e.preventDefault();
    $(this).children(".fas").toggleClass('fa-search');
    $(this).children(".fas").toggleClass('fa-times');
    $(".form-inline").toggleClass('form-inline-active');
});


$(".mobile-search-button").click(function(e) {
    e.preventDefault();
    $(this).children(".fas").toggleClass('fa-search');
    $(this).children(".fas").toggleClass('fa-times');
    $(".form-inline").toggleClass('form-inline-active');
});

//Slick

$('.carousel').slick({
    infinite: true,
    dots: true,
});


//Scroll

// (function($){
//     $(window).on("load",function(){
//         $(".content").mCustomScrollbar();
//     });
// })(jQuery);

$(".content").mCustomScrollbar({
    axis: "x", // horizontal scrollbar
    scrollButtons:{enable:true},
    theme:"rounded-dark",
});

$('#clock').countdown('2020/10/10', function(event) {
    var $this = $(this).html(event.strftime(''
        + '<li><span>%d</span><p>дн.</p></li>'
        + '<li><span>%H</span><p>час.</p></li> '
        + '<li><span>%M</span><p>мин.</p></li> '
        + '<li><span>%S</span><p>cек.</p></li>'));
});
