const nombreSecret = 9;
let etapes = 0;

function jouer() {
    const input = document.getElementById("userGuess");
    const feedback = document.getElementById("feedback");
    const stepsDisplay = document.getElementById("steps");
    const box = document.getElementById("gameBox");
    
    let essai = parseInt(input.value);
    
    if (isNaN(essai)) return;

    etapes++;

    if (essai === nombreSecret) {
        // VICTOIRE
        feedback.innerText = "FÉLICITATIONS !";
        stepsDisplay.innerText = "Vous avez prix " + etapes + " etapes pour deviner le nombre secret";
        
        // Effets visuels
        box.classList.add('victory-glow');
        input.disabled = true;
        document.getElementById('btnJouer').classList.add('hidden');
        document.getElementById('btnRestart').classList.remove('hidden');
        
        lancerFeuArtifice();
    } else {
        // INDICES
        if (essai < nombreSecret) {
            feedback.innerText = "Le nombre secret est plus grand. Réessayez !";
        } else {
            feedback.innerText = "Le nombre secret est plus petit. Réessayez !";
        }
        input.value = "";
        input.focus();
    }
}

// Fonction pour l'effet "Fleurs de fête / Confettis"
function lancerFeuArtifice() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Position aléatoire
        confetti.style.left = Math.random() * 100 + 'vw';
        
        // Couleur aléatoire (fleurs colorées)
        const colors = ['#ff00ff', '#00d4ff', '#00ff88', '#ffcc00', '#ff4d4d'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Vitesse aléatoire
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.opacity = Math.random();
        
        document.body.appendChild(confetti);
        
        // Nettoyage de la mémoire après l'animation
        setTimeout(() => confetti.remove(), 4000);
    }
}