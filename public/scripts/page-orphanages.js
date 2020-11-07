// create map
var map = L.map("mapid").setView([-23.2842481, -51.1857014], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({id, name, lat, lng}) {
  // create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"> <img src="./images/arrow-white.svg"></a>`
  );

  // pop-up
  L
    .marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup);
  // .openPopup(); //abrir o popup
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name, // dataset -e o mesmo data- no hbs
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }
  addMarker(orphanage)
})
