var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle--opened');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('main-nav__toggle--opened')) {
    navMain.classList.remove('main-nav');
    navMain.classList.add('main-nav--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
    navToggle.classList.add('main-nav__toggle--closed');
  } else {
    navMain.classList.add('main-nav');
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
  }
});

/*
function initMap() {
var coordinates = {lat: 59.938663, lng: 30.323016},
  map = new google.maps.Map(document.getElementById('footer__map'), {
      center: coordinates
  });

  marker = new google.maps.Marker({
      position: coordinates,
      map: map
  });

  image = 'img/map-pin.png',
  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image
  });
}
*/
