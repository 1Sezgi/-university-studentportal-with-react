import React from 'react';
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




const ProfilBilgi = (props) => {

    const myprofile = JSON.parse(sessionStorage.getItem('profil'));

    return(
        <div className="container">
            <div className="row justify-content-center my-5 align-items-center">
                <div className="col-8 mx-auto bg-dark text-white border-warning" style={{borderRadius:"16px"}} >
                    <div className="row justify-content-center my-5">
                        <div className="col-11">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="text-center">PROFİL BİLGİLERİM</h1>
                                </div>
                                <div className="col-12 text-center">
                                     <ul style={{listStyleType:"none", textTransform:"uppercase"}}>
                                            <li>{myprofile.Adınız}</li>
                                            <li>{myprofile.Soyadınız}</li>
                                            <li>{myprofile.Cinsiyetiniz}</li>
                                            <li>{myprofile.DoğumTarihi}</li>
                                            <li>{myprofile.MezuniyetDurumu}</li>
                                            <li>{myprofile.TelefonNumarası}</li>
                                            <li>{myprofile.MailAdresiniz}</li>                                        
                                    </ul> 
                                </div>
                               
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withAuth(ProfilBilgi);