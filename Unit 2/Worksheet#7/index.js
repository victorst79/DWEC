var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

function success(position){
    var cordinates = position.coords;
    console.log(cordinates);
    console.log('Your current position is:');
    console.log(`Latitude --> ${cordinates.latitude}`);
    console.log(`Longitude --> ${cordinates.longitude}`);
    console.log(`More or less ${cordinates.accuracy} meters.`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

var pos = navigator.geolocation.getCurrentPosition(success, error, [options]);