import React from 'react';
import style from '../style.css';
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


const BasvuruBilgi = (props) => {
    const user_info = sessionStorage.getItem("user_info");
    var info_array = user_info.split(",");
    return (
        <div className="container mt-3 mb-5" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
            <div className="row bg-light rounded-4 shadow" style={{ marginLeft: "20%", padding: "5%" }}>
                <div className="col-12 border-light my-5">
                    <h1 className="text-center" style={{ color: "black" }}>Başvuru Bilgilerim</h1>
                    <div className="col-12 justify-content-center basvurubilgi">

                        <h2 className="text-center" style={{ color: "#d13242" }}>Kişisel Bilgilerim</h2><hr></hr>
                        <ul style={{ listStyle: "none", textAlign: "center" }}><br></br>
                            <li><b>İsim:</b> {info_array[0]}</li>
                            <li><b>Soyisim:</b> {info_array[1]}</li>
                            <li><b>Cinsiyet: </b>{info_array[2]}</li>
                            <li><b>Doğum Tarihi</b>: {info_array[3]}</li>
                            <li><b>Telefon Numarası:</b> {info_array[4]}</li>
                            <li><b>E-Mail Adresi:</b> {info_array[5]}</li>
                            <li><b>EngelDurumu:</b>{info_array[6]}</li>
                        </ul>

                        <br></br><h2 className="text-center" style={{ color: "#d13242" }}>Milliyet Bilgilerim</h2><hr></hr>
                        <ul style={{ listStyle: "none", textAlign: "center" }}>
                            <li><b>Milliyet:</b> {info_array[7]}</li>
                            <li><b>İkinci Milliyet:</b> {info_array[8]}</li>
                            <li><b>Yaşadığınız Ülke:</b> {info_array[9]}</li>
                            <li><b>Pasaport:</b> {info_array[10]}</li>
                            <li><b>Tc No</b>: {info_array[11]}</li>
                        </ul>

                        <br></br><h2 className="text-center" style={{ color: "#d13242" }}>Adres Bilgilerim</h2><hr></hr>
                        <ul style={{ listStyle: "none", textAlign: "center" }}>
                            <li><b>Yaşadığınız Şehir:</b> {info_array[12]}</li>
                            <li><b>Yaşadığınız İlçe:</b> {info_array[13]}</li>
                            <li><b>Yaşadığınız Mahalle:</b> {info_array[14]}</li>
                            <li><b>Yaşadığınız Sokak: </b>{info_array[15]}</li>
                            <li><b>Apartman No: </b>{info_array[16]}</li>
                            <li><b>Posta Kodu:</b> {info_array[17]}</li>
                        </ul>
                        <br></br><h2 className="text-center" style={{ color: "#d13242" }}>Eğitim Bilgilerim</h2><hr></hr>
                        <ul style={{ listStyle: "none", textAlign: "center" }}>
                            <li><b>Üniversite Adı:</b> {info_array[18]}</li>
                            <li><b>Bölüm Adı: </b>{info_array[19]}</li>
                            <li><b>Fakulte Adı:</b> {info_array[20]}</li>
                            <li><b>Mezuniyet Tarihi:</b> {info_array[21]}</li>
                            <li><b>Not Ortalaması:</b> {info_array[22]}</li>
                            <li><b>Mezuniyet Durumu: </b> {info_array[23]}</li>
                        </ul>
                        <br></br><h2 className="text-center" style={{ color: "#d13242" }}>Doküman Bilgilerim</h2><hr></hr>
                        <ul style={{ listStyle: "none", textAlign: "center" }}>
                            <li><b>İngilizce Yeterlilik Belgesi:</b><a href='" + info_array[24] + "' target="_blank">İngilizce Yeterlilik Belgesi</a></li>
                            <li><b>Cv: </b><a href='" + info_array[25] + "' target="_blank">Cv</a></li>
                            <li><b>Niyet Mektubu:</b><a href='" + info_array[26] + "' target="_blank">Niyet Mektubu</a></li>
                            <li><b>Pasaport:</b><a href='" + info_array[27] + "' target="_blank">Pasaport</a></li>
                            <li><b>İkametgah:</b><a href='" + info_array[28] + "' target="_blank">İkametgah</a></li>
                            <li><b>Diploma:</b><a href='" + info_array[29] + "' target="_blank">Diploma</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default  withAuth(BasvuruBilgi);

