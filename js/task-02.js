const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')
console.log(ingredientsList);

const ingredientsItem = ingredients.map(el => {
    const item = document.createElement('li');
    item.textContent = el;

    return item;
});

ingredientsList.append(...ingredientsItem);
