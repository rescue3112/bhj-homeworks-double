function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = () => {
        if (getHole(i).className == 'hole hole_has-mole') {
            document.getElementById('dead').textContent++;
            if (document.getElementById('dead').textContent == 10) {
                alert('Победа');
                document.getElementById('dead').textContent = 0;
                document.getElementById('lost').textContent = 0;
            }
        } else {
            document.getElementById('lost').textContent++;
            if (document.getElementById('lost').textContent == 5) {
                alert('Поражение');
                document.getElementById('dead').textContent = 0;
                document.getElementById('lost').textContent = 0;
            }
        } 
    };
} 
