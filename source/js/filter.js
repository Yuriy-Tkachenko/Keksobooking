import { createMapPin } from "./map.js"

const OFFER_QUANTITY = '10';

const mapFilters = document.querySelector('.map__filters');
const housingTypeSelect = mapFilters.querySelector('#housing-type');
const housingPriceSelect = mapFilters.querySelector('#housing-price');
const housingRoomsSelect = mapFilters.querySelector('#housing-rooms');
const housingGuestsSelect = mapFilters.querySelector('#housing-guests');
const featuresSelect = mapFilters.querySelector('.map__features');

const chooseTypes = (selectType) => {
  return housingTypeSelect.value === 'any' || selectType.offer.type === housingTypeSelect.value;
};
const choosePrice = (selectPrice) => {
  if (housingPriceSelect.value === 'low') {
    return selectPrice.offer.price < 10000;
  } else if (housingPriceSelect.value === 'middle') {
    return selectPrice.offer.price >= 10000 && selectPrice.offer.price <= 50000;
  } else if (housingPriceSelect.value === 'high') {
    return selectPrice.offer.price > 50000;
  }
};
const chooseRooms = (selectRooms) => {
  return housingRoomsSelect.value === 'any' || selectRooms.offer.rooms.toString() === housingRoomsSelect.value;
};
const chooseGuests = (selectGuests) => {
  return housingGuestsSelect === 'any' || selectGuests.offer.guests.toString() === housingGuestsSelect.value;
};
const chooseFeatures = (selectFeatures) => {
  const checkedElement = featuresSelect.querySelectorAll('input[type=checbox]:checked');
  const checkedFeatures = [].map.call(checkedElement, function (input) {
    return input.value;
  });
  return checkedFeatures.every(function (currentFeature) {
    return selectFeatures.offer.features.includes(currentFeature);
  });
};

const filterOffers = (offers) => {
  let dataArray = [];



  dataArray.push(offers);
  createMapPin(dataArray);
}

export { filterOffers, chooseTypes }