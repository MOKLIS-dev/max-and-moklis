document.getElementById('saveMemo').addEventListener('click', () => {
  const memoText = document.getElementById('memo').value;
  alert("Souvenir sauvegardé : " + memoText);
});

document.getElementById('sendBtn').addEventListener('click', () => {
  const input = document.getElementById('userInput').value;
  const chatBox = document.getElementById('chatBox');
  const userMessage = document.createElement('p');
  userMessage.textContent = "Toi: " + input;
  chatBox.appendChild(userMessage);
  document.getElementById('userInput').value = '';
});
