// Temayı değiştir
function changeTheme() {
    const theme = document.getElementById('theme-select').value;
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

// Ayarlar menüsünü aç / kapat
function toggleSettings() {
    const settingsMenu = document.getElementById('settings-menu');
    settingsMenu.classList.toggle('hidden');
}

// Grup oluşturma sekmesini aç
function openCreateGroup() {
    const createGroupForm = document.getElementById('create-group-form');
    createGroupForm.style.display = 'block';
}

// Yeni grup oluştur
function createGroup() {
    const groupName = document.getElementById('group-name').value;
    const groupType = document.getElementById('group-type').value;

    if (groupName && groupType) {
        alert(`Grup "${groupName}" başarıyla oluşturuldu!`);
        // Grup oluşturulmuş gibi görünümde işlemler yapabilirsiniz.
        document.getElementById('create-group-form').style.display = 'none';
    } else {
        alert('Lütfen grup adı ve tipi seçin!');
    }
}

// Profil ayarları sayfasını aç
function openProfileSettings() {
    alert('Profil ayarlarını düzenleme kısmı!');
}
