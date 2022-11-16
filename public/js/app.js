// !NAV BAR SCROLL GRADIENT
const navB = document.getElementById('nav');
navB.style.color = 'red';
// navB.style.height = '200px';
let scrolled = false;
setTimeout(() => {
  $(function () {
    $(document).scroll(function () {
      var $nav = $('#mainNavBar');
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      // $nav.toggleClass('fixed-top', $(this).scrollTop() > $nav.height());
    });
  });

  $('.navbar-collapse').on('shown.bs.collapse', function () {
    $('.navbar-collapse .collapse.show').parent().addClass('mt-3 mb-3');
  });
  $('.navbar-collapse').on('hidden.bs.collapse', function () {
    $('.navbar-collapse  >.collapse.m-0').removeClass('mt-3 mb-3');
  });
}, 200);

// !FIXED TOP TOGGLER
window.onscroll = function () {
  if (window.pageYOffset > 150) {
    navB.classList.add('fixed-top');
    if (!scrolled) {
      navB.style.transform = 'translateY(-330px)';
    }
    setTimeout(() => {
      navB.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  } else {
    navB.classList.remove('fixed-top');
    scrolled = false;
  }
};

// var $burnek = document.querySelector(`.burnek-hero`);
// if ($(window).width() < 500) {
//   // alert(`tae`);
//   // var $burnek = document.querySelector(`#burnek-hero`);
//   // $('#burnek-hero').toggleClass('w-50');
//   $('#burnek-hero').toggleClass('w-100');
//   // $('#burnek-hero').style.display = 'none';
//   // burnek.classList.toggle()
// } else if ($(window).width() > 500) {
//   // $('#burnek-hero').toggleClass('w-50');
//   $('#burnek-hero').removeClass('w-100');
// }

function burnekHeroImg() {
  if ($(window).width() < 600) {
    if ($('#burnek-hero').hasClass('w-50')) {
      $('#burnek-hero').removeClass('w-50');
      $('#burnek-hero').addClass('w-100');
    }
  } else if ($(window.width() > 600)) {
    if ($('#burnek-hero').hasClass('w-100')) {
      $('#burnek-hero').removeClass('w-100');
      $('#burnek-hero').addClass('w-50');
    }
  }
}
// function burnekHeroImg2() {
//   if ($(window.width() > 600)) {
//     // $('#burnek-hero').addClass('w-50');
//     $('#burnek-hero').removeClass('w-100');
//   }
// }
// $(document).ready(burnekHeroImg2);
// $(window.on('resize', burnekHeroImg2));
$(document).ready(burnekHeroImg);
$(window.on('resize', burnekHeroImg));
