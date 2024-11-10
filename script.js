// Tema değiştirme fonksiyonları
function setLightTheme() {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
}

function setDarkTheme() {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
}

// Profil fotoğrafı ve isim düzenleme fonksiyonları
document.getElementById('profile-photo').addEventListener('change', function(event) {
    // Profil fotoğrafını yükle ve düzenle
});

document.getElementById('username').addEventListener('input', function(event) {
    // Kullanıcı ismini güncelle
});
const messagesRef = firebase.database().ref('messages');
messagesRef.on('child_added', function(data) {
    const message = data.val();
    displayMessage(message);
});

function sendMessage(messageText) {
    const newMessage = {
        text: messageText,
        timestamp: Date.now(),
    };
    messagesRef.push(newMessage);
}
// Firebase Authentication
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('User is logged in:', user);
    // Kullanıcıyı yönlendirebilirsin veya profil sayfasına yönlendirebilirsin
  } else {
    console.log('No user is logged in');
    // Kullanıcıyı giriş sayfasına yönlendir
  }
});
// Firebase Realtime Database ile mesaj göndermek
const messagesRef = firebase.database().ref('messages');
messagesRef.push({
  text: 'Hello, World!',
  userId: user.uid,
  timestamp: Date.now()
});
// Tema değiştirme
document.getElementById('light-theme').addEventListener('click', () => {
  document.body.classList.remove('dark');
  document.body.classList.add('light');
});

document.getElementById('dark-theme').addEventListener('click', () => {
  document.body.classList.remove('light');
  document.body.classList.add('dark');
});
// Profil fotoğrafını değiştirme
const profilePicInput = document.getElementById('profile-photo');
profilePicInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const storageRef = firebase.storage().ref('profile_pics/' + file.name);
  storageRef.put(file).then(() => {
    console.log('Profil fotoğrafı yüklendi');
  });
});
// Grup oluşturma
const groupsRef = firebase.firestore().collection('groups');
groupsRef.add({
  name: 'Yeni Grup',
  createdBy: user.uid,
  createdAt: Date.now()
});
// Firebase SDK'yı dahil et
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

// Firebase yapılandırmanızı buraya ekleyin
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",  // Firebase API key'iniz
  authDomain: "YOUR_AUTH_DOMAIN",  // Firebase Authentication domain
  databaseURL: "https://your-database-name.firebaseio.com",  // Firebase Realtime Database URL
  projectId: "YOUR_PROJECT_ID",  // Firebase Project ID
  storageBucket: "YOUR_STORAGE_BUCKET",  // Firebase Storage Bucket
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",  // Firebase Messaging Sender ID
  appId: "YOUR_APP_ID"  // Firebase App ID
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// HTML elementlerine erişim
const messagesContainer = document.getElementById('messages-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Firebase Realtime Database'den gelen verileri ekrana yazdırma
const messagesRef = ref(database, 'messages');

// Yeni bir mesaj eklemek için fonksiyon
function sendMessage(messageText) {
    const newMessageRef = push(messagesRef);
    set(newMessageRef, {
        text: messageText,
        timestamp: Date.now(),
    }).then(() => {
        console.log('Mesaj başarıyla gönderildi!');
        messageInput.value = ''; // Input'u temizliyoruz
    }).catch((error) => {
        console.error('Mesaj gönderilirken hata oluştu: ', error);
    });
}

// Veritabanındaki mesajları dinlemek ve ekrana yazdırmak
onValue(messagesRef, (snapshot) => {
    messagesContainer.innerHTML = '';  // Mevcut mesajları temizle
    const data = snapshot.val();  // Veritabanındaki tüm mesajları al

    for (let key in data) {
        const message = data[key];
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message.text;
        messagesContainer.appendChild(messageElement);
    }

    // Mesajlar en alta kaydırılsın
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
});

// "Gönder" butonuna tıklanırsa mesaj gönder
sendButton.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText.trim()) {
        sendMessage(messageText);
    }
});

// Enter tuşuna basarak mesaj göndermeyi sağlama
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const messageText = messageInput.value;
        if (messageText.trim()) {
            sendMessage(messageText);
        }
    }
});
