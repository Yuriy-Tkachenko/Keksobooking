import { showSuccessAlert, showErrorAlert } from './util.js';
import { resetForm } from './form.js';
import { createMapPin, clearMarker } from './map.js';
import { filterOffers, chooseTypes } from './filter.js';

const OFFER_QUANTITY = '10';

const mapFilters = document.querySelector('.map__filters');
const form = document.querySelector('.ad-form');
const urls = {
  GET: 'https://23.javascript.pages.academy/keksobooking/data',
  POST: 'https://23.javascript.pages.academy/keksobooking',
}

const GET_ERROR = 'Ошибка! Попробуйте перезагрузить страницу!';
const POST_ERROR = 'Не удалось отправить форму. Попробуйте еще раз.';
const POST_OK = 'Форма успешно отправлена!';

const getData = (onSuccess) => {
  fetch(urls.GET)
    .then((responce) => responce.json())
    .then((offers) => {
      createMapPin(offers.slice(0, OFFER_QUANTITY));
      /*mapFilters.addEventListener('change', () => {
        offers.filter(chooseTypes)
      })*/
    })
    .catch(() => {
      showErrorAlert(GET_ERROR)
    })
};

getData();

const sendData = (onSuccess, onError) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch(
      urls.POST, 
      {
        method: 'POST',
        body: formData,
      },
    )
    .then(() => onSuccess())
    .catch(() => onError())
  });
};

const successPost = () => {
  showSuccessAlert(POST_OK);
  resetForm()
}

const errorPost = () => {
  showErrorAlert(POST_ERROR);
  resetForm();
}

sendData(successPost, errorPost);

export { getData, sendData };