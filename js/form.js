const typeOfHouse = document.getElementById('type');
const timeIn = document.getElementById('timein');
const timeOut = document.getElementById('timeout');
const addressInput = document.getElementById('address');
const roomQuantity = document.getElementById('room_number');
const guestQuantity = document.getElementById('capacity');

typeOfHouse.addEventListener('change', (evt) => {
  const price = document.getElementById('price');

  if (typeOfHouse.value == 'flat') {
    price.value = '1000';
  }
  else if (typeOfHouse.value == 'house') {
    price.value = '5000';
  }
  else if (typeOfHouse.value == 'bungalow') {
    price.value = '0';
  }
  else if (typeOfHouse.value == 'palace') {
    price.value = '10000';
  }
});

timeIn.addEventListener('change', changeEventHandlerTime);
timeOut.addEventListener('change', changeEventHandlerTime);

function changeEventHandlerTime(event) {
  timeOut.value = event.target.value;
  timeIn.value = event.target.value;
};

roomQuantity.addEventListener('change', changeEventHandlerRooms);
guestQuantity.addEventListener('change', changeEventHandlerRooms);

function changeEventHandlerRooms(event) {
  const value = roomQuantity.options[3].value
  guestQuantity.options[3].value = value;
    
  guestQuantity.value = event.target.value;
  roomQuantity.value = event.target.value;
};

addressInput.setAttribute('readonly', 'readonly');