import { OBJECT_LIST_COUNT, AVATAR, TITLE, ADDRESS, TYPE, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS } from './data.js';
import { getRandomCoordinats, getRandomElement, getRandomArray, getRandomIntervalInteger, getRandomInteger } from './util.js';
//import { makeObject } from './offer.js';
import './form.js';
import './map.js';
import { createFetch } from './createFetch.js';

const fetchData = createFetch(
  (data) => {
    console.log(data);
  },
  (err) => { 
    console.log(err);
  }
)

fetchData();

const canvas = document.querySelector("#map-canvas");

const createObject = () => {
  return {
    author: {
      avatar: getRandomElement(AVATAR),
    },
    offer: {
      title: getRandomElement(TITLE),
      address: ADDRESS,
      price: getRandomIntervalInteger(10000, 100000),
      type: getRandomElement(TYPE),
      rooms: getRandomIntervalInteger(1, 4),
      guests: getRandomInteger(10),
      checkin: getRandomElement(CHECKIN),
      checkout: getRandomElement(CHECKOUT),
      features: getRandomArray(FEATURES),
      description: getRandomElement(DESCRIPTION),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: getRandomCoordinats(35.65, 35.7, 5),
      y: getRandomCoordinats(139.7, 139.8, 5),
    },
  };
};

/*const objectList = new Array(OBJECT_LIST_COUNT).fill(null).map(() => createObject());

const renderObject = () => {
  let objectFragment = document.createDocumentFragment();

  objectList.forEach((object) => {
    objectFragment.appendChild(makeObject(object, FEATURES, PHOTOS));
  });

  canvas.appendChild(objectFragment);
};

renderObject();*/