import { setDisabledFormElements, removeDisabledFormElements } from './util.js';

const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterElements = mapFilter.querySelectorAll('.map__filter');
const mapFilterInputElements = mapFilter.querySelectorAll('.map__checkbox');
const mapFilterInputWrapper = mapFilter.querySelector('.map__features');

const elementsDisable = () => {
  form.classList.add('ad-form--disabled');
  mapFilter.classList.add('ad-form--disabled');
  mapFilterInputWrapper.classList.add('ad-form--disabled');
  setDisabledFormElements(formElements);
  setDisabledFormElements(mapFilterElements);
  setDisabledFormElements(mapFilterInputElements);
};

elementsDisable();

const map = L.map('map-canvas')
  .on('load', () => { 
    const elementActivate = () => { 
      form.classList.remove('ad-form--disabled');
      mapFilter.classList.remove('ad-form--disabled');
      mapFilterInputWrapper.classList.remove('ad-form--disabled');
      removeDisabledFormElements(formElements);
      removeDisabledFormElements(mapFilterElements);
      removeDisabledFormElements(mapFilterInputElements);
    }

    elementActivate();
  })
  .setView({
    lat: 35.4200,
    lng: 139.2530,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//Создаем новый маркер
const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

const marker = L.marker(
  {
    lat: 35.4200,
    lng: 139.2530,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

//Добавляем маркер на карту
marker
  .addTo(map)
  .bindPopup(title);

marker.on('moveend', (evt) => { 
  console.log(evt.target.getLatLng());
})

//Добавляем массив с метками
const points = [
  {
    title: 'Ичибан',
    lat: 35.7200,
    lng: 136.5353,
  },
  {
    title: 'Акаси',
    lat: 35.690,
    lng: 139.690,
  }
];
