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
