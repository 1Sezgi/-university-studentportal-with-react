
import React from "react"
import { IoMailOutline } from "react-icons/io5";
import { FcSmartphoneTablet } from "react-icons/fc";



function Iletisim() {

    return (

        <>
            <section>
                <div className="container">
                 
                    <div className="row golge" style={{ backgroundColor: "#2865b0", borderRadius:"8px",margin:"140px" }}>
                    <h3><strong><FcSmartphoneTablet/>BİZE ULAŞIN..</strong></h3>
                        <div className="col-6 py-2" >
                            <div class="form-floating py-2">
                                <input type="text" id="inputName" name='name' class="form-control" />
                                <label for="inputName" class="col-form-label mt-2">Ad Soyad</label>

                            </div>

                            <div class="form-floating py-2 ">
                                <input type="email" class="form-control mb-2" name="mail" id="mail" />
                                <label for="email" class="mt-2">E-mail Adress</label>
                            </div>
                            <textarea rows={5} cols={63}></textarea>
                            <button type="button" class="btn btn-dark" >Mesaj Gönder</button>
                        </div>
                        <div className="col-6 text-center center mt-5 py-5" style={{ color: "white" }}>
                            <div>
                                <a href="mailto:career@khas.edu.tr" style={{ color: "white", textDecoration: "none" }}><IoMailOutline />erasmus@khas.edu.tr</a>
                            </div>
                            <div>
                                <span className="tel">
                                    <a href="tel:+90 (212) 533 65 32" style={{ color: "white", textDecoration: "none" }} title="Ara">
                                        +90 (212) 533 65 32 /1222
                                    </a>
                                </span>
                            </div>

                            <div>
                                <p>Address: Cibali Mah. Hisaraltı Cad. No:17 </p>
                                <p>Fatih / İSTANBUL 34083</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Iletisim;