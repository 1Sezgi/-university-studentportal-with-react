export const login = () => {
    var kullanici = sessionStorage.getItem("user");

    if (kullanici == null) {
        sessionStorage.setItem("user", "");
    }

    var isLogin = false;

    kullanici = sessionStorage.getItem("user");
    const kullanici_ayrik = kullanici.split(","); //ayır

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var alert = document.getElementById("alert");

    if (email == kullanici_ayrik[0] && password == kullanici_ayrik[1]) {
        alert.innerHTML = "Giriş yapıldı!";
        alert.style.color = "green";

        isLogin = true;
        sessionStorage.setItem("isLogin", isLogin);

        setTimeout(function () {
            window.location.href = '/Anasayfa';
        }, 1000);
    }
    else {
        alert.innerHTML = "Email veya şifrenizi kontrol edin!";
        alert.style.color = "red";
    }
}

export const sifreKontrol = () => {

    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var alert = document.getElementById("alert");

    if (email.indexOf("@") > 0 && email.lastIndexOf(".") > email.indexOf("@")) {

        if (password1.length < 6) {
            alert.innerHTML = "Şifreniz en az 6 karakter olmalıdır!";
            alert.style.color = "red";
            return; // işlemi durdur
        }

        var kullanici = [email, password1];

        if (kullanici[0].length > 0 && kullanici[1].length > 0 && kullanici[1] == password2 ) {

            alert.innerHTML = "Hesap Oluşturuldu!";
            alert.style.color = "green";
            sessionStorage.setItem("user", kullanici);

            setTimeout(function () {
                window.location.href = '/Giris';
            }, 1000);

        } else {

            if ((kullanici[0].length < 1) || (kullanici[1].length < 1 && password2.length < 1)) {
                alert.innerHTML = "Lütfen tüm alanları doldurun!";
                alert.style.color = "red";
            } else {
                alert.innerHTML = "Şifreler eşleşmiyor!";
                alert.style.color = "red";
            }
        }

    } else {
        alert.innerHTML = "Lütfen geçerli bir e-posta adresi girin!";
        alert.style.color = "red";
    }

}

export const sifreGuncelle = () => {

    var kullanici = sessionStorage.getItem("user");
  
    kullanici = kullanici?.split(",");
  
    var mevcutSifre = document.getElementById("mevcutSifre").value;
    var yeniSifre = document.getElementById("yeniSifre").value;
    var yeniSifreTekrar = document.getElementById("yeniSifreTekrar").value;
  
    var yazi = document.getElementById("sonuc");
  
    if (mevcutSifre == kullanici[1]) {
  
        if (yeniSifre == yeniSifreTekrar) {
  
            kullanici[1] = yeniSifre;
  
            yazi.innerHTML = "Şifre başarıyla güncellendi!";
            yazi.style.color = "green";
  
            sessionStorage.setItem("user", kullanici);
  
        } else {
            yazi.innerHTML = "Yeni şifreler eşleşmiyor.";
            yazi.style.color = "red";
        }
  
    } else {
        yazi.innerHTML = "Mevcut şifre hatalı.";
        yazi.style.color = "red";
    }
  
  };
  



export const kaydetvetut = () => {


    var inputName = document.getElementById("inputName").value;
    var inputSurname = document.getElementById("inputSurname").value;
    var cinsiyet = document.getElementById("cinsiyet").value;
    var engel = document.getElementById("engel").value;
    var dtarih = document.getElementById("dtarih").value;
    var mezuniyet = document.getElementById("mezuniyet").value;
    var inputNumber = document.getElementById("inputNumber").value;
    var inputEmail = document.getElementById("inputEmail").value;

    // en az bir bilgi girilmiş mi kontrol et
    if (inputName || inputSurname || cinsiyet || engel || dtarih || mezuniyet || inputNumber || inputEmail) {

        var profileData = {

            "Adınız": inputName,
            "Soyadınız": inputSurname,
            "Cinsiyetiniz": cinsiyet,
            "EngelDurumu": engel,
            "DoğumTarihi": dtarih,
            "MezuniyetDurumu": mezuniyet,
            "TelefonNumarası": inputNumber,
            "MailAdresiniz": inputEmail
        };

        // session storage'da profil bilgilerini sakla
        sessionStorage.setItem("profil", JSON.stringify(profileData));

        var data = document.getElementById("goster");
        data.innerHTML = "Profiliniz kaydedildi!";
        data.style.color = "green";
    }
    else {
        var data = document.getElementById("goster");
        data.innerHTML = "Bilgilerinizi giriniz!";
        data.style.color = "red";
    }
};

//PROFİL GOSTER
export const profilGoster = () => {

    setTimeout(function () {
        window.location.href = "/ProfilBilgi";
    }, 1000);

};
//BAŞVURU GÖSTER

export const basvuruGoster = () => {

    setTimeout(function () {
    window.location.href = "/BasvuruBilgi";
    }, 1000);
  
};

