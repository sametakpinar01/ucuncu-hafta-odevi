$(document).ready(function () { // Belge yüklendiğinde çalışacak fonksiyon, sayfa hazır olduğunda tetiklenir
  $(".tm-current-year").text(new Date().getFullYear()); // HTML'deki ".tm-current-year" sınıfına sahip elementlere, geçerli yılı (2025) metin olarak ekler
});