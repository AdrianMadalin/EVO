$('.carousel').carousel({
  interval: 2000
});

function initMap() {
  var uluru = {
    lat: 44.433059,
    lng: 26.053845
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
