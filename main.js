const yourResultElement = document.querySelector('.yourResult')

const computerResultElement = document.querySelector('.computerResult')

const gameResult = document.querySelector('.green-text')

const stonButtonElement = document.querySelector('.ston')

const scissorsButtonElement = document.querySelector('.scissors')

const paperButtonElement = document.querySelector('.paper')

const yourNowResult = document.querySelector('.your-now-result')

const computerNowResult = document.querySelector('.computer-now-result')

const yourNowResultImgElement = document.querySelector('.your-result')

const computerNowResultImgElement = document.querySelector('.computer-result')

const restartBtn = document.querySelector('.restart-btn')
let yourResult = 0,
    computerResult = 0;
    let yourImg = document.createElement('img')
    let computerImg = document.createElement('img')
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return k =  Math.floor(Math.random() * (max - min)) + min; 
}
    let your, computer;
stonButtonElement.onclick = function () {
    your = 1
    computer = getRandomInt(1,4)
    yourImg.src = 'tosh.jpeg'
    yourNowResult.append(yourImg)
    if(your == 1 && computer == 1){
        gameResult.textContent = 'Durrang'; 
        computerImg.src ='tosh.jpeg'
        computerNowResult.append(computerImg)
    }else if(your == 1 && computer == 2){
        yourResult++
        yourResultElement.textContent = yourResult
        gameResult.textContent = 'Siz yuttingiz';
        computerImg.src ='qaychi.jpeg'
        computerNowResult.append(computerImg)
    }else if(your == 1 && computer == 3){
        computerResult++
        computerResultElement.textContent = computerResult
        gameResult.textContent = 'Yutqazdingiz';
        computerImg.src ='qogoz.png'
        computerNowResult.append(computerImg)
    }
}
scissorsButtonElement.onclick = function () {
    your = 2
    computer = getRandomInt(1,4)
    yourImg.src = 'qaychi.jpeg'
    if(your == 2 && computer == 1){
        computerResult++
        computerResultElement.textContent = computerResult
        gameResult.textContent = 'Yutqazdingiz'; 
        computerImg.src ='tosh.jpeg'
        computerNowResult.append(computerImg)
    }else if(your == 2 && computer == 2){
        gameResult.textContent = 'Durrang';
        computerImg.src ='qaychi.jpeg'
        computerNowResult.append(computerImg)
    }else if(your == 2 && computer == 3){
        yourResult++
        yourResultElement.textContent = yourResult
        gameResult.textContent = 'Yutdingiz';
        computerImg.src ='qogoz.png'
        computerNowResult.append(computerImg)
    }
}
paperButtonElement.onclick = function () {
    your = 3
    computer = getRandomInt(1,4)
    yourImg.src = 'qogoz.png'
    if(your == 3 && computer == 1){
        yourResult++
        yourResultElement.textContent = yourResult
        gameResult.textContent = 'Yutdingiz';
        computerImg.src ='tosh.jpeg'
        computerNowResult.append(computerImg)
    }else if(your == 3 && computer == 2){
        computerResult++
        computerResultElement.textContent = computerResult
        gameResult.textContent = 'Yutqazdingiz'; 
        computerImg.src ='qaychi.jpeg'
        computerNowResult.append(computerImg)
    }else if(your == 3 && computer == 3){
        gameResult.textContent = 'Durrang';
        computerImg.src ='qogoz.png'
        computerNowResult.append(computerImg)
    }
}
restartBtn.addEventListener('click', e=>{
    yourResult = 0,
    computerResult = 0
    computerResultElement.textContent = computerResult
    yourResultElement.textContent = yourResult
})
