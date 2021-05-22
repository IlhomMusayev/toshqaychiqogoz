const yourResultElement = document.querySelector('.yourResult')

const computerResultElement = document.querySelector('.computerResult')

const gameResult = document.querySelector('.green-text')

const stonButtonElement = document.querySelector('.ston')

const scissorsButtonElement = document.querySelector('.scissors')

const paperButtonElement = document.querySelector('.paper')

const yourNowResult = document.querySelector('.your-now-result')

const computerNowResult = document.querySelector('.computer-now-result')

let yourResult = 0,
    computerResult = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return k =  Math.floor(Math.random() * (max - min)) + min; 
}
    let your, computer;
stonButtonElement.onclick = function () {
    your = 1
    computer = getRandomInt(1,4)
    console.log(computer);
    if(your == 1 && computer == 1){
        gameResult.textContent = 'Durrang'; 

    }else if(your == 1 && computer == 2){
        yourResult++
        yourResultElement.textContent = yourResult
        gameResult.textContent = 'Siz yuttingiz';
    }else if(your == 1 && computer == 3){
        computerResult++
        computerResultElement.textContent = computerResult
        gameResult.textContent = 'Yutqazdingiz';
    }
}
scissorsButtonElement.onclick = function () {
    your = 2
    computer = getRandomInt(1,4)
    if(your == 2 && computer == 1){
        computerResult++
        computerResultElement.textContent = computerResult
        gameResult.textContent = 'Yutqazdingiz'; 
    }else if(your == 2 && computer == 2){
        gameResult.textContent = 'Durrang';
    }else if(your == 2 && computer == 3){
        yourResult++
        yourResultElement.textContent = yourResult
        gameResult.textContent = 'Yutdingiz';
    }
}
paperButtonElement.onclick = function () {
    your = 3
    computer = getRandomInt(1,4)
    if(your == 3 && computer == 1){
        yourResult++
        yourResultElement.textContent = yourResult
        gameResult.textContent = 'Yutdingiz';
    }else if(your == 3 && computer == 2){
        computerResult++
        computerResultElement.textContent = computerResult
        gameResult.textContent = 'Yutqazdingiz'; 
    }else if(your == 3 && computer == 3){
        gameResult.textContent = 'Durrang';
    }
}
