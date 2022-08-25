const typeOfHouse = document.getElementById('type');
const timeIn = document.getElementById('timein');
const timeOut = document.getElementById('timeout');

typeOfHouse.addEventListener('change', (evt) => {
  const price = document.getElementById('price');

  if (typeOfHouse.value == 'flat') {
    price.placeholder = '5000';
  }
  else if (typeOfHouse.value == 'house') {
    price.placeholder = '10000';
  }
  else if (typeOfHouse.value == 'bungalow') {
    price.placeholder = '20000';
  }
  else if (typeOfHouse.value == 'palace') {
    price.placeholder = '50000';
  }
});

timeIn.addEventListener('change', (evt) => {
  if (timeIn.value == '12:00') {
    timeOut.options[0].selected = true;
  }
  else if (timeIn.value == '13:00') {
    timeOut.options[1].selected = true;
  }
  else if (timeIn.value == '14:00') {
    timeOut.options[2].selected = true;
  }
});

timeOut.addEventListener('change', (evt) => {
  if (timeOut.value == '12:00') {
    timeIn.options[0].selected = true;
  }
  else if (timeOut.value == '13:00') {
    timeIn.options[1].selected = true;
  }
  else if (timeOut.value == '14:00') {
    timeIn.options[2].selected = true;
  }
});