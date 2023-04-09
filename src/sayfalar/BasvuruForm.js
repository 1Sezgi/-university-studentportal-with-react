import React from 'react';
import ReactDOM from 'react-dom/client';

import { useState} from "react"
import { basvuruGoster } from "../Function";
import { useNavigate } from "react-router-dom";

export const withAuth = (Basvurular) => {
  return (props) => {
    const isLogin = sessionStorage.getItem("isLogin");
    const navigate = useNavigate();

    if (isLogin === "true") {
      return <Basvurular {...props} />;
    } else {
      navigate("/Basvurular");
      navigate("/BasvurularBilgileri");
      navigate("/Profil");
      navigate("/ProfilBilgileri");
      return null;
    }
  };
};





function BasvuruForm(props) {

    const [input, setInput] = useState("");
    const degistiginde = (event) => {

        const input_name = event.target.name;
        const input_value = event.target.value;

        setInput(values => ({ ...values, [input_name]: input_value }))

    }

    const submitFonk = function (event) {
        event.preventDefault();

        console.log(input);

    }
    
    const gonder = () => {

        var name = document.getElementById("inputName").value;
        var surname = document.getElementById("inputSurname").value;
        var gender = document.getElementById("gender").value;
        var d_tarih = document.getElementById("birthdate").value
        var tel = document.getElementById("number").value
        var mail = document.getElementById("inputMail").value;
        var Engel = document.getElementById("engel").value;
        var milliyet = document.getElementById("milliyet").value;
        var milliyet2 = document.getElementById("milliyet2").value;
        var ulke = document.getElementById("country").value;
        var pasaport = document.getElementById("pasaport").value;
        var kimlik = document.getElementById("tc").value;
        var sehir = document.getElementById("il").value;
        var ilce = document.getElementById("ilce").value;
        var mahalle = document.getElementById("mahalle").value;
        var sokak = document.getElementById("sokak").value;
        var apt = document.getElementById("apt").value;
        var postakod = document.getElementById("postakod").value;
        var universite = document.getElementById("uni").value;
        var bolum = document.getElementById("bolum").value;
        var fakulte = document.getElementById("fakulte").value;
        var mtarih = document.getElementById("mday").value;
        var n_ort = document.getElementById("not_ort").value;
        var mezuniyet = document.getElementById("egitim").value;
        var Cv = document.getElementById("cv").value;
        var Niyet = document.getElementById("niyet").value;
        var Diploma = document.getElementById("diploma").value;
        var IngYetkin = document.getElementById("ingYetkin").value;
        var Ikametgah = document.getElementById("ikametgah").value;
        var Pasport = document.getElementById("pasport").value;


        var user_info = [name, surname, gender, d_tarih, tel, mail, Engel, milliyet, milliyet2, ulke, pasaport, kimlik, sehir, ilce, mahalle, sokak, apt, postakod, universite, bolum, fakulte, mtarih, n_ort, mezuniyet, Cv, Niyet, Diploma, IngYetkin, Ikametgah, Pasport];


        if (user_info.some((item) => item === "")) { //some dizi içinde herhangi boş öge var mı onu kontrol eder.
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        sessionStorage.setItem("user_info", user_info);

        alert("Bilgileriniz gönderilmiştir.");

    }


    return (
        <>
            <section style={{ backgroundColor: "#f4f4f4", borderRadius: "16px", margin: "0 100px 50px 100px" }}>
                <div class="container">
                    <form onSubmit={submitFonk} novalidate>
                        <div class="row justify-content-center was-validated formbaslik" style={{ marginTop: "10px" }} >
                            <div class="col-11 py-2" >
                                <div class="row">
                                    <div class="col-12">
                                        <h1 class="text-center" style={{ fontFamily: "Times New Roman" }}>Erasmus Başvuru Formu</h1>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <h3> Kişisel Bilgiler : </h3>
                                        <div class="row g-3 align-items-center">
                                            <div class="col-lg-6">
                                                <label for="inputName" class="col-form-label">İsim:</label>
                                                <input type="text" id="inputName" name='inputName' class="form-control " value={input.inputName || ""}
                                                    onChange={degistiginde} required />
                                            </div>

                                            <div class="col-lg-6">
                                                <label for="inputSurname" class="col-form-label">Soyisim:</label>
                                                <input type="text" id="inputSurname" name='inputSurname' class="form-control" value={input.inputSurname || ""}
                                                    onChange={degistiginde} required />
                                            </div>

                                            <div class="col-6">
                                                <div class="row g-3 align-items-center">
                                                    <div class="col-3">
                                                        <label for="inputGender" class="col-form-label"  >Cinsiyet:</label>
                                                    </div>
                                                    <div class="col-12">

                                                        <select className="form-select" name="gender" id="gender" value={input.gender || ""}
                                                            onChange={degistiginde} required>
                                                            <option value="">Seçiniz</option>
                                                            <option>Kadın</option>
                                                            <option>Erkek</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="row g-3 align-items-center">
                                                    <span class="col-form-label">Doğum Tarihi:</span>
                                                    <input type="date" class="form-control" id="birthdate" name="birthdate" value={input.birthdate || ""}
                                                        onChange={degistiginde} required />
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <label for="number" class="col-form-label">Telefon Numarası:</label>
                                                <input type="number" id="number" name='number' class="form-control" value={input.number || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-lg-4">
                                                <label for="inputMail" class="col-form-label">Mail Adresi:</label>
                                                <input type="text" id="inputMail" name='inputMail' class="form-control" value={input.inputMail || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-4">
                                                <div>
                                                    <label for="inputGender" class="col-form-label"  >Engel Durumu:</label>
                                                </div>
                                                <div class="col-12">
                                                    <select className="form-select" name="engel" id="engel" value={input.engel || ""}
                                                        onChange={degistiginde} required>
                                                        <option value="">Seçiniz</option>
                                                        <option>Var</option>
                                                        <option>Yok</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 baslik">
                                                <h3> Milliyet Bilgileri : </h3>
                                            </div>

                                            <div class="col-lg-6">
                                                <label for="milliyet"> Milliyet Adı : </label>
                                                <input type="text" class="form-control" id="milliyet" name="milliyet" value={input.milliyet || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="milliyet2"> Varsa İkinci Milliyet : </label>
                                                <input type="text" class="form-control" id="milliyet2" name='milliyet2' value={input.milliyet2 || ""}
                                                    onChange={degistiginde} />
                                            </div>
                                            <div class="col-lg-12">
                                                <label for="ulke" class="col-form-label">Ülke Adı :</label>

                                                {/* <input type="text" id="country" name='country' class="form-control" value={input.country || ""}
                                                    onChange={degistiginde} required /> */}

                                                <select name="country" className="form-select" id="country" required
                                                    value={input.country || ""}
                                                    onChange={degistiginde}>
                                                    <option value="">Lütfen Seçiniz</option>
                                                    <option value="TR">Türkiye</option>
                                                    <option value="VI">ABD Virgin Adaları</option>
                                                    <option value="AF">Afganistan</option>
                                                    <option value="AX">Aland Adaları</option>
                                                    <option value="DE">Almanya</option>
                                                    <option value="US">Amerika Birleşik Devletleri</option>
                                                    <option value="UM">Amerika Birleşik Devletleri Küçük Dış Adaları</option>
                                                    <option value="AS">Amerikan Samoası</option>
                                                    <option value="AD">Andora</option>
                                                    <option value="AO">Angola</option>
                                                    <option value="AI">Anguilla</option>
                                                    <option value="AQ">Antarktika</option>
                                                    <option value="AG">Antigua ve Barbuda</option>
                                                    <option value="AR">Arjantin</option>
                                                    <option value="AL">Arnavutluk</option>
                                                    <option value="AW">Aruba</option>
                                                    <option value="QU">Avrupa Birliği</option>
                                                    <option value="AU">Avustralya</option>
                                                    <option value="AT">Avusturya</option>
                                                    <option value="AZ">Azerbaycan</option>
                                                    <option value="BS">Bahamalar</option>
                                                    <option value="BH">Bahreyn</option>
                                                    <option value="BD">Bangladeş</option>
                                                    <option value="BB">Barbados</option>
                                                    <option value="EH">Batı Sahara</option>
                                                    <option value="BZ">Belize</option>
                                                    <option value="BE">Belçika</option>
                                                    <option value="BJ">Benin</option>
                                                    <option value="BM">Bermuda</option>
                                                    <option value="BY">Beyaz Rusya</option>
                                                    <option value="BT">Bhutan</option>
                                                    <option value="ZZ">Bilinmeyen veya Geçersiz Bölge</option>
                                                    <option value="AE">Birleşik Arap Emirlikleri</option>
                                                    <option value="GB">Birleşik Krallık</option>
                                                    <option value="BO">Bolivya</option>
                                                    <option value="BA">Bosna Hersek</option>
                                                    <option value="BW">Botsvana</option>
                                                    <option value="BV">Bouvet Adası</option>
                                                    <option value="BR">Brezilya</option>
                                                    <option value="BN">Brunei</option>
                                                    <option value="BG">Bulgaristan</option>
                                                    <option value="BF">Burkina Faso</option>
                                                    <option value="BI">Burundi</option>
                                                    <option value="CV">Cape Verde</option>
                                                    <option value="GI">Cebelitarık</option>
                                                    <option value="DZ">Cezayir</option>
                                                    <option value="CX">Christmas Adası</option>
                                                    <option value="DJ">Cibuti</option>
                                                    <option value="CC">Cocos Adaları</option>
                                                    <option value="CK">Cook Adaları</option>
                                                    <option value="TD">Çad</option>
                                                    <option value="CZ">Çek Cumhuriyeti</option>
                                                    <option value="CN">Çin</option>
                                                    <option value="DK">Danimarka</option>
                                                    <option value="DM">Dominik</option>
                                                    <option value="DO">Dominik Cumhuriyeti</option>
                                                    <option value="TL">Doğu Timor</option>
                                                    <option value="EC">Ekvator</option>
                                                    <option value="GQ">Ekvator Ginesi</option>
                                                    <option value="SV">El Salvador</option>
                                                    <option value="ID">Endonezya</option>
                                                    <option value="ER">Eritre</option>
                                                    <option value="AM">Ermenistan</option>
                                                    <option value="EE">Estonya</option>
                                                    <option value="ET">Etiyopya</option>
                                                    <option value="FK">Falkland Adaları (Malvinalar)</option>
                                                    <option value="FO">Faroe Adaları</option>
                                                    <option value="MA">Fas</option>
                                                    <option value="FJ">Fiji</option>
                                                    <option value="CI">Fildişi Sahilleri</option>
                                                    <option value="PH">Filipinler</option>
                                                    <option value="PS">Filistin Bölgesi</option>
                                                    <option value="FI">Finlandiya</option>
                                                    <option value="FR">Fransa</option>
                                                    <option value="GF">Fransız Guyanası</option>
                                                    <option value="TF">Fransız Güney Bölgeleri</option>
                                                    <option value="PF">Fransız Polinezyası</option>
                                                    <option value="GA">Gabon</option>
                                                    <option value="GM">Gambia</option>
                                                    <option value="GH">Gana</option>
                                                    <option value="GN">Gine</option>
                                                    <option value="GW">Gine-Bissau</option>
                                                    <option value="GD">Granada</option>
                                                    <option value="GL">Grönland</option>
                                                    <option value="GP">Guadeloupe</option>
                                                    <option value="GU">Guam</option>
                                                    <option value="GT">Guatemala</option>
                                                    <option value="GG">Guernsey</option>
                                                    <option value="GY">Guyana</option>
                                                    <option value="ZA">Güney Afrika</option>
                                                    <option value="GS">Güney Georgia ve Güney Sandwich Adaları</option>
                                                    <option value="KR">Güney Kore</option>
                                                    <option value="CY">Güney Kıbrıs Rum Kesimi</option>
                                                    <option value="GE">Gürcistan</option>
                                                    <option value="HT">Haiti</option>
                                                    <option value="HM">Heard Adası ve McDonald Adaları</option>
                                                    <option value="IN">Hindistan</option>
                                                    <option value="IO">Hint Okyanusu İngiliz Bölgesi</option>
                                                    <option value="NL">Hollanda</option>
                                                    <option value="AN">Hollanda Antilleri</option>
                                                    <option value="HN">Honduras</option>
                                                    <option value="HK">Hong Kong SAR - Çin</option>
                                                    <option value="HR">Hırvatistan</option>
                                                    <option value="IQ">Irak</option>
                                                    <option value="VG">İngiliz Virgin Adaları</option>
                                                    <option value="IR">İran</option>
                                                    <option value="IE">İrlanda</option>
                                                    <option value="ES">İspanya</option>
                                                    <option value="IL">İsrail</option>
                                                    <option value="SE">İsveç</option>
                                                    <option value="CH">İsviçre</option>
                                                    <option value="IT">İtalya</option>
                                                    <option value="IS">İzlanda</option>
                                                    <option value="JM">Jamaika</option>
                                                    <option value="JP">Japonya</option>
                                                    <option value="JE">Jersey</option>
                                                    <option value="KH">Kamboçya</option>
                                                    <option value="CM">Kamerun</option>
                                                    <option value="CA">Kanada</option>
                                                    <option value="ME">Karadağ</option>
                                                    <option value="QA">Katar</option>
                                                    <option value="KY">Kayman Adaları</option>
                                                    <option value="KZ">Kazakistan</option>
                                                    <option value="KE">Kenya</option>
                                                    <option value="KI">Kiribati</option>
                                                    <option value="CO">Kolombiya</option>
                                                    <option value="KM">Komorlar</option>
                                                    <option value="CG">Kongo</option>
                                                    <option value="CD">Kongo Demokratik Cumhuriyeti</option>
                                                    <option value="CR">Kosta Rika</option>
                                                    <option value="KW">Kuveyt</option>
                                                    <option value="KP">Kuzey Kore</option>
                                                    <option value="MP">Kuzey Mariana Adaları</option>
                                                    <option value="CU">Küba</option>
                                                    <option value="KG">Kırgızistan</option>
                                                    <option value="LA">Laos</option>
                                                    <option value="LS">Lesotho</option>
                                                    <option value="LV">Letonya</option>
                                                    <option value="LR">Liberya</option>
                                                    <option value="LY">Libya</option>
                                                    <option value="LI">Liechtenstein</option>
                                                    <option value="LT">Litvanya</option>
                                                    <option value="LB">Lübnan</option>
                                                    <option value="LU">Lüksemburg</option>
                                                    <option value="HU">Macaristan</option>
                                                    <option value="MG">Madagaskar</option>
                                                    <option value="MO">Makao S.A.R. Çin</option>
                                                    <option value="MK">Makedonya</option>
                                                    <option value="MW">Malavi</option>
                                                    <option value="MV">Maldivler</option>
                                                    <option value="MY">Malezya</option>
                                                    <option value="ML">Mali</option>
                                                    <option value="MT">Malta</option>
                                                    <option value="IM">Man Adası</option>
                                                    <option value="MH">Marshall Adaları</option>
                                                    <option value="MQ">Martinik</option>
                                                    <option value="MU">Mauritius</option>
                                                    <option value="YT">Mayotte</option>
                                                    <option value="MX">Meksika</option>
                                                    <option value="FM">Mikronezya Federal Eyaletleri</option>
                                                    <option value="MD">Moldovya Cumhuriyeti</option>
                                                    <option value="MC">Monako</option>
                                                    <option value="MS">Montserrat</option>
                                                    <option value="MR">Moritanya</option>
                                                    <option value="MZ">Mozambik</option>
                                                    <option value="MN">Moğolistan</option>
                                                    <option value="MM">Myanmar</option>
                                                    <option value="EG">Mısır</option>
                                                    <option value="NA">Namibya</option>
                                                    <option value="NR">Nauru</option>
                                                    <option value="NP">Nepal</option>
                                                    <option value="NE">Nijer</option>
                                                    <option value="NG">Nijerya</option>
                                                    <option value="NI">Nikaragua</option>
                                                    <option value="NU">Niue</option>
                                                    <option value="NF">Norfolk Adası</option>
                                                    <option value="NO">Norveç</option>
                                                    <option value="CF">Orta Afrika Cumhuriyeti</option>
                                                    <option value="UZ">Özbekistan</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="PW">Palau</option>
                                                    <option value="PA">Panama</option>
                                                    <option value="PG">Papua Yeni Gine</option>
                                                    <option value="PY">Paraguay</option>
                                                    <option value="PE">Peru</option>
                                                    <option value="PN">Pitcairn</option>
                                                    <option value="PL">Polonya</option>
                                                    <option value="PT">Portekiz</option>
                                                    <option value="PR">Porto Riko</option>
                                                    <option value="RE">Reunion</option>
                                                    <option value="RO">Romanya</option>
                                                    <option value="RW">Ruanda</option>
                                                    <option value="RU">Rusya Federasyonu</option>
                                                    <option value="SH">Saint Helena</option>
                                                    <option value="KN">Saint Kitts ve Nevis</option>
                                                    <option value="LC">Saint Lucia</option>
                                                    <option value="PM">Saint Pierre ve Miquelon</option>
                                                    <option value="VC">Saint Vincent ve Grenadinler</option>
                                                    <option value="WS">Samoa</option>
                                                    <option value="SM">San Marino</option>
                                                    <option value="ST">Sao Tome ve Principe</option>
                                                    <option value="SN">Senegal</option>
                                                    <option value="SC">Seyşeller</option>
                                                    <option value="SL">Sierra Leone</option>
                                                    <option value="SG">Singapur</option>
                                                    <option value="SK">Slovakya</option>
                                                    <option value="SI">Slovenya</option>
                                                    <option value="SB">Solomon Adaları</option>
                                                    <option value="SO">Somali</option>
                                                    <option value="LK">Sri Lanka</option>
                                                    <option value="SD">Sudan</option>
                                                    <option value="SR">Surinam</option>
                                                    <option value="SY">Suriye</option>
                                                    <option value="SA">Suudi Arabistan</option>
                                                    <option value="SJ">Svalbard ve Jan Mayen</option>
                                                    <option value="SZ">Svaziland</option>
                                                    <option value="RS">Sırbistan</option>
                                                    <option value="CS">Sırbistan-Karadağ</option>
                                                    <option value="CL">Şili</option>
                                                    <option value="TJ">Tacikistan</option>
                                                    <option value="TZ">Tanzanya</option>
                                                    <option value="TH">Tayland</option>
                                                    <option value="TW">Tayvan</option>
                                                    <option value="TG">Togo</option>
                                                    <option value="TK">Tokelau</option>
                                                    <option value="TO">Tonga</option>
                                                    <option value="TT">Trinidad ve Tobago</option>
                                                    <option value="TN">Tunus</option>
                                                    <option value="TC">Turks ve Caicos Adaları</option>
                                                    <option value="TV">Tuvalu</option>
                                                    <option value="TM">Türkmenistan</option>
                                                    <option value="UG">Uganda</option>
                                                    <option value="UA">Ukrayna</option>
                                                    <option value="OM">Umman</option>
                                                    <option value="UY">Uruguay</option>
                                                    <option value="QO">Uzak Okyanusya</option>
                                                    <option value="JO">Ürdün</option>
                                                    <option value="VU">Vanuatu</option>
                                                    <option value="VA">Vatikan</option>
                                                    <option value="VE">Venezuela</option>
                                                    <option value="VN">Vietnam</option>
                                                    <option value="WF">Wallis ve Futuna</option>
                                                    <option value="YE">Yemen</option>
                                                    <option value="NC">Yeni Kaledonya</option>
                                                    <option value="NZ">Yeni Zelanda</option>
                                                    <option value="GR">Yunanistan</option>
                                                    <option value="ZM">Zambiya</option>
                                                    <option value="ZW">Zimbabve</option>
                                                </select>

                                            </div>
                                            <div class="col-lg-6">
                                                <label for="pasaport" class="col-form-label">Pasaport No :</label>
                                                <input type="text" id="pasaport" name='pasaport' class="form-control" value={input.pasaport || ""}
                                                    onChange={degistiginde} />
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="tcno" class="col-form-label">T.C. No :</label>
                                                <input type="text" id="tc" name='tc' class="form-control" value={input.tc || ""}
                                                    onChange={degistiginde} />
                                            </div>

                                            <div class="col-lg-12 baslik">
                                                <h3> Adres Bilgileri : </h3>
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="il"> İl :</label>
                                                <input type="text" class="form-control" id="il" name='il' placeholder="İl" value={input.il || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="ilce"> İlçe : </label>
                                                <input type="text" class="form-control" id="ilce" name='ilce' placeholder="İlçe" value={input.ilce || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="mahalle">  Mahalle : </label>
                                                <input type="text" class="form-control" id="mahalle" name='mahalle' placeholder="Mahalle" value={input.mahalle || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="sokak">  Sokak :  </label>
                                                <input type="text" class="form-control" id="sokak" name='sokak' placeholder="Sokak" value={input.sokak || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="aptno"> Apartman No. : </label>
                                                <input type="text" class="form-control" id="apt" name='apt' placeholder="Apartman No" value={input.apt || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-lg-6">
                                                <label for="postakodu"> Posta Kodu :  </label>
                                                <input type="text" class="form-control" id="postakod" name='postakod' placeholder="Posta Kodu" value={input.postakod || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-lg-12 baslik">
                                                <h3> Eğitim Bilgileri : </h3>
                                            </div>
                                            <div class="col-lg-4">
                                                <label for="uni">
                                                    Üniversite :
                                                </label>
                                                <input type="text" class="form-control" id="uni" name='uni' value={input.uni || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-lg-4">
                                                <label for="bolum">
                                                    Bölüm :
                                                </label>
                                                <input type="text" class="form-control" id="bolum" name='bolum' value={input.bolum || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-lg-4">
                                                <label for="fakulte">
                                                    Fakülte :
                                                </label>
                                                <input type="text" class="form-control" id="fakulte" name='fakulte' value={input.fakulte || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-lg-4">
                                                <label for="mezuntarih">
                                                    Mezuniyet Tarihiniz :
                                                </label>
                                                <input type="date" class="form-control" name="mday" id="mday" value={input.mday || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-lg-4">
                                                <label for="not_ort">Not Ortalamanızı giriniz :</label>
                                                <input type="number" class="form-control" id="not_ort" name="not_ort" value={input.not_ort || ""}
                                                    onChange={degistiginde} required />
                                            </div>
                                            <div class="col-4">
                                                <div>
                                                    <label for="mezundurum" class="col-form-label"  >Mezuniyet Durumu:</label>
                                                </div>
                                                <div class="col-12">
                                                    <select className="form-select" name="egitim" id="egitim" value={input.egitim || ""}
                                                        onChange={degistiginde} required>
                                                        <option value="">Seçiniz</option>
                                                        <option>Mezun</option>
                                                        <option>Öğrenci</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-12 baslik mt-3">
                                                    <h3>
                                                        Gerekli Dökümanlar :
                                                    </h3>
                                                </div>
                                                <div class="col-lg-4">
                                                    <label for="ingYetkinlik">İngilizce Yeterlilik Belgesi :</label><br />
                                                    <input type="file" class="form-control-file" id="ingYetkin" name='ingYetkin' value={input.ingYetkin || ""} onChange={degistiginde} required />
                                                </div>
                                                <div class="col-lg-4">
                                                    <label for="cv"> CV : </label> <br />
                                                    <input type="file" class="form-control-file" id="cv" name='cv' value={input.cv || ""} onChange={degistiginde} required />
                                                </div>
                                                <div class="col-lg-4">
                                                    <label for="niyet"> Niyet Mektubu : </label><br />
                                                    <input type="file" class="form-control-file" id="niyet" name="niyet" value={input.niyet || ""} onChange={degistiginde} required />
                                                </div>
                                                <div class="col-lg-4">
                                                    <label for="pasaport">  Pasaport : </label><br />
                                                    <input type="file" class="form-control-file" id="pasport" name='pasport' value={input.pasport || ""} onChange={degistiginde} required />
                                                </div>
                                                <div class="col-lg-4">
                                                    <label for="ikametgah">İkametgah : </label> <br />
                                                    <input type="file" class="form-control-file" id="ikametgah" name='ikametgah' value={input.ikametgah || ""} onChange={degistiginde} required />
                                                </div>
                                                <div class="col-lg-4">
                                                    <label for="diploma">Diploma :</label><br />
                                                    <input type="file" class="form-control-file" id="diploma" name='diploma' value={input.diploma || ""} onChange={degistiginde} required />
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </form>
                    <div class="row justify-content-center">
                        <div class="col-6 my-2 py-3">
                            <div class="d-flex justify-content-center">

                                <button className="btn btn-outline-success ms-3" onClick={() => gonder()} >Başvuruyu Tamamla</button>
                                <input type="reset" class="btn btn-outline-danger  mx-3" />
                                <a href="BasvuruBilgi">
                                    <button class="btn btn-danger" type="submit" onClick={() => basvuruGoster()}> Başvuru Görüntüle </button>
                                </a>
                            </div>

                        </div>
                    </div>


                </div>

            </section>


        </>
    );
}

export default  withAuth(BasvuruForm);

