/*const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

const makeObject = (object) => {
  const type = {
    palace: "Дворец",
    flat: "Квартира",
    house: "Дом",
    bungalow: "Бунгало",
  };

  const popupPreview = popupTemplate.cloneNode(true);
    popupPreview.querySelector(".popup__title").textContent = object.offer.title;
    popupPreview.querySelector(".popup__text--address").textContent = object.offer.adress;
    popupPreview.querySelector(".popup__text--price").textContent = object.offer.price + " ₽/ночь";
    popupPreview.querySelector(".popup__type").textContent = object.offer.type;
    popupPreview.querySelector(".popup__text--time").textContent = "Заезд после " + object.offer.checkin + ", выезд до " + object.offer.checkout;
    popupPreview.querySelector(".popup__description").textContent = object.offer.description;
    popupPreview.querySelector(".popup__avatar").src = object.author.avatar;

    const listItemFeature = popupPreview.querySelector(".popup__features li");
    popupPreview.querySelector(".popup__features").innerHTML = "";

    object.offer.features.forEach((feature) => {
      const listItemFeatureClone = listItemFeature.cloneNode(true);
      popupPreview.querySelector(".popup__features").appendChild(listItemFeatureClone);
    });

    const listItemPhoto = popupPreview.querySelector(".popup__photos img");
    popupPreview.querySelector(".popup__photos").innerHTML = "";

    object.offer.photos.forEach((photo) => {
      const listItemPhotoClone = listItemPhoto.cloneNode(true);
      listItemPhotoClone.src = photo;
      popupPreview.querySelector(".popup__photos").appendChild(listItemPhotoClone);
    });

    if (object.offer.type == 0) {
      popupPreview.querySelector(".popup__type").textContent = object.offer.type;
    } else {
      popupPreview.querySelector(".popup__type").remove();
    }
  
  return popupPreview;
};

export { makeObject };*/