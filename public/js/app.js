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
