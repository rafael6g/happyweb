const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
}

// create map
var map = L.map('mapid', options).setView([-23.2842481,-51.1857014], 17)

// create and add tileLayer
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
 ).addTo(map)


// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor:[29, 68],
  popupAnchor: [170, 2]
})


// pop-up
L.marker([-23.2842481,-51.1857014], { icon })
  .addTo(map)
 

/* image gallery */
function selectImage(event) {
  const button = event.currentTarget

  //remover todas as classe active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass) // pode usar (button)=> {button.classList.remove("active")} e eliminar a funcao removeActiveClass
  
  function removeActiveClass(button) {
    button.classList.remove("active")
  }

  //selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de imagem
  imageContainer.src = image.src

  // adicionar a class .active para este botao
  button.classList.add('active')
}