const rotator = document.querySelector(".rotator");
const items = Array.from(rotator.querySelectorAll(".rotator__case"));
let index = 0;

setInterval(change, 1000);

function change() {
    const oldItem = items.find(item => item.classList.contains("rotator__case_active"));
    oldItem.classList.remove("rotator__case_active");

    if (index == items.length) {
        index = 0;
    }

    // показываем элемент
    items[index].classList.add("rotator__case_active");
    
    index++;
}

