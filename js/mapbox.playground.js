// const mapboxToken = 'pk.eyJ1IjoiY29yZXktYnJlZXplIiwiYSI6ImNrcHBuOGN0cTBidmIyb3BhYTBmbGR0dXMifQ.aqpSgzNqdIPfL5xfGk9OIA'
//
// mapboxgl.accessToken = mapboxToken
//
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [-83.0458, 42.3314],
//     zoom: 12
// });
// // call function to create method and give initial point
// let marker = setMarker([-83.0458, 42.3314]);
//
// //call addMapEvent AFTER the marker has been initially set
// addMapEvent(marker);
//
// // creates new geocoder and assign to variable
// let geocoder = setGeocoder();
// addGeocoderToMap(geocoder)
// addGeocoderEvent(geocoder)
// setPopup("this is my text")
//
// // creates and returns a new Geocoder (search box)
//     function setGeocoder() {
//         return new MapboxGeocoder({
//             accessToken: mapboxgl.accessToken,
//             mapboxgl: mapboxgl,
//             marker: false
//         })
//     }
//
//     function addGeocoderToMap(geocoder) {
//         map.addControl(geocoder);
//     }
//
//     function addGeocoderEvent(geocoder) {
//         marker.setLngLat(e.result.geometry.coordinates)
//     }
// //creates the marker
// function setMarker(point) {
//     return  new mapboxgl.Marker().setLngLat(point)
//                                       .addTo(map);
//
//
//
//
// }
// //adds event to map that changes the location of marker
// // based on where the user clicks
// function addMapEvent(marker) {
//     map.on('click', function (e) {
//         marker.setLngLat(e.lngLat)
//             .addTo(map);
//     })
// }
//
// function setPopup(textDetails){
//     let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`)
//         .addTo(map);
//
//     marker.setPopup(popup);
// };
const token = "pk.eyJ1IjoianNvc2E4OSIsImEiOiJja3Bwbjg5MXgwMGsyMnZtbHlhYzVseHNmIn0.ouScIp2zZhQhLcJ9IM8Q_g"
mapboxgl.accessToken = token;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-83.0458, 42.3314],
    zoom: 12
});
// call function to create method and give initial point
let marker = setMarker([-83.0458, 42.3314]);
// call addMapEvent AFTER the marker has been initially set
addMapEvent(marker);
// creates new geocoder nd assigns to variable
let geocoder = setGeocoder();
addGeocoderToMap(geocoder)
addGeocoderEvent(geocoder)
setPopup("you are here")
//creates and returns a new GeoCoder (search box)
function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}
// adds geocoder to map
function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);
}
// adds event listener to geocoder and sets new marker to location
function addGeocoderEvent(geocoder){
    geocoder.on('result', function (e){
        console.log(e)
        marker.setLngLat(e.result.geometry.coordinates)
        setPopup(e.result.geometry.name)
    })
}
// creates a marker
function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point)
        .addTo(map);
}
// adds event to map that changes location of marker
//based on where the user clicks
function addMapEvent(marker) {
    map.on('click', function (e) {
        console.log(e.lngLat);
        marker.setLngLat(e.lngLat)
            .addTo(map);
    });
}
//
function setPopup(textDetails){
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`)
        .addTo(map);
    marker.setPopup(popup);
}
