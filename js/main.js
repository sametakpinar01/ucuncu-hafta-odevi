$(document).ready(function () { // Belge yüklendiğinde çalışacak fonksiyon, sayfa hazır olduğunda tetiklenir

  // Galeri düzeni için Masonry başlatma
  var $grid = $(".grid").masonry({ // Galeri öğelerini düzgün bir ızgara düzenine yerleştirmek için Masonry eklentisi
    itemSelector: ".grid-item", // Grid'deki her bir öğeyi seçer (galeri resimleri)
    isFitWidth: true, // Grid'in genişliğine göre esnek ayarlanır
    columnWidth: 1, // Sütun genişliği 1 birim olarak ayarlanır
  });

  // Resimlerin yüklenmesi tamamlandığında ızgarayı yeniden düzenle
  $grid.imagesLoaded().progress(function () { // Resimler yüklendikten sonra ızgarayı layout’a zorlar
    $grid.masonry("layout"); // Masonry ızgarasını yeniden düzenler
  });

  // Footer’daki yıl bilgisini güncelle
  $(".tm-current-year").text(new Date().getFullYear()); // HTML'deki ".tm-current-year" sınıfına sahip elementlere, geçerli yılı (2025) metin olarak ekler
});