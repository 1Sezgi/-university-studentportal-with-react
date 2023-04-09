import  { BrowserRouter, Routes, Route } from "react-router-dom";

import Anasayfa from "./sayfalar/Anasayfa";
import Profil from "./sayfalar/Profil";
import BasvuruForm from "./sayfalar/BasvuruForm";
import Iletisim from "./sayfalar/Iletisim";
import Giris from "./sayfalar/Giris";
import Kayit from "./sayfalar/Kayit";
import SideBar from './SideBar';
import ProfilBilgi from "./sayfalar/ProfilBilgi";
import SifreGuncelle from './sayfalar/SifreGuncelle';
import BasvuruBilgi from "./sayfalar/BasvuruBilgi";





export default function Router() {
   
    return( 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SideBar />}>
                <Route path="Anasayfa" element= {<Anasayfa />} />
                <Route path="Profil" element= {<Profil />} />
                <Route path="BasvuruForm" element= {<BasvuruForm />} />
                <Route path="Iletisim" element= {<Iletisim />} />
                <Route path="Giris" element= {<Giris />} />   
                <Route path="Kayit" element= {<Kayit />} />  
                <Route path="ProfilBilgi" element= {<ProfilBilgi />} />  
                <Route path="SifreGuncelle" element= {<SifreGuncelle />} /> 
                <Route path="BasvuruBilgi" element= {<BasvuruBilgi />} />                
            </Route>
        </Routes>
    </BrowserRouter>);
   
}

