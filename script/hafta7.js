function temaToggle() {
    var body = document.body;
    var btn  = document.getElementById('temaBtn');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        btn.textContent = '☀️ Açık Temaya Geç';
    } else {
        btn.textContent = '🌙 Koyu Temaya Geç';
    }
}

/* ── 2) FORM SUBMIT — Özet Üret ─────────── */
document.addEventListener('DOMContentLoaded', function () {

    // Sayfa yüklendiğinde çiçekleri oluştur
    cicekOlustur();

    var form = document.getElementById('basvuruForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Sayfa yenilenmesin

        var uyari = document.getElementById('uyariAlani');
        uyari.classList.add('d-none');
        uyari.textContent = '';

        /* Alan değerlerini al */
        var adSoyad    = document.getElementById('adSoyad').value.trim();
        var eposta     = document.getElementById('eposta').value.trim();
        var bolum      = document.getElementById('bolum').value.trim();
        var sinif      = document.getElementById('sinif').value;
        var oturum     = document.getElementById('oturum').value;
        var katilim    = document.getElementById('katilimTuru').value;
        var mesaj      = document.getElementById('mesaj').value.trim();
        var onay       = document.getElementById('onay').checked;

        /* Zorunlu alan kontrolü */
        var eksikler = [];
        if (!adSoyad)  eksikler.push('Ad Soyad');
        if (!eposta)   eksikler.push('E-posta');
        if (!bolum)    eksikler.push('Bölüm');
        if (!sinif)    eksikler.push('Sınıf');
        if (!oturum)   eksikler.push('Katılmak İstediğiniz Oturum');
        if (!katilim)  eksikler.push('Katılım Türü');
        if (!onay)     eksikler.push('Onay kutusu işaretlenmedi');

        if (eksikler.length > 0) {
            uyari.textContent = '⚠️ Lütfen şu alanları doldurun: ' + eksikler.join(', ');
            uyari.classList.remove('d-none');
            uyari.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        /* Başarılı — Özet Kartı Oluştur */
        var sonucAlani = document.getElementById('sonucAlani');

        sonucAlani.className = 'p-4 rounded-3 nk-sonuc-kart';

        sonucAlani.innerHTML =
            '<h5 class="fw-bold nk-heading mb-3">✅ Başvuru Özeti</h5>' +

            '<div class="nk-sonuc-satir">' +
                '<strong>Ad Soyad:</strong> ' + adSoyad +
            '</div>' +

            '<div class="nk-sonuc-satir">' +
                '<strong>E-posta:</strong> ' + eposta +
            '</div>' +

            '<div class="nk-sonuc-satir">' +
                '<strong>Bölüm:</strong> ' + bolum +
            '</div>' +

            '<div class="nk-sonuc-satir">' +
                '<strong>Sınıf:</strong> ' + sinif +
            '</div>' +

            '<div class="nk-sonuc-satir">' +
                '<strong>Oturum:</strong> ' + oturum +
            '</div>' +

            '<div class="nk-sonuc-satir">' +
                '<strong>Katılım Türü:</strong> ' + katilim +
            '</div>' +

            (mesaj
                ? '<div class="nk-sonuc-satir"><strong>Mesaj:</strong> ' + mesaj + '</div>'
                : '') +

            '<div class="mt-3">' +
                '<span class="badge" style="background-color:#9370db;padding:7px 16px;border-radius:20px;">' +
                    '🎉 Başvurunuz alındı!' +
                '</span>' +
            '</div>';

        sonucAlani.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

/* ── 3) FORMU TEMİZLE ───────────────────── */
function formuTemizle() {
    document.getElementById('basvuruForm').reset();

    var uyari = document.getElementById('uyariAlani');
    uyari.classList.add('d-none');
    uyari.textContent = '';

    var sonucAlani = document.getElementById('sonucAlani');
    sonucAlani.className = 'p-4 rounded-3 nk-sonuc-bos';
    sonucAlani.innerHTML =
        '<p class="mb-0 nk-text">Henüz başvuru özeti oluşturulmadı. ' +
        'Formu doldurduktan sonra sonuç burada görünecek.</p>';
}

/* ── 4) ÇİÇEK YAĞMURU OLUŞTURMA ─────────── */
function cicekOlustur() {
    const body = document.body;
    const cicekSayisi = 15; // Yoğunluğu azalttık (Eskiden 40'tı)

    for (let i = 0; i < cicekSayisi; i++) {
        let cicek = document.createElement('div');
        cicek.innerHTML = '🌸';
        cicek.classList.add('cicek');
        
        cicek.style.left = Math.random() * 100 + 'vw';
        // Daha yavaş ve aheste düşmeleri için süreyi biraz uzattık
        cicek.style.animationDuration = (Math.random() * 5 + 8) + 's'; 
        cicek.style.animationDelay = (Math.random() * 5) + 's';
        cicek.style.fontSize = (Math.random() * 10 + 12) + 'px';

        body.appendChild(cicek);
    }
}