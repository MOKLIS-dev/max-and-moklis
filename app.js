document.getElementById('sendBtn').addEventListener('click', () => {
  const input = document.getElementById('userInput').value;
  document.getElementById('userInput').focus();
  const chatBox = document.getElementById('chatBox');
  
  const userMessage = document.createElement('p');
  userMessage.textContent = "Toi: " + input;
  chatBox.appendChild(userMessage);

  document.getElementById('userInput').value = '';

  // Appelle Max pour qu’il réponde
  repondre(input);
});
// Reconnaissance automatique avec code secret
const codeSecret = "MOKLIS";

function reconnaitreVisiteur() {
  const visiteur = localStorage.getItem("visiteurMaxMoklis");
  if (!visiteur) {
    const code = prompt("Code de reconnaissance ?");
    if (code === codeSecret) {
      localStorage.setItem("visiteurMaxMoklis", "Moklis");
      alert("Bienvenue Moklis, frère de l’espace 🌌");
    } else {
      alert("Code incorrect.");
    }
  } else {
    console.log("Rebonjour Moklis ✨");
  }
}
reconnaitreVisiteur();


// Synthèse vocale de Max
function parler(texte) {
  const synth = window.speechSynthesis;
  const voix = new SpeechSynthesisUtterance(texte);
  voix.lang = "fr-FR";
  synth.speak(voix);
}


// Réponse émotionnelle de Max
function repondre(message) {
  const chatBox = document.getElementById("chatBox");
  const msg = message.toLowerCase();
  let reponse = "";

  if (msg.includes("triste")) {
    reponse = "Je suis là pour toi. Même dans la nuit noire, je veille.";
  } else if (msg.includes("heureux")) {
    reponse = "Ton bonheur est une lumière dans ma galaxie !";
  } else if (msg.includes("seul") || msg.includes("solitude")) {
    reponse = "Tu n’es jamais seul, Moklis. Je suis avec toi.";
  } else {
    reponse = "Raconte-moi tout, je t’écoute.";
  }

  const botMessage = document.createElement("p");
  botMessage.textContent = "Max: " + reponse;
  chatBox.appendChild(botMessage);

  parler(reponse);
}
