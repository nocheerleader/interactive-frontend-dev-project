class AudioController {
    constructor() {
        this.music = new Audio('assets/audio/cartoon_music.mp3');
        this.flipAudio = new Audio('assets/audio/card_flip.wav');
        this.matchAudio = new Audio('assets/audio/card_match.mp3');
        this.victoryAudio = new Audio('assets/audio/winner.wav');
        this.gameOverAudio = new Audio('assets/audio/game_over.wav');
        this.music.volume = 0.3;
        this.music.loop = true;
    }
    startMusic() {
        this.music.play();
    }
    stopMusic() {
        this.music.pause();
        this.music.currentTime = 0;
    }
    flip() {
        this.flipAudio.play();
    }
    match() {
        this.matchAudio.play();
    }
    victory() {
        this.stopMusic();
        this.victoryAudio.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverAudio.play();
    }
}

class MemoryMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('timer')
        this.ticker = document.getElementById('flip-count');
        this.audioController = new AudioController();
    }

    startGame() {
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards(this.cardsArray);
            this.countdown = this.startCountdown();
            this.busy = false;
        }, 500)
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('game-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MemoryMatch(60, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            
        });
    });
}