(function (){
    "use strict";

//Sets Initial Map
    mapboxgl.accessToken = keys.mapbox;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });
//Declares Map Marker
    let marker = new mapboxgl.Marker();
//Sets Map and Weather to San Antonio Location
    $.get("./data/locations.json").done(function(data){
        setMapMarker(data[0].address);
    });

    $('#searchButton').click(function(e) {
        e.preventDefault();
        setMapMarker($('#inputBox').val());
    });

    marker.on('dragend', onDragEnd);

    /** function onDragEnd
     * when the marker is dragged, two things will happen:
     * the map will center to the new location,
     * weather information will be updated
     * lngLat is an object that stores the new markers lat and lon
     * lngLatArray is formatted lng then lat to be used by updateWeather
     */
    function onDragEnd() {
        let lngLat = marker.getLngLat();
        let lngLatArray = [];

        map.setCenter(lngLat);
        map.setZoom(10);

        lngLatArray.push(lngLat.lng);
        lngLatArray.push(lngLat.lat);
        updateWeather(lngLatArray);
    }

    /** function updateWeather
     * this function will generate cards that have weather information for the given coordinates
     * location[0] is longitude and location[1] is latitude[1]
     */
    function updateWeather(location){
        $.get('https://api.openweathermap.org/data/2.5/forecast', {
            lat: location[1],
            lon: location[0],
            appid: keys.weatherMap,
            units: 'imperial'
        }).done(function (data) {
            generateHTML(data);
        }).fail(function(jqXhr, status, error) {
            console.log(jqXhr);
            console.log(status);
            console.log(error);
        });
    }

    /** function generateHTML
     * this function will loop through the location information to create the html to update the page with weather information
     */
    function generateHTML(data){
        let html = "";

        for (let i = 0; i < data.list.length; i += 8) {
            let current = data.list[i];
            let date = current.dt_txt.split(" ");
            html = html + cardHTML(current, date, i);
        }
        $('#currentLocation').html(html);
    }

    /** function cardHTML
     * this function generates a card with weather information
     */
    function cardHTML(current, date, i){
        return `
            <!--Weather info for day-->
            <div id="Location ${i/4}" class="col-2">
                <div class="card">
                    <!-- Weather date-->
                    <div class="card-header">${date[0]}</div>
                    <!-- Min and Max temp and weather image-->
                    <div class="card-body">
                        <!--            min and max temp-->
                        <h6 class="card-title">${current.main.temp_max}&#8457 / ${current.main.temp_min}&#8457</h6>
                        <!--            weather image-->
                        <p class="card-text">
                            <img src="http://openweathermap.org/img/w/${current.weather[0].icon}.png">
                        </p>
                    </div>
                    <!-- List of weather conditions-->
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

    /**function setMapMarker
     * sets up map to match the new location of the marker
     */
    function setMapMarker(address){
        geocode(`${address}`, keys.mapbox).then(function(result) {
            map.setCenter(result);
            map.setZoom(10);
            marker.setLngLat(result);
            marker.addTo(map);
            marker.setDraggable(true);
            updateWeather(result);
        });
    }
})();