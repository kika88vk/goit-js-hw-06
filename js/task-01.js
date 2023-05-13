const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", numberOfCategories.length);
// const categoriesTitles = document.querySelectorAll(".item > h2");

numberOfCategories.forEach((category) => {
    console.log("Category: ", category.querySelector("h2").textContent);
    console.log("Elements: ", category.querySelectorAll("li").length);
})