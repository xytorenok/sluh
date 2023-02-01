$(document).ready(function () {

  $('.call-to-us-phone-btn').click(function(){
    $('.call-to-us-phone-btn').toggleClass('active');
    $('.pop-up-contact').toggleClass('active');
    $('body').toggleClass('overlay');
  });

$('.pop-up-contact-close').click(function(){
  $('.call-to-us-phone-btn').toggleClass('active');
  $('.pop-up-contact').toggleClass('active');

});

$('.products__wrapper-center-block-left-item').click(function(){
  $('.products__wrapper-center-block-left-item').toggleClass('active');
  $('.products__wrapper-bottom').toggleClass('active');
  $('.products__wrapper-bottom-2').toggleClass('active');

});

$('.products__wrapper-bottom').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow:"<button type='button' class='slick-prev btn'><img src='img/products-prev.svg'></button>",
  nextArrow:"<button type='button' class='slick-next btn'><img src='img/product-next2.png'></button>"
});

$('.products__wrapper-bottom-2').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow:"<button type='button' class='slick-prev btn'><img src='img/products-prev.svg'></button>",
  nextArrow:"<button type='button' class='slick-next btn'><img src='img/product-next2.png'></button>"
});

$('.reviews__wrapper-right').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  // prevArrow:"<button type='button' class='slick-prev btn'><img src='img/products-prev.svg'></button>",
  // nextArrow:"<button type='button' class='slick-next btn'><img src='img/product-next2.png'></button>"
  prevArrow: false,
  nextArrow:false
});


$('.instagram__wrapper').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  prevArrow: false,
  nextArrow:false
  // prevArrow:"<button type='button' class='slick-prev btn'><img src='img/products-prev.svg'></button>",
  // nextArrow:"<button type='button' class='slick-next btn'><img src='img/product-next2.png'></button>"
});

$('.map__wrapper-buttons-block').click(function(event){
  event.preventDefault();
  $('.map__wrapper-buttons-block').removeClass('active');
  $('.map__wrapper-capture-block').removeClass('active');
  $(this).addClass('active');
  $($(this).attr('href')).addClass('active');
})


});