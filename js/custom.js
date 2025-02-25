$(document).ready(function () { // Belge yüklendiğinde çalışacak fonksiyon, sayfa hazır olduğunda tetiklenir

    // Footer'daki yıl bilgisini güncelle
    $('.tm-current-year').text(new Date().getFullYear()); // HTML'deki ".tm-current-year" sınıfına sahip elementlere, geçerli yılı (2025) metin olarak ekler
  
    // Modal’da tıklanan resmin "data-img" kaynağını alır ve modalda gösterir
    $('a[data-img]').on('click', function () { // Galeri linklerine tıklandığında çalışır
      var imgSrc = $(this).data('img'); // Tıklanan linkteki "data-img" değerini alır
      $('#modalResim').attr('src', imgSrc); // Modal’daki resim elementine bu kaynağı uygular
    });
  
    // Hızlı modal gezinmesini önlemek için debounce fonksiyonu
    function debounce(func, wait) { // Hızlı tekrar eden olayları yavaşlatmak için kullanılan yardımcı fonksiyon
      let timeout;
      return function () {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
      };
    }
  
    // Klavye yön tuşları ile modal içinde gezinme (sağ/sol ok)
    $(document).on('keydown', debounce(function (e) { // Klavye tuşlarına basıldığında çalışır, debounce ile gecikme eklenir
      if ($('.modal.show').length) { // Eğer bir modal açıksa
        if (e.key === 'ArrowLeft') { // Sol ok tuşuna basıldığında
          $('.modal.show .nav-btn.prev').click(); // Modal’daki önceki butonuna tıklar
        } else if (e.key === 'ArrowRight') { // Sağ ok tuşuna basıldığında
          $('.modal.show .nav-btn.next').click(); // Modal’daki sonraki butonuna tıklar
        }
      }
    }, 300)); // Debounce gecikmesi, hızlı tuş basmalarını engeller (300ms)
  });