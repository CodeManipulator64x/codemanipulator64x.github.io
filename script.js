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
