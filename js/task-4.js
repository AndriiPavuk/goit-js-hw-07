const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

decrementBtnRef.addEventListener('click', onDecrementBtnClick);
incrementBtnRef.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
  valueRef.textContent = counterValue -= 1;
}
function onIncrementBtnClick() {
  valueRef.textContent = counterValue += 1;
}
