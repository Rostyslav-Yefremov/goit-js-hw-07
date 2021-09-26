// Короткий вариант

// const listRef = document.querySelectorAll('.item');
// console.log(`В списке ${listRef.length} категории`);
// listRef.forEach((el =>
//   console.log(`Категория:${el.firstElementChild.textContent}
// Количество элементов:${el.lastElementChild.children.length}`)
// ));


// Более понятный вариант

const itemsRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsRef.length} категории`);
itemsRef.forEach(el => {
const h2 = el.querySelector('h2');
const elItems = el.querySelectorAll('li');
    console.log(`Категория: ${h2.textContent} 
Количество элементов: ${elItems.length}`);
});