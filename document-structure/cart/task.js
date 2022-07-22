// Контролы уменьшения / увеличения кол-ва товара в корзине
const controlsDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const controlsInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
// Кнопки добавления товара в корзину
const addButtons = Array.from(document.querySelectorAll(".product__add"));
// Корзина
const basketElement = document.querySelector(".cart__products");

controlsDec.forEach(element => {
    element.addEventListener("click", processDec);
});

controlsInc.forEach(element => {
    element.addEventListener("click", processInc);
});


addButtons.forEach(element => {
    element.addEventListener("click", addToBasket);
});

function processDec(event) {
    const control = event.target;
    const quantityItem = control.closest(".product__quantity-controls")
        .querySelector(".product__quantity-value");

    // Уменьшаем счетчик
    let value = quantityItem.textContent * 1;
    value = (value > 1) ? value - 1 : 1;
    quantityItem.textContent = value;
}

function processInc(event) {
    const control = event.target;
    const quantityItem = control.closest(".product__quantity-controls")
        .querySelector(".product__quantity-value");

    // Увеличиваем счетчик
    let value = quantityItem.textContent * 1;
    quantityItem.textContent = value + 1;


}

function addToBasket(event) {
    const button = event.target;
    const productItem = button.closest(".product");
    let id = productItem.dataset.id;
    let quantity = productItem.querySelector(".product__quantity-value").textContent * 1;
    let img = productItem.querySelector(".product__image").getAttribute("src");

    // Проверяем, не добавлен ли уже этот продукт в корзину
    let addedProducts = Array.from(basketElement.querySelectorAll(".cart__product"));
    let item = addedProducts.filter(element => element.dataset.id === id)[0];

    if (item) {
        // просто увеличиваем кол-во единиц продукта
        let quantityItem = item.querySelector(".cart__product-count");
        quantityItem.textContent = quantityItem.textContent * 1 + quantity;
    } else {
        basketElement.innerHTML += `
        <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${img}">
            <div class="cart__product-count">${quantity}</div>        
        </div>`;
    }
}

