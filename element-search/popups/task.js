const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
// Делаем основное модальное окно активным
modalMain.classList.add("modal_active");
// Закрытие активного окна
let closeItems = document.querySelectorAll(".modal__close_times");
let array = Array.from(closeItems);
array.forEach(element => {
    element.onclick = closeModal;
});

function closeModal(event) {
    let parent = event.target.closest(".modal");
    parent.classList.remove("modal_active");    
}

    
  
// клик по элементу show-success
const showSuccess = modalMain.querySelector(".show-success");
showSuccess.onclick = showSuccessModal;
function showSuccessModal() {
    modalSuccess.classList.add("modal_active");
    modalMain.classList.remove("modal_active");
}