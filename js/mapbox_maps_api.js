const token = "pk.eyJ1IjoianNvc2E4OSIsImEiOiJja3Bwbjg5MXgwMGsyMnZtbHlhYzVseHNmIn0.ouScIp2zZhQhLcJ9IM8Q_g"
mapboxgl.accessToken = token;

let map = createMap();

function createMap() {
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [-82.7396, 28.0717],
        zoom: 12
    });
}
let marker = setMarker([-82.7396, 28.0717]);
