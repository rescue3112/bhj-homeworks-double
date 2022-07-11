const interestContainer = document.querySelector('.interests_main');

interestContainer.addEventListener('click', handler);

function handler(event) {
    // текущий элемент, по которому кликнули
    let currentElement = event.target;
    const { parentElement } = event.target;
    const labelText = parentElement.innerText;

    if (labelText === 'Еда' || labelText === 'Домашние животные' || labelText === 'Котики') {
        const childElements = [...parentElement.nextElementSibling.querySelectorAll('label input')];
        if (currentElement.checked) {
            childElements.forEach((el) => {
                el.checked = true;
            });
        } else {
            childElements.forEach((el) => {
                el.checked = false;
            });
        }
    }

    while (currentElement) {
        const parent = currentElement.closest(['ul']).parentNode.querySelector('input');

        const siblings = Array.from(parent.closest('li').querySelector('ul').querySelectorAll('input'));

        const checkStatus = siblings.map((check) => check.checked);
        const every = checkStatus.every(Boolean);
        const some = checkStatus.some(Boolean);

        parent.checked = every;
        parent.indeterminate = !every && every !== some;

        currentElement = currentElement !== parent ? parent : 0;
    }
}


