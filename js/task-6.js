

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
