function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const colorTextRef = document.querySelector('.color');
const colorChangeBtnRef = document.querySelector('button.change-color');

colorChangeBtnRef.addEventListener('click', onButtonClick);

function onButtonClick() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorTextRef.textContent = bodyRef.style.backgroundColor;
}
