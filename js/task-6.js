

///Добавление без удаления///

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const inputNumberRef = document.querySelector('#controls input');
// const buttonCreateRef = document.querySelector('button[data-create]');
// const buttonDestroyRef = document.querySelector('button[data-destroy]');
// const boxesRef = document.querySelector('#boxes');

// buttonCreateRef.addEventListener('click', onCreateBtnClick);
// buttonDestroyRef.addEventListener('click', onDestroyBtnClick);

// function createBoxes(amount) {
//   const boxElements = [];

//   for (let i = 0; i < amount; i += 1) {
//     const boxEl = document.createElement('div');
//     boxEl.style.width = `${30 + 10 * i}px`;
//     boxEl.style.height = `${30 + 10 * i}px`;
//     boxEl.style.backgroundColor = getRandomHexColor();
//     boxElements.push(boxEl);
//   }

//   return boxElements;
// }

// function onCreateBtnClick() {
//   const inputValue = Number(inputNumberRef.value);
//   console.log(inputValue);
//   boxesRef.append(...createBoxes(inputValue));
// }
// function onDestroyBtnClick() {
//   boxesRef.innerHTML = '';
// }



////Добавление с удалением////


// const inputEl = document.querySelector('#controls input');
// const btnCreateEl = document.querySelector('[data-create]');
// const btnDestroyEl = document.querySelector('[data-destroy]');
// const boxesEl = document.querySelector('#boxes');

// btnCreateEl.addEventListener('click', onAddsElements);
// btnDestroyEl.addEventListener('click', onClearsElements);

// function onAddsElements() {
//   if (inputEl.value === '' || inputEl.value < 1 || inputEl.value > 100) {
//     return;
//   }

//   let size = 20;
//   const arrElements = [];

//   for (let i = 0; i < inputEl.value; i++) {
//     size += 10;

//     arrElements.push(
//       `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`,
//     );
//   }

//   boxesEl.innerHTML = arrElements.join('');
//   inputEl.value = '';
// }

// function onClearsElements() {
//   boxesEl.innerHTML = '';
//   inputEl.value = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


/// Сохраняем число, что бы каждый раз не вводить одно и то же ////

const inputEl = document.querySelector('#controls input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const numberDisplayEl = document.querySelector('#number-display');

let numberOfElements = 0;

btnCreateEl.addEventListener('click', onAddsElements);
btnDestroyEl.addEventListener('click', onClearsElements);

function onAddsElements() {
  if (inputEl.value === '' || inputEl.value < 1 || inputEl.value > 100) {
    return;
  }

  let size = 20;
  const arrElements = [];

  for (let i = 0; i < inputEl.value; i++) {
    size += 10;

    arrElements.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`,
    );
  }

  boxesEl.innerHTML = arrElements.join('');
  numberOfElements = inputEl.value; 
  updateNumberDisplay(); 
  inputEl.value = '';
}

function onClearsElements() {
  boxesEl.innerHTML = '';
  numberOfElements = 0; 
  updateNumberDisplay(); 
  inputEl.value = '';
}

function updateNumberDisplay() {
  numberDisplayEl.textContent = `Number of elements: ${numberOfElements}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
