const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", numberOfCategories.length);


numberOfCategories.forEach((category) => {
    console.log("Category: ", category.firstElementChild.textContent);
    console.log("Elements: ", category.lastElementChild.children.length);
})

// console.log("-----------------");
// const body = document.body;
// const firstElement = body.firstElementChild;
// const catElements = firstElement.nextElementSibling;
// console.log("Number of categories: ", catElements.children.length);

// const listsFirst = catElements.firstElementChild;
// const categoryElFirst = listsFirst.firstElementChild.textContent;
// console.log("Category: ", categoryElFirst);
// const elementsFirst = listsFirst.lastElementChild.children.length
// console.log("Elements: ",elementsFirst);


// const listSecond = listsFirst.nextElementSibling;
// const categoryElSecond = listSecond.firstElementChild.textContent;
// console.log("Category: ",categoryElSecond);
// const elementsSecond = listSecond.lastElementChild.children.length
// console.log("Elements: ",elementsSecond);

// const listThird = catElements.lastElementChild;
// const categoryElThird = listThird.firstElementChild.textContent;
// console.log("Category: ",categoryElThird);
// const elementsThird = listThird.lastElementChild.children.length
// console.log("Elements: ",elementsThird);


