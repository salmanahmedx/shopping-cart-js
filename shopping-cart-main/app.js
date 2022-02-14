const plusBtns = document.querySelectorAll(".plus-btn")
const minusBtns = document.querySelectorAll(".minus-btn")
const itemCount = document.querySelector("#item-count")
let itemCountValue = itemCount.value;

plusBtns.forEach(plusBtn => plusBtn.addEventListener("click", (e) => {
    itemCountValue = parseInt(itemCountValue) + 1; //variable containing the value from a attribute
    itemCount.value = itemCountValue; //selecting and changing attribute
}))
minusBtns.forEach(minusBtn => minusBtn.addEventListener("click", (e) => {
    if (itemCountValue < 1) {
        itemCount.value = 0;
    } else {
        itemCountValue = parseInt(itemCountValue) - 1;
        itemCount.value = itemCountValue;
    }
}))

