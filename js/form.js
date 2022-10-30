const IMG_WIDTH = 70;
const IMG_HEIGHT = 70;
const MIN_LENGTH = 30;
const MAX_LENGTH = 100;
const MAX_PRICE = 1000000;
const COORDINATE_ROUNDING = 5;

const MIN_PRICE = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
}

const form = document.querySelector('.ad-form');
const formList = form.children;
const titleForm = form.querySelector('#title');
const typeForm = form.querySelector('#type');
const priceForm = form.querySelector('#price');
const timeInForm = form.querySelector('#timein');
const timeOutForm = form.querySelector('#timeout');
const roomForm = form.querySelector('#room_number');
const capacityForm = form.querySelector('#capacity');
const addressForm = form.querySelector('#address');
const formReset = form.querySelector('.ad-form__reset');
const adFormAvatar = document.querySelector('.ad-form-header__preview');
const adFormPhoto = document.querySelector('.ad-form__photo');
const avatarPreview = adFormAvatar.querySelector('img').cloneNode(true);
const avatarChooser = form.querySelector('#avatar');
const photoChooser = form.querySelector('#images');

//Валидация полей ввода
const onTitleValue = () => {
  const titleLength = titleForm.value.length;
  if (titleLength < MIN_LENGTH) {
    titleForm.style.borderColor = 'red';
    titleForm.setCustomValidity(`Минимальная длина составляет ${MIN_LENGTH} символов`)
  } else if (titleLength > MAX_LENGTH) {
    titleForm.style.borderColor = 'red';
    titleForm.setCustomValidity(`Максимальная длина составляет ${MAX_LENGTH} символов`)
  } else {
    titleForm.style.borderColor = '';
    titleForm.setCustomValidity('');
  }
  titleForm.reportValidity();
}

//Настройка зависимости стоимости жилья от типа жилья
const onTypeChange = () => {
  priceForm.placeholder = MIN_PRICE[typeForm.value];
  priceForm.min = MIN_PRICE[typeForm.value];
}

//Извещения об указании допустимой цены в поле "Цена за ночь"
const onPriceValue = () => {
  const valuePrice = priceForm.value;
  if (valuePrice < MIN_PRICE[typeForm.value]) {
    priceForm.style.bordercolor = 'red';
    priceForm.setCustomValidity(`Минимальная цена за ночь составляет ${MIN_PRICE}`);
  } else if (valuePrice > MAX_PRICE) {
    priceForm.style.borderColor = 'red';
    priceForm.setCustomValidity(`Максимальная цена за ночь составляет ${MAX_PRICE}`)
  } else {
    priceForm.style.borderColor = 'white';
    priceForm.setCustomValidity('');
  }

  priceForm.reportValidity();
}

//Поле "Время заезда" и "Время выезда" снихронизовано изменят значения
const onTimeChange = () => {
  timeOutForm.value = timeInForm.value;
  timeInForm.value = timeOutForm.value;
};

//Поле "Количество комнат" вводит ограничения на количество гостей
const onRoomsChange = () => {
  if (roomForm.value === '1' && capacityForm.value !== '1') {
    capacityForm.style.borderColor = 'red';
    capacityForm.setCustomValidity('В 1 комнате возможно разместить только 1 гостя');
  } else if (roomForm.value === '2' && capacityForm.value !== '1' && capacityForm.value !=='2') {
    capacityForm.style.borderColor = 'red';
    capacityForm.setCustomValidity('В 2 комнатах возможно разместить только 2 гостей');
  } else if (roomForm.value === '3' && capacityForm.value === '0') {
    capacityForm.style.borderColor = 'red';
    capacityForm.setCustomValidity('В 3 комнатах возможно разместить только 3 гостей');
  } else if (roomForm.value === '100') {
    capacityForm.style.borderColor = 'red';
    capacityForm.setCustomValidity('Нет свободных номеров, в которых предусмотрено 100 комнат');
  } else {
    capacityForm.style.borderColor = '';
    capacityForm.setCustomValidity('');
  };

  capacityForm.reportValidity();
};

//Добавление событий при нажатии на соответствующие поля
titleForm.addEventListener('input', onTitleValue);
typeForm.addEventListener('change', onTypeChange);
priceForm.addEventListener('input', onPriceValue);
timeInForm.addEventListener('change', onTimeChange);
timeOutForm.addEventListener('change', onTimeChange);
roomForm.addEventListener('change', onRoomsChange);
capacityForm.addEventListener('change', onRoomsChange);

//Получение координат
const getAddress = ({ lat, lng }) => {
  return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
}

//Активное состояние формы
const activateAd = () => {
  form.classList.remove('ad-form--disabled');
  for (let elem of FormList) {
    elem.removeAttribute('disabled');
  }
}

export { getAddress }