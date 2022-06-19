const menuLinks = document.querySelectorAll(".menu__link");

let array = Array.from(menuLinks);

array.forEach(element => {
    const parent = element.closest(".menu__item");
    const submenu = parent.querySelector(".menu_sub");
    if (submenu != null) {
        element.onclick = openSubMenu;
        //меняем классы
    }

});

function openSubMenu(event) {
    // Запрещаем дефолтное поведение - переход по ссылке
    event.preventDefault();
    console.log("[openSubMenu]" + event.target.closest(".menu__item").innerHTML);
    const parent = event.target.closest(".menu__item");
    const submenu = parent.querySelector(".menu_sub");

    if (submenu.classList.contains("menu_active")) {
        submenu.classList.remove("menu_active");
    } else {
        // нужно еще закрыть все открытые до этого подменю
        const allMenuSubs = document.querySelectorAll(".menu_sub");
        for (let i = 0; i < allMenuSubs.length; i++) {
            allMenuSubs.item(i).classList.remove("menu_active");
        }

        // делаем видимым
        submenu.classList.add("menu_active");
    }
}