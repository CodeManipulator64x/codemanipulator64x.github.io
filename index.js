import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

// Firebase ayarları
const firebaseConfig = {
  apiKey: AIzaSyAGicUjvPTwaIUGElQa9vU4dNQUQrbpPPM
  authDomain: openchat-e1b07.firebaseapp.com
  databaseURL: https://openchat-e1b07-default-rtdb.europe-west1.firebasedatabase.app/
  projectId: 661808673294
  storageBucket: 
  messagingSenderId: 661808673294
  appId: 
  measurementId: 
};

// Firebase başlatılıyor
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// HTML elementleri ile bağlantı kurma
const usernameInput = document.getElementById('username');
const joinBtn = document.getElementById('join-btn');
const chatScreen = document.getElementById('chat-screen');
const welcomeScreen = document.getElementById('welcome-screen');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const messageArea = document.getElementById('message-area');
const logoutBtn = document.getElementById('logout-btn');

let username = localStorage.getItem('username');

// Kullanıcı giriş yapmış mı kontrol et
if (username) {
    welcomeScreen.style.display = 'none';
    chatScreen.style.display = 'block';
    loadMessages();
}

// Kullanıcı adı girildiğinde "Katıl" butonunu etkinleştir
usernameInput.addEventListener('input', () => {
    joinBtn.disabled = !usernameInput.value.trim();
});

// Sohbete katıl
joinBtn.addEventListener('click', () => {
    username = usernameInput.value.trim();
    localStorage.setItem('username', username);
    welcomeScreen.style.display = 'none';
    chatScreen.style.display = 'block';
    loadMessages();
});

// Mesaj gönderme
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Firebase'e mesaj gönder
function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        const messageRef = ref(db, 'messages/');
        push(messageRef, {
            username: username,
            timestamp: new Date().toLocaleTimeString(),
            text: message
        });
        messageInput.value = '';
    }
}

// Firebase'den mesajları yükle ve göster
function loadMessages() {
    const messageRef = ref(db, 'messages/');
    onValue(messageRef, (snapshot) => {
        messageArea.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const messageData = childSnapshot.val();
            displayMessage(messageData);
        });
    });
}

// Mesajı ekranda göster
function displayMessage({ username, timestamp, text }) {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${username}</strong> <small>${timestamp}</small><br>${text}`;
    messageArea.appendChild(messageDiv);
    messageArea.scrollTop = messageArea.scrollHeight; // Otomatik kaydırma
}

// Hesaptan çıkış yap ve localStorage'ı temizle
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    welcomeScreen.style.display = 'block';
    chatScreen.style.display = 'none';
});
