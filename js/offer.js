import { getNumDecline } from './util.js';

const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderFeatures = (features, container) => {
  let featureList = container.querySelectorAll('li');

  featureList.forEach((item) => {
    if (features.indexOf(item.classList[1].replace('popup__feature--', '')) === -1) {
      item.remove();
    }
  });
}

const renderImages = (container, sources) => {
  let popupPhoto = container.querySelector('.popup__photo');
  container.innerHTML = '';

  const fragmentPhoto = document.createDocumentFragment();

  sources.forEach((source) => {
    const newPhoto = popupPhoto.cloneNode(true);
    newPhoto.src = source;
    fragmentPhoto.appendChild(newPhoto);
  });

  return fragmentPhoto;
};

const renderSimilarAdv = ({ author, offer }) => {
  const popupPreview = popupTemplate.cloneNode(true);

  if (offer.title) {
    popupPreview.querySelector('.popup__title').textContent = offer.title;
  } else {
    popupPreview.querySelector('.popup__title').remove();
  };
  if (offer.address) {
    popupPreview.querySelector('.popup__text--address').textContent = offer.address;
  } else {
    popupPreview.querySelector('.popup__text--address').remove();
  };
  if (offer.price) {
    popupPreview.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  } else {
    popupPreview.querySelector('.popup__text--price').remove();
  };
  if (offer.type) {
    popupPreview.querySelector('.popup__type').textContent = offer.type;
  } else {
    popupPreview.querySelector('.popup__type').remove();
  };
  if (offer.rooms && offer.guests) {
    popupPreview.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${getNumDecline(offer.rooms, 'комната', 'комнаты', 'комнат')} для ${offer.guests} ${getNumDecline(offer.guests, 'гостя', 'гостей', 'гостей')}`;
  } else {
    popupPreview.querySelector('.popup__text--capacity').remove();
  };
  if (offer.checkin && offer.checkout) {
    popupPreview.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    popupPreview.querySelector('.popup__text--time').remove();
  };
  if (offer.description) {
    popupPreview.querySelector('.popup__description').textContent = offer.description;
  } else {
    popupPreview.querySelector('.popup__description').remove();
  };
  if (author.avatar) {
    popupPreview.querySelector('.popup__avatar').src = author.avatar;
  } else {
    popupPreview.querySelector('.popup__avatar').remove();
  };
  if (offer.photos) {
    popupPreview.querySelector('.popup__photos').appendChild(renderImages(popupPreview.querySelector('.popup__photos'), offer.photos));
  } else {
    popupPreview.querySelector('.popup__photos').remove();
  };
  if (offer.features) {
    renderFeatures(offer.features, popupPreview.querySelector('.popup__features'))
  } else {
    popupPreview.querySelector('.popup__features').remove();
  };
   
  return popupPreview;
};

export { renderSimilarAdv };