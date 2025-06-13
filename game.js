const symbols = ['🍎', '🍊', '🍇', '🍉', '🍓', '🍑', '🍒', '🍍'];
const cards = [];
let firstCard, secondCard;
let lockBoard = false;
let moves = 0;
let timer;
let timeElapsed = 0;

// تكرار الرموز مرتين للحصول على أزواج
const duplicatedSymbols = [...symbols, ...symbols];

// خلط الرموز بشكل عشوائي
const shuffledSymbols = duplicatedSymbols.sort(() => Math.random() - 0.5);

// إنشاء البطاقات
shuffledSymbols.forEach(symbol => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = symbol;
    card.addEventListener('click', () => flipCard(card));
    cards.push(card);
});

document.getElementById('game-board').append(...cards);

// بدء التوقيت
startTimer();

function flipCard(card) {
    if (lockBoard) return;
    if (card === firstCard) return;

    card.classList.add('flipped');

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    moves++;
    document.getElementById('moves').textContent = moves;

    checkForMatch();
}

function checkForMatch() {
    lockBoard = true;

    if (firstCard.innerHTML === secondCard.innerHTML) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
        checkWin();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function checkWin() {
    const flippedCards = document.querySelectorAll('.card.flipped');
    if (flippedCards.length === cards.length) {
        clearInterval(timer);
        alert(`مبروك! لقد فزت!\nالوقت: ${timeElapsed} ثانية\nالمحاولات: ${moves}`);
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeElapsed++;
        document.getElementById('timer').textContent = timeElapsed;
    }, 1000);
}

// إعادة تشغيل اللعبة
document.getElementById('restart-btn').addEventListener('click', () => {
    clearInterval(timer);
    timeElapsed = 0;
    moves = 0;
    document.getElementById('timer').textContent = 0;
    document.getElementById('moves').textContent = 0;
    cards.forEach(card => {
        card.classList.remove('flipped');
        card.addEventListener('click', flipCard);
    });
    startTimer();
});
