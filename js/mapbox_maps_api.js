const token = "pk.eyJ1IjoianNvc2E4OSIsImEiOiJja3Bwbjg5MXgwMGsyMnZtbHlhYzVseHNmIn0.ouScIp2zZhQhLcJ9IM8Q_g"
mapboxgl.accessToken = token;
let customZoom = 12
let map = createMap();

function createMap() {
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [-82.7396, 28.0717],
        zoom: customZoom,
    });
}

let marker = setMarker([-82.7396, 28.0717]);

function setMarker(point) {
    let popup = new mapboxgl.Popup().setHTML('<p>${textDetails}</p>')
        .addTo(map);

    let marker = setMarker([-83.0025, 42.3472]);

    function setMarker(point) {
        let popup = new mapboxgl.Popup().setHTML('<p>${textDetails}</p>')
            .addTo(map);

    }


    function popping(textDetails) {
        let popup = new mapboxgl.Popup().setHTML('<p>${textDetails}</p>')
            .addTo(map);
        marker.setPopup(popup)
    }
//Array with an Object syntax = [{}]
    let threeRestaurants = [
        {
            location: [-83.0487, 42.3315],
            placename: 'American Coney Island',
            address: '114 W Lafayette Blvd, Detroit, MI 48226',
        },
        {
            location: [-83.0025, 42.3472],
            placename: 'Big Boy',
            address: '7033 E Jefferson Ave, Detroit, MI 48207',
        },
        {
            location: [-83.0850, 42.3232],
            placename: 'Xochimilco Restaurant',
            address: '3409 Bagley St, Detroit, MI 48216',
        }]

      threeRestaurants.forEach(function () {
          setMarker()
      })
    // popping("American Coney Island")
    // popping("Big Boy")
    // popping("Xochimilco Restaurant")
}