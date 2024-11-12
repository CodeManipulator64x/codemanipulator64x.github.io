const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Statik dosyaları sunuyoruz
app.use(express.static('public')); // public klasöründe frontend dosyalarını koyacağız

// Socket.io bağlantısı
io.on('connection', (socket) => {
    console.log('Yeni bir kullanıcı bağlandı!');

    // Mesaj alındığında, tüm bağlı kullanıcılara ilet
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Bu mesajı tüm kullanıcılara gönder
    });

    // Kullanıcı ayrıldığında
    socket.on('disconnect', () => {
        console.log('Bir kullanıcı ayrıldı!');
    });
});

// Sunucu başlatma
server.listen(3000, () => {
    console.log('Sunucu çalışıyor... Port: 3000');
});
