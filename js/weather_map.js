(function (){
    "use strict";

    $.get('http://api.openweathermap.org/geo/1.0/direct', {
        q: 'San Antonio, Texas, USA',
        appid: keys.weatherMap,
        limit: 1
    }).done(function(data) {
        // can be used to get forecast conditions at current time in increments of 24 hours
        $.get('https://api.openweathermap.org/data/2.5/forecast', {
            lat: data[0].lat,
            lon: data[0].lon,
            appid: keys.weatherMap,
            units: 'imperial'
        }).done(function (data) {
            let html = "";

            for (let i = 0; i < data.list.length; i += 8) {
                let current = data.list[i];
                let date = current.dt_txt.split(" ");
                html += `
<!--Weather info for day-->
<div id="Location ${i/4}" class="col-2">
    <div class="card">
<!--        weather date-->
        <div class="card-header">${date[0]}</div>
<!--        min and max temp and weather image-->
        <div class="card-body">
<!--            min and max temp-->
            <h6 class="card-title">${current.main.temp_max}&#8457 / ${current.main.temp_min}&#8457</h6>
<!--            weather image-->
            <p class="card-text">
                <img src="http://openweathermap.org/img/w/${current.weather[0].icon}.png">
            </p>
        </div>
<!--        list of weather conditions-->
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${current.weather[0].description}</li>
    <li class="list-group-item">${current.main.humidity}</li>
    <li class="list-group-item">${current.wind.speed}</li>
    <li class="list-group-item">${current.main.pressure}</li>
  </ul>
</div>
</div>
    `;
            }
            $('#currentLocation').html(html);
        }).fail(function(jqXhr, status, error) {
            console.log(jqXhr);
            console.log(status);
            console.log(error);
        });
    }).fail(function(jqXhr, status, error) {
        console.log(jqXhr);
        console.log(status);
        console.log(error);
    });

    // Map Section

    mapboxgl.accessToken = keys.mapbox;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });

    let marker = new mapboxgl.Marker();

    $.get("./data/locations.json").done(function(data){

    // the  geocode method from mapbox-geocoder-utils.js
        geocode(`${data[0].address}`, keys.mapbox).then(function(result) {
            map.setCenter(result);
            map.setZoom(10);
            marker.setLngLat(result);
            marker.addTo(map);
            marker.setDraggable(true);
        });
    });

    marker.on('dragend', onDragEnd);

    function onDragEnd() {
        let lngLat = marker.getLngLat();
        map.setCenter(lngLat);
        map.setZoom(10);
        // console.log(`${lngLat.lng} and ${lngLat.lat}`);
        // reverseGeocode( {lng: -96.79, lat: 32.77}, keys.mapbox).then(function(result) {
        //     map.setCenter(lngLat);
        //     map.setZoom(10);
        // });
    }
})();