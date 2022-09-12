import { setDisabledFormElements, removeDisabledFormElements } from './util.js';

const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterElements = mapFilter.querySelectorAll('.map__filter');
const mapFilterInputElements = mapFilter.querySelectorAll('.map__checkbox');
const mapFilterInputWrapper = mapFilter.querySelector('.map__features');
const addressInput = document.getElementById('address');
const popupFeature = document.querySelectorAll('.popup__feature');

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

//Создаем иконку нового маркера
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
    // Передвижение маркера
    draggable: true,
    icon: mainPinIcon,
  },
);

//Добавляем маркер на карту
marker
  .addTo(map)

marker.on('moveend', (evt) => {
  //Получаем координаты маркера и добавляем в input
  addressInput.value = evt.target.getLatLng().lat.toFixed(6) + ', ' + evt.target.getLatLng().lat.toFixed(6);
})

//Добавляем массив с метками
const points = [
  {
    title: 'Комната',
    lat: 35.7200,
    lng: 136.5353,
  },
  {
    title: 'Бунгало',
    lat: 35.690,
    lng: 139.690,
  }
];

const createCustomPopup = (point) => { 
  const balloontemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = balloontemplate.cloneNode(true);

  popupElement.querySelector('.popup__title').textcontent = point.title;
  popupElement.querySelector('.popup__text--address').textContent = 'Координаты: ${point.lat}, ${point.lng}';
  
  for (let i = 0; i <= popupFeature.length; i++) {
    if (popupFeature.value === null) {
      popupFeature[i].remove;
    }
  }

  return popupElement;
}

points.forEach((point) => {
  const {lat, lng} = point;

  //Создаем иконку маркера объявления
  const adPinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  })

  document.getElementById('title').placeholder = '';

  const adMarker = L.marker(
    {
      title: 'Дворец',
      lat,
      lng,
    },
    {
      icon: adPinIcon,
    });
  
  adMarker
    .addTo(map)
    .bindPopup(
      createCustomPopup(point),
    ),
  {
    keepInView: true,
  };
});