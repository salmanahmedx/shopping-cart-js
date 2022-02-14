
const subtotal = document.querySelector(".subtotal")
const tax = document.querySelector(".tax")
const total = document.querySelector(".total")


function updateShoppingCart(product, price, isIncreasing) {
    const plusBtn = document.querySelector(`.${product}-plus-btn`)
    const minusBtn = document.querySelector(`.${product}-minus-btn`)
    const itemCount = document.querySelector(`.${product}-count`)
    const productPrice = document.querySelector(`.${product}-price`)
    let itemCountValue = itemCount.value;

    if (isIncreasing) {
        itemCountValue = parseInt(itemCountValue) + 1;
        itemCount.value = itemCountValue;
    } else {
        if (itemCountValue < 1) {
            itemCount.value = 0;
        } else {
            itemCountValue = parseInt(itemCountValue) - 1;
            itemCount.value = itemCountValue;
        }
    }

    let newProductPrice = price * itemCountValue;
    productPrice.textContent = `$${newProductPrice}`;

    //invoice
    let newSubtotal = newProductPrice;
    let newTaxAmount = newProductPrice / 10;
    let newTotal = newSubtotal + newTaxAmount;

    subtotal.textContent = `$${newProductPrice}`;
    tax.textContent = `$${newTaxAmount}`;
    total.textContent = `$${newTotal}`;

}

const plusBtns = document.querySelectorAll(".plus-btn")
const minusBtns = document.querySelectorAll(".minus-btn")

plusBtns.forEach(plusBtn => plusBtn.addEventListener("click", (e) => {
    const parentElement = e.target.parentElement;
    if (parentElement.classList.contains("phone-plus-btn")) {
        updateShoppingCart("phone", 1219, true)
    }
    if (parentElement.classList.contains("case-plus-btn")) {
        updateShoppingCart("case", 59, true)
    }
}))

minusBtns.forEach(minusBtn => minusBtn.addEventListener("click", (e) => {
    const parentElement = e.target.parentElement;
    if (parentElement.classList.contains("phone-minus-btn")) {
        updateShoppingCart("phone", 1219, false)
    }
    if (parentElement.classList.contains("case-minus-btn")) {
        updateShoppingCart("case", 59, false)
    }
}))