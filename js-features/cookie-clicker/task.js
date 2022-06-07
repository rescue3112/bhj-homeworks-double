const image = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
let timeFirst, timeSecond;
function Onclick() {
    clicker.textContent++;
    if (image.width == 150) {
        image.width = 200;
        timeFirst = new Date().getTime();
        console.log(timeFirst - timeSecond);
        speed.textContent = 1 / ((timeFirst - timeSecond) / 1000);

    }
    else {
        image.width = 150;
        timeSecond = new Date().getTime();
        console.log(timeSecond - timeFirst);
        speed.textContent = 1 / ((timeSecond - timeFirst) / 1000);
    }
}
image.onclick = Onclick

