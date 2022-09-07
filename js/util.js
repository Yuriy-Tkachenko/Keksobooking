const getRandomNumber = (min, max) => {
  // если мин или макс меньше нуля, вернуть ошибку
  if (min < 0 || max < 0) {
    return -1;
  }
  // проверка на то, что минимум стал максимумом и наоборот
  if (max < min) {
    [min.max][(max, min)];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomCoordinats = (min, max, n) => {
  // Проверка числовое значение или нет
  if (isNaN(min) || isNaN(max) || isNaN(n)) {
    return -1;
  }
  // Проверка меньше нуля или нет
  if (min < 0 || max < 0 || n < 0) {
    return -1;
  }
  // Проверка если минимум больше чем максимум
  if (max < min) {
    [min.max][(max, min)];
  }

  return (Math.random() * (max - min + 1) + min).toFixed(n);
};

const getRandomElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

const getRandomArray = (array) => {
  const newRandomArray = [];

  for (let i = 0; i <= array.length; i++) {
    const elementIndex = getRandomNumber(0, array.length - 1);
    const element = array[elementIndex];

    if (!newRandomArray.includes(element)) {
      newRandomArray.push(element);
    }
  }

  return newRandomArray;
};

const getRandomIntervalInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomInteger = (value) => {
  return Math.floor(Math.random() * value);
};

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

export { getRandomCoordinats, getRandomElement, getRandomArray, getRandomIntervalInteger, getRandomInteger, setDisabledFormElements, removeDisabledFormElements };