const loveText = document.getElementById("loveText");
const heartContainer = document.querySelector(".heart-container");

// Lista de "Eu te amo" em vários idiomas
const loveMessages = [
    "Eu te amo", "I love you", "Je t’aime", "Ich liebe dich",
    "Te quiero", "Ti amo", "Я тебя люблю", "我爱你", "사랑해",
    "Te iubesc", "Ik hou van jou", "Σ'αγαπώ", "Jeg elsker dig",
    "Jeg elsker deg", "Kocham cię", "Volim te"
];

// Troca o texto a cada 2 segundos
let index = 0;
setInterval(() => {
    loveText.textContent = loveMessages[index];
    index = (index + 1) % loveMessages.length;
}, 2000);

// Criar corações aleatórios
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Escolher aleatoriamente entre diferentes emojis de coração
    const heartEmojis = ["❤️", "💖", "💙", "💛", "💜", "💚", "🩷"];
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    heart.style.left = Math.random() * 100 + "vw"; // Posição aleatória na tela
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Entre 2s e 5s

    heartContainer.appendChild(heart);

    // Remover coração após 5s
    setTimeout(() => {
        heart.remove();
    }, 5000);

    // Tocar som ao gerar um coração
    const sound = new Audio("meu-audio.mp3");
    sound.play();
}

// Criar corações a cada 300ms
setInterval(createHeart, 300);

