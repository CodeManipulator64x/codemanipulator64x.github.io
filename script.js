const ayarlarButton = document.getElementById("ayarlarButton");
const ayarlarBolumu = document.getElementById("ayarlarBolumu");
const anaIcerik = document.getElementById("anaIcerik");

ayarlarButton.addEventListener("click", () => {
  ayarlarBolumu.style.display = "block";
  anaIcerik.style.display = "none";
});
