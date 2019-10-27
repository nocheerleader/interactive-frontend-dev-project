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

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('game-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            
        });
    });
}