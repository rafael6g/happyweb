// const { saveOrphanage } = require("../../src/pages/");

// create map
var map = L.map('mapid').setView([-23.2842481,-51.1857014], 15)

// create and add tileLayer
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
 ).addTo(map)


// create icon
const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor:[29, 68],
})

let marker;

// // create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remove icon
  marker && map.removeLayer(marker)  // && quer dizer se o marker existir remova-lo

  // add icon layer
  marker = L.marker([lat, lng], {icon})
  .addTo(map)
})

// # adicionar campo de fotos
function addPhotoField() {
  // ## container de fotos #images
  const container = document.querySelector('#images')
  // ## pegar o cotainer para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')
  // ## realizar o clone da ultima imagem adicionada
  const newfieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

  // ## verificar se o campo esta vazio, se sim, nao adicionar o container de imagens
  const input = newfieldContainer.children[0]

  if(input.value == "" ) {
    return  // sempre que encontrar o return ela para de executar o codigo abaixo
  }

  // ## limpar o campo antes de adicionar ao container de image
  // console.log(newfieldContainer.children) // descobrir a posição do input que é 0
  // newfieldContainer.children[0].value=""  // alterado devido a variavel input criado acima
  input.value = ""

  // ## adicionar o clone ao container de #images
  container.appendChild(newfieldContainer)
}

function deleteField(event) {
  // console.log(event.currentTarget)

  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length < 2) {
    // limpar campo
    span.parentNode.children[0].value = ""
    return
  }

  //deletar o campo
  span.parentNode.remove();
}

// # selecionar sim ou nao
function toggleSelect(event) {
  // ## retiar a class .active (dos botoes)
  document.querySelectorAll('.button-select button')
  .forEach(button => button.classList.remove('active')) // para cada botao execute a funcao

  // ## colocar a class .active no botao selecionado
  const button = event.currentTarget
  button.classList.add('active')

  // ## atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')
  
  input.value = button.dataset.value
}

function validate(event) {
  const needsLatAndLng = document.querySelector('span[data-lat]')
  
  if(needsLatAndLng.value == "") {
    alert('Selecionando um ponto no mapa')  // sempre que encontrar o return ela para de executar o codigo abaixo
    event.preventDefault()
  }
  console.log(saveOrphanage)
}