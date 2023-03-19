const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listId = document.getElementById('ingredients');

for (const ingredient of ingredients) {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  listId.appendChild(liEl);
}
console.log(listId);
