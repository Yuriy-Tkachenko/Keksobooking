const ALERT_SHOW_TIME = 5000;

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

const elementActivate = () => { 
  form.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('ad-form--disabled');
  mapFilterInputWrapper.classList.remove('ad-form--disabled');
  removeDisabledFormElements(formElements);
  removeDisabledFormElements(mapFilterElements);
  removeDisabledFormElements(mapFilterInputElements);
}

const setDisabledFormElements = (elements) => {
  elements.forEach(element => {
    element.setAttribute('disabled', 'disabled');
  })
};

const removeDisabledFormElements = (elements) => { 
  elements.forEach(element => { 
    element.removeAttribute('disabled');
  })
};

const getNumDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  if (num > 10 && (Math.round((num % 100) / 10)) === 1) {
    return genitivePlural;
  } else {
    switch (num % 10) {
      case 1: return nominative;
      case 2:
      case 3:
      case 4: return genitiveSingular;
    }
    return genitivePlural;
  }
};

const showErrorAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  
  alertContainer.textContent = message;
  
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const showSuccessAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'green';
  
  alertContainer.textContent = message;
  
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const openUserModal = () => {
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeUserModal = () => {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

export { elementsDisable, elementActivate, getNumDecline, showErrorAlert, showSuccessAlert };