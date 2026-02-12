// 1. La machine choisit un nombre secret aléatoire avec Math.floor
// On multiplie par 100 pour la plage, et +1 pour commencer à 1 au lieu de 0
let nombreSecret = Math.floor(Math.random() * 100) + 1;
let etapes = 0;

function jouer() {
    const input = document.getElementById("userGuess");
    const feedback = document.getElementById("feedback");
    const stepsDisplay = document.getElementById("steps");
    const box = document.getElementById("gameBox");
    
    let essai = parseInt(input.value);
    
    if (isNaN(essai)) {
        feedback.innerText = "⚠️ Entre un nombre valide !";
        return;
    }

    etapes++; // Règle 4 : L'utilisateur réessaye

    // Règle 5 : Jusqu'à ce que l'utilisateur trouve le nombre
    if (essai === nombreSecret) {
        // VICTOIRE
        feedback.innerText = "🎉 FÉLICITATIONS !";
        feedback.style.color = "#00ff88";
        
        // Règle 6 : Message exact de la photo
        stepsDisplay.innerText = "Vous avez prix " + etapes + " etapes pour deviner le nombre secret";
        
        // Effets pro
        box.classList.add('victory-glow');
        input.disabled = true;
        document.getElementById('btnJouer').style.display = 'none';
        document.getElementById('btnRestart').classList.remove('hidden');
        
        lancerFeuArtifice();
    } else {
        // Règle 3 : Plus grand ou plus petit
        if (essai < nombreSecret) {
            feedback.innerText = "📈 Le nombre secret est plus grand !";
            feedback.style.color = "#ff4d4d";
        } else {
            feedback.innerText = "📉 Le nombre secret est plus petit !";
            feedback.style.color = "#ff4d4d";
        }
        input.value = ""; // Vide le champ pour rejouer plus vite
        input.focus();
    }
}

// Fonction pour l'effet "Fleurs de fête"
function lancerFeuArtifice() {
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        
        const colors = ['#ff00ff', '#00d4ff', '#00ff88', '#ffcc00', '#ff4d4d'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        
        // Supprime après l'animation pour ne pas ralentir le navigateur
        setTimeout(() => confetti.remove(), 4000);
    }
}