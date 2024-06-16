document.getElementById('generate-btn').addEventListener('click', generateNumbers);
document.getElementById('copy-btn').addEventListener('click', copyNumbers);

function generateNumbers() {
    let redBalls = [];
    while (redBalls.length < 6) {
        let num = Math.floor(Math.random() * 33) + 1;
        if (!redBalls.includes(num)) {
            redBalls.push(num);
        }
    }
    redBalls.sort((a, b) => a - b);

    let blueBall = Math.floor(Math.random() * 16) + 1;

    displayNumbers(redBalls, blueBall);
    document.getElementById('copy-btn').style.display = 'inline-block';
}

function displayNumbers(redBalls, blueBall) {
    const numbersDiv = document.getElementById('numbers');
    numbersDiv.innerHTML = '';

    redBalls.forEach(num => {
        let ball = document.createElement('div');
        ball.className = 'number red-ball';
        ball.textContent = num;
        numbersDiv.appendChild(ball);
    });

    let blue = document.createElement('div');
    blue.className = 'number blue-ball';
    blue.textContent = blueBall;
    numbersDiv.appendChild(blue);
}

function copyNumbers() {
    const numbersDiv = document.getElementById('numbers');
    let numbersText = '';

    numbersDiv.querySelectorAll('.number').forEach(num => {
        numbersText += num.textContent + ' ';
    });

    const tempInput = document.createElement('input');
    tempInput.value = numbersText.trim();
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('号码已复制');
}