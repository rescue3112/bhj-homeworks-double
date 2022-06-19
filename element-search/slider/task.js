const prevPointer = document.querySelector(".slider__arrow_prev");
const nextPointer = document.querySelector(".slider__arrow_next");
// Слайды
const slideElements = Array.from(document.querySelectorAll(".slider__item"));
// Доты
const dotElements = Array.from(document.querySelectorAll(".slider__dot"));
prevPointer.onclick = prevSlide;
nextPointer.onclick = nextSlide;
dotElements.forEach(element => {
    //вешаем обработчик
    element.onclick = switchSlideByDot;
});

function prevSlide() {
    let index = removeActiveState();

    // Получаем индекс предыдущего элемента-слайда
    index = (index == 0) ? (index = slideElements.length - 1) : index - 1;

    setActiveSlide(index);    
}
function nextSlide() {
    let index = removeActiveState();
    // Получаем индекс следующего элемента-слайда
    index = (index == slideElements.length - 1) ? 0 : index + 1;
    setActiveSlide(index);
}
function switchSlideByDot(event) {
    const dot = event.target;   
    let index = dotElements.findIndex(item => item === dot);

    removeActiveState();

    setActiveSlide(index);    
}
function setActiveSlide(index){    
    setActiveDot(index);
    slideElements[index].classList.add("slider__item_active");
}
function setActiveDot(index) {
    // Перекрашиваем соответствующий дот
    dotElements.forEach(element => {
        element.classList.remove("slider__dot_active");
    });
    dotElements[index].classList.add("slider__dot_active");
}
function removeActiveState(){
    let index = slideElements.findIndex((item) => item.classList.contains("slider__item_active"));
    // Элемент больше не активен, =>, убираем у него класс active
    slideElements[index].classList.remove("slider__item_active");
    return index;
}