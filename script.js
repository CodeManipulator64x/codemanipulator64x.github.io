const themeToggleButton = document.getElementById('theme-toggle');
const settingsMenu = document.getElementById('settings-menu');
const sendButton = document.getElementById('send-button');
const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('message-input');

// Tema değiştir
if(localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

themeToggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Ayarlar menüsünü aç
function openSettingsMenu() {
  settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
}

// Mesaj gönder
function sendMessage() {
  const messageText = messageInput.value;
  if (messageText.trim() !== '') {
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.textContent = messageText;
    messagesContainer.appendChild(newMessage);
    messageInput.value = '';
  }
}

// İsim değiştirme
function changeName() {
  const newName = prompt("Yeni isminizi girin:");
  if (newName) {
    alert(`İsminiz başarıyla değiştirildi: ${newName}`);
    // Bu isim değişikliğini backend'e kaydedebiliriz (Firebase gibi)
  }
}

// Grup oluşturma
function createGroup() {
  const groupName = prompt("Grup adı girin:");
  if (groupName) {
    alert(`Grup oluşturuldu: ${groupName}`);
    // Bu grubu backend'e kaydedebiliriz
  }
}
