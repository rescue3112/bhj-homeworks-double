const title = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();
xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(xhr.responseText);
        console.log(response);
        
        // Заголовок
        title.append(response.data.title);

        // Варианты ответов
        response.data.answers.forEach(element => {
            let btn = document.createElement("button");
            btn.className = "poll__answer";
            btn.append(element);

            answers.appendChild(btn);   
        });

        const results = Array.from(document.querySelectorAll(".poll__answer"));
        results.forEach(element => {
            element.addEventListener("click", () => {
                alert("Спасибо, ваш голос засчитан!");
            });
        });
    }
}

