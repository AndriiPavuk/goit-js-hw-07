const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const defaultName = outputRef.textContent;

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  event.currentTarget.value.length === 0
    ? (outputRef.textContent = defaultName)
    : (outputRef.textContent = event.currentTarget.value);
}
