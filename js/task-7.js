const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', onInputChange);

function onInputChange() {
  textRef.style.fontSize = `${inputRef.value}px`;
}
