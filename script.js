// On multiplie par 22 pour que le 21 soit inclus dans l'arrondi inférieur
let nombreSecret = Math.floor(Math.random() * 22); 
let etapes = 0;

function jouer() {
    const input = document.getElementById("userGuess");
    const feedback = document.getElementById("feedback");
    const stepsDisplay = document.getElementById("steps");
    
    let essai = parseInt(input.value);
    
    if (isNaN(essai)) return;

    etapes++;

    if (essai === nombreSecret) {
        feedback.innerText = "🎉 FÉLICITATIONS !";
        feedback.style.color = "#00ff88";
        // Message exact de ton image (avec la faute demandée)
        stepsDisplay.innerText = "Vous avez prix " + etapes + " etapes pour deviner le nombre secret";
        
        document.getElementById("btnJouer").classList.add("hidden");
        document.getElementById("btnRestart").classList.remove("hidden");
        input.disabled = true;
        
        lancerFleurs();
    } 
    else if (essai < nombreSecret) {
        feedback.innerText = "Le nombre est trop petit !";
        feedback.style.color = "#ff4d4d";
        input.value = "";
        input.focus();
    } 
    else {
        feedback.innerText = "Le nombre est trop grand !";
        feedback.style.color = "#ff4d4d";
        input.value = "";
        input.focus();
    }
}

function lancerFleurs() {
    for (let i = 0; i < 100; i++) {
        const div = document.createElement("div");
        div.className = "confetti";
        div.style.left = Math.random() * 100 + "vw";
        div.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        div.style.animationDuration = (Math.random() * 2 + 2) + "s";
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 4000);
    }
}