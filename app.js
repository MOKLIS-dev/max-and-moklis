document.getElementById('sendBtn').addEventListener('click', () => {
  const input = document.getElementById('userInput').value;
  const chatBox = document.getElementById('chatBox');
  
  const userMessage = document.createElement('p');
  userMessage.textContent = "Toi: " + input;
  chatBox.appendChild(userMessage);

  document.getElementById('userInput').value = '';

  // Appelle Max pour qu’il réponde
  repondre(input);
});
