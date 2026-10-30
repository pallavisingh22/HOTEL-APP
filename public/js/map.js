// mapboxgl.accessToken = mapToken;

// const map = new mapboxgl.Map({
        
//         container: 'map', // container ID
//         style:"mapbox://styles/mapbox/streets-v12",
//         center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//         zoom: 9 // starting zoom
// });

// const marker = new mapboxgl.Marker({color:"red"})
// .setLngLat(listing.geometry.coordinates) //listing.geometry.coordinates
// .setPopup(new mapboxgl.Popup({ offset: 25, })
// .setHTML(`<h4>${listing.location}</h4><p>Waiting for you<p>`))
// .addTo(map);

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates,
    zoom: 9
});

const marker = new mapboxgl.Marker({
    color: "red"
})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h4>${listing.location}</h4><p>Waiting for you</p>`
        )
    )
    .addTo(map);

map.on("load", () => {
    console.log("Map loaded successfully");
});

map.on("error", (e) => {
    console.error("Mapbox error:", e.error);
});