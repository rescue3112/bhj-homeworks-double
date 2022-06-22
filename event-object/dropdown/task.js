const dropdown = document.querySelector(".dropdown");
const button = dropdown.querySelector(".dropdown__value");
const items = Array.from(dropdown.querySelectorAll(".dropdown__link"));

button.addEventListener('click', showList);

items.forEach(element => {
    element.addEventListener("click", changeItem);
});

function changeItem(event) {
    event.preventDefault();

    const selected = event.target;
    button.textContent = selected.textContent;

    const parent = selected.closest(".dropdown__list");
    parent.classList.remove("dropdown__list_active");
}


function showList() {
    const list = dropdown.querySelector("ul");

    if (list.classList.contains("dropdown__list_active")) {
        list.classList.remove("dropdown__list_active");
    } else {
        list.classList.add("dropdown__list_active");
    }

}

