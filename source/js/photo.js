const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const userFileChooser = document.querySelector('.ad-form-header__input');
const imgUserPreview = document.querySelector('.ad-form-header__image');
const offerFileChooser = document.querySelector('.ad-form__input');
const offerPreviewWrapper = document.querySelector('.ad-form__photo');
const imgOfferPreview = document.createElement('img');
offerPreviewWrapper.appendChild(imgOfferPreview);

const addPhoto = (chooser, photoWrapper) => {
    chooser.addEventListener('change', () => {
    const file = chooser.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some(
      (it) => {
        return fileName.endsWith(it);
    });
  
    if (matches) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        photoWrapper.src = reader.result;
      });
  
      reader.readAsDataURL(file);
    }
  });
};
   
addPhoto(userFileChooser, imgUserPreview);
addPhoto(offerFileChooser, imgOfferPreview);