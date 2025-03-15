let clickCount = 0;

function handleClick() {
    clickCount++;

    document.getElementById("title").style.opacity = "1";
    document.getElementById("title").style.transform = "scale(1)";
    document.getElementById("message").style.opacity = "1";
    document.getElementById("ea-text").style.opacity = "1";

    createBalloons(5);

    if (clickCount >= 3) {
        setTimeout(removeBalloons, 1000);
        clickCount = 0;
    }

    // Tampilkan tombol baru setelah Celebrate diklik
    document.getElementById("new-btn").classList.remove("hidden");
}

function createBalloons(count) {
    for (let i = 0; i < count; i++) {
        let balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.background = getRandomPastelColor();
        balloon.style.left = Math.random() * window.innerWidth + "px";
        balloon.style.animationDuration = (3 + Math.random() * 3) + "s";
        document.body.appendChild(balloon);
    }
}

function removeBalloons() {
    let balloons = document.querySelectorAll(".balloon");
    balloons.forEach(balloon => balloon.remove());
}

function getRandomPastelColor() {
    let colors = ["#ffb6c1", "#ffdab9", "#add8e6", "#98fb98", "#dda0dd", "#fddde6"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showLongText() {
    document.getElementById("long-text").style.display = "block";
    document.getElementById("long-text").style.opacity = "1";
}

// Jalankan balon terus menerus sejak awal
setInterval(() => createBalloons(2), 2000);