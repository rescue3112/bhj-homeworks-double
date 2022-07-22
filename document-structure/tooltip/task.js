const links = Array.from(document.querySelectorAll('.has-tooltip'));

links.forEach(element => {
    let tooltipText = element.getAttribute("title");
    element.insertAdjacentHTML("afterEnd",
        `<div class = 'tooltip'> ${tooltipText} </div>`);
});

const tooltips = Array.from(document.querySelectorAll(".tooltip"));

links.forEach(element => element.addEventListener("click", processClick));

function processClick(event) {
    const link = event.target;

    event.preventDefault();

    let tooltip = link.nextElementSibling;
    if (tooltip.classList.contains("tooltip_active")) {
        tooltip.classList.remove("tooltip_active");
    } else {
        tooltips.forEach(element => element.classList.remove("tooltip_active"));

        tooltip.classList.add("tooltip_active");

        let topValue = link.getBoundingClientRect().bottom;
        let leftValue = link.getBoundingClientRect().left;
        tooltip.setAttribute("style", `top: ${topValue}px; left: ${leftValue}px`);
    }


}


