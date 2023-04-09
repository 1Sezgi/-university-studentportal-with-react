import React, { useState, useEffect } from "react";
import user from "../img/user.png";
import { kaydetvetut } from "../Function";
import { profilGoster } from "../Function";
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



 function Profil() {


    const image = [user];
    return (
        <>
            <center>
                <div class="container" >
                    <div class="row justify-content-center golge" style={{ backgroundColor: "#f4f4f4", borderRadius: "16px" ,marginTop:"5%"}}>
                        <div class="col-9 form-group">
                            <br></br>

                            <div class="profile-pic">
                                <label class="-label" for="file">
                                    <span class="glyphicon glyphicon-camera"></span>
                                    <span>Fotoğrafı Değiştir</span>
                                </label>
                                <input id="file" type="file" onchange="loadFile(event)" />
                                <img src={image} alt="User Icon" id="output" width="200" />
                            </div>
                            <form name="form" id="form1" action="" class="was-validated" novalidate>
                                <div class="form-group">
                                    <div class="col-12 text-center">
                                        <h4><label class="form-label form-label-left form-label-auto" id="kisiselBilgiler" name="kisiselBilgiler" for="kisiselBilgiler"><b>Kişisel Bilgiler</b></label></h4><hr />
                                    </div>
                                    <div class="row">

                                        <div class="col-3">
                                            <label for="isim" aria-hidden="false">Adınız</label>
                                        </div>

                                        <div class="col-3">
                                            <input type="text" class="form-control" id="inputName" name="inputName" required />
                                            <div class="invalid-feedback">Lütfen geçerli bir ad giriniz!</div>
                                        </div>

                                        <div class="col-3">
                                            <label for="soyisim" aria-hidden="false">Soyadınız</label>
                                        </div>

                                        <div class="col-3">
                                            <input type="text" class="form-control" id="inputSurname" name="inputSurname" required />
                                            <div class="invalid-feedback">
                                                Lütfen geçerli bir soyad giriniz!
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-3">
                                            <label for="gender" aria-hidden="false">Cinsiyetiniz:</label>
                                        </div>
                                        <div class="col-3 ">
                                            <select type="form-select" class="form-control" id="cinsiyet" name="cinsiyet" required>
                                                <option value="">Seçiniz</option>
                                                <option value="kadin">Kadın</option>
                                                <option value="erkek">Erkek</option>
                                                <option value="bildirilmedi">Belirtmek İstemiyorum</option>
                                            </select>
                                        </div>

                                        <div class="col-3">
                                            <label for="engel" aria-hidden="false">Engel Durumu :</label>
                                        </div>

                                        <div class="col-3 ">
                                            <select type="form-select" class="form-control" id="engel" name="engel" required>
                                                <option value="">Seçiniz</option>
                                                <option value="Engelim Var">Var</option>
                                                <option value="Engelim Yok">Yok</option>
                                            </select>
                                        </div>                               

                                    </div>
                                    <br /><br />

                                    <div class="row">

                                        <div class="col-3">
                                            <label for="tarih" aria-hidden="false">Doğum Tarihiniz :</label>
                                        </div>


                                        <div class="col-3">
                                            <input type="date" class="form-control" id="dtarih" name="dtarih" required />
                                            <div class="invalid-feedback">
                                                Lütfen geçerli bir tarih giriniz!
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <label for="tarih" aria-hidden="false">Mezuniyet Durumu :</label>
                                        </div>
                                        <div class="col-3 ">
                                            <select type="form-select" class="form-control" id="mezuniyet" name="mezuniyet" required>
                                                <option value="">Seçiniz</option>
                                                <option value="mezun">Mezun</option>
                                                <option value="ogrenci">Öğrenci</option>
                                            </select>
                                        </div>
                                        <br />    <br />
                                        <br /><br />
                                        <div class="col-12 text-center">
                                            <h4><label class="form-label form-label-left form-label-auto" id="iletisim"><b>İletişim Bilgileri</b></label></h4>
                                            <hr />
                                        </div>

                                        <div class="row">

                                            <div class="col-3">
                                                <label class="form-sub-label" for="telefon" aria-hidden="false">Telefon Numarası</label>
                                            </div>
                                            <div class="col-3">
                                                <input type="number" class="form-control" id="inputNumber" name="inputNumber" required />
                                                <div class="invalid-feedback">
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <label class="form-sub-label" for="email" aria-hidden="false">E-Posta Adresi</label>
                                            </div>

                                            <div class="col-3">
                                                <input type="email" class="form-control" id="inputEmail" name="inputEmail" required />
                                                <div class="invalid-feedback">
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="mt-5" style={{marginBottom:"35px",paddingLeft:"70px"}}>
                                    <p id="goster"></p>
                                    <button class="px-5 btn btn-outline-success kayit" type="submit" onClick={() => kaydetvetut()}  >Kaydet</button>
                                    <button class="px-5 ms-3 btn btn-outline-danger goruntule" type="reset" onClick={() => profilGoster()} >Profil Görüntüle</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </center>
        </>
    );
}

export default  withAuth(Profil);