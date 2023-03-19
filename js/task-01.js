const listWithItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${listWithItem.length}`);

listWithItem.forEach(listEl => {
  console.log('');
  console.log(`Category: ${listEl.firstElementChild.textContent}`);
  console.log(`Elements: ${listEl.lastElementChild.querySelectorAll('li').length}`);
});
