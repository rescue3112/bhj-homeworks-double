const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", onSubmitHAndler);

function onSubmitHAndler(event) {
    event.preventDefault();
    const formData = new FormData(form);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.onprogress = function (load) {
        progress.value = load.loaded;
        progress.max = load.total;
    }

    xhr.send(formData);
}

