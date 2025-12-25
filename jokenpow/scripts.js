const fireworks = document.querySelector("#fireworks")
const sadOverlay = document.querySelector("#sad-overlay")
const resultImage = document.querySelector("#result-image")
const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0
let confettiInterval = null
let lightningInterval = null

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const images = {
    win: "https://cdn-icons-png.flaticon.com/512/742/742751.png",
    lose: "https://cdn-icons-png.flaticon.com/512/742/742905.png",
    draw: "https://cdn-icons-png.flaticon.com/512/742/742774.png"
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    return choices[Math.floor(Math.random() * 3)]
}

const playTheGame = (human, machine) => {
    clearEffects()
    resultImage.style.display = "block"

    if (human === machine) {
        result.innerHTML = "Deu empate!"
        resultImage.src = images.draw
        return
    }

    const humanWon =
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)

    if (humanWon) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
        resultImage.src = images.win
        showConfetti()
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa!"
        resultImage.src = images.lose
        showLightning()
    }
}

const resetGame = () => {
    humanScoreNumber = 0
    machineScoreNumber = 0

    humanScore.innerHTML = 0
    machineScore.innerHTML = 0

    result.innerHTML = "Escolha uma opção para jogar"
    resultImage.style.display = "none"
    resultImage.src = ""

    clearEffects()
}

const clearEffects = () => {
    fireworks.innerHTML = ""

    document.querySelectorAll(".lightning-ray").forEach(ray => ray.remove())

    sadOverlay.classList.remove("active")
    document.body.classList.remove("shake-screen")

    clearInterval(confettiInterval)
    clearInterval(lightningInterval)
}

/* 🎊 CONFETES */
const showConfetti = () => {
    const endTime = Date.now() + 5000

    confettiInterval = setInterval(() => {
        for (let i = 0; i < 6; i++) {
            const confetti = document.createElement("div")
            confetti.classList.add("confetti")

            confetti.style.left = Math.random() * window.innerWidth + "px"
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
            confetti.style.animationDuration = Math.random() * 2 + 3 + "s"

            fireworks.appendChild(confetti)
            setTimeout(() => confetti.remove(), 5000)
        }

        if (Date.now() > endTime) clearInterval(confettiInterval)
    }, 200)
}

/* ⚡ RAIOS */
const showLightning = () => {
    // escurece a tela
    sadOverlay.classList.add("active")

    // tremida leve
    document.body.classList.add("shake-screen")

    setTimeout(() => {
        document.body.classList.remove("shake-screen")
    }, 400)

    const totalRays = 7
    let created = 0

    lightningInterval = setInterval(() => {
        const ray = document.createElement("div")
        ray.classList.add("lightning-ray")

        ray.style.left = Math.random() * (window.innerWidth - 20) + "px"

        document.body.appendChild(ray)

        setTimeout(() => ray.remove(), 2500)

        created++

        if (created >= totalRays) {
            clearInterval(lightningInterval)

            setTimeout(() => {
                sadOverlay.classList.remove("active")
            }, 1500)
        }
    }, 400)
}
