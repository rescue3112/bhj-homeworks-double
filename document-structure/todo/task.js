const taskInput = document.getElementById("task__input");
const addButton = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list");

const form = document.getElementById("tasks__form");
// Не отправляем форму по сабмиту
form.addEventListener('submit', (event) => event.preventDefault());

// Вешаем обработчик Enter
window.addEventListener('keydown', processEnter);

// Вешаем обработчик на кнопку - создаем новую таску
addButton.addEventListener("click", addNewTask);

// Обработчик Enter
function processEnter(event) {
    if (event.key === 'Enter') {
        taskAdd();
    }
}

// Создание таски
function addNewTask() {
    let text = taskInput.value.trim();
    if (text.length > 0) {
        let template = `<div class="task">
            <div class="task__title">${text}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;

        taskList.innerHTML += template;

        taskInput.value = "";
    }

    let list = Array.from(document.querySelectorAll(".task"));
    let removeItems = Array.from(document.querySelectorAll(".task__remove"));

    // Вешаем обработчики на кнопки удаления
    removeItems.forEach(element => element.addEventListener('click', removeTask));
}

// Удаление таски
function removeTask(event) {
    const link = event.target;
    const taskItem = link.closest(".task");
    taskItem.remove();
}
