import { elementsDisable, elementActivate } from './util.js';
import { renderSimilarAdv } from './offer.js';

const TOKYO = { lat: 35.682064, lng: 139.752136 }
const ZOOM = 14;
const addressInput = document.getElementById('address');

elementsDisable()

const map = L.map('map-canvas')
  .on('load', () => {
    elementActivate();
  })
  .setView({
    lat: TOKYO.lat,
    lng: TOKYO.lng,
  }, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//Создаем иконку маркера пользователя
const userIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

//Создаем иконку маркера объявления
const adPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
})

//Создаем маркер пользователя
const userMarker = L.marker(
  {
    lat: TOKYO.lat,
    lng: TOKYO.lng,
  },
  {
    draggable: true,
    icon: userIcon,
  },
);

const clearMarker = () => L.layerGroup().remove();

userMarker.on('moveend', (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  addressInput.value = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
}).addTo(map);

const layerGroup = L.layerGroup().addTo(map);

const createMapPin = (points) => {
  points.forEach((point) => {
    const { location } = point;
    const marker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        icon: adPinIcon,
      }
    );

    marker
      .addTo(layerGroup)
      .bindPopup(() => renderSimilarAdv(point),
        {
          keepInview: true,
        },
      );
  })
}

export { createMapPin, clearMarker }