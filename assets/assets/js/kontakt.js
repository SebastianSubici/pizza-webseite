function myMap()
{
  myCenter=new google.maps.LatLng(49.673761, 8.543626);
  var mapOptions= {
    center:myCenter,
    zoom:18, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
