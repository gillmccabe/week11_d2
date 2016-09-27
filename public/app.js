var initialize = function() {

  var container = document.getElementById('map');
  var center = { lat: 40.712784, lng: -74.005941 }
  var map = new Map(container, center, 10);
  map.addMarker(center);
  map.addClickEvent();

  var barcelonaButton = createButton("Take me to Barcelona", 'relocate-button');
  var onBarcelonaButtonClick = function(){
    var barcelona = new google.maps.LatLng(41.385064, 2.173403);
    map.googleMap.setCenter(barcelona);
    map.addMarker(barcelona);
    }
  barcelonaButton.onclick = onBarcelonaButtonClick;

  var currentLocationButton = createButton("Where am I?", 'find-me-button');
  var onCurrentButtonClick = function(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          map.googleMap.setCenter(pos);
          map.addMarker(pos);
        }, function(error) {
          // what to do if can't find location
        });
    };
  }
  currentLocationButton.onclick = onCurrentButtonClick;
}


var createButton = function(text, classList) {
  var button = document.createElement('button');
  button.classList.add(classList);
  button.innerText = text;
  var body = document.querySelector('body');
  body.appendChild(button);
  return button;
}

window.onload = initialize;