var Map = function(container, coords, zoom) {
  
  this.googleMap = new google.maps.Map(container, {  
    center: coords, 
    zoom: zoom
  });

  var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">A Place</h1>'+
        '<div id="bodyContent">' + 'lots of info about place' + '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  this.addMarker = function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
  }

  this.addClickEvent = function() {
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
      this.addMarker(position);
    }.bind(this))
  }

}