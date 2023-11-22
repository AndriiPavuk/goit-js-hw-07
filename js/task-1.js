const categoriesItemsRef = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesItemsRef.length}`);

categoriesItemsRef.forEach(category => {
  const categoryTitleRef = category.querySelector('h2');
  const categoryListRef = category.querySelectorAll('li');

  console.log(`\nCategory: ${categoryTitleRef.textContent} \nElements: ${categoryListRef.length}`);
});
