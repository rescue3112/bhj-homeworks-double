const loader = document.getElementById("loader");
const items = document.getElementById("items");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        loader.classList.remove("loader_active");

        const responseText = JSON.parse(xhr.responseText);
        console.log(responseText);
        const currencyList = responseText.response.Valute;
        console.log(currencyList);

        for (let i in currencyList) {
            let text = ` <div class="item">
                            <div class="item__code">${currencyList[i].CharCode}</div>
                            <div class="item__value">${currencyList[i].Value}</div>
                            <div class="item__currency">руб.</div>
                            </div>
                            `
            items.insertAdjacentHTML("beforeEnd", text);
        }
    }
}