import React from "react";
import { TiUserAddOutline } from "react-icons/ti";
import { sifreKontrol } from "../Function";

function Kayit() {

    return (
        <>
            <div class="container" style={{ marginTop: "200px" }}>
                <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                        <i class="fa-solid fa-user-plus"></i><h2><TiUserAddOutline /></h2><h2>Kayıt Ol</h2>
                    </div>
                </div>
                    <div class="row justify-content-center">
                        <div class="col-4">
                            <div class="form-floating py-2">
                                <input type="email" class="form-control" id="email" name="email" required />
                                <label for="floatingInput" class="mt-2">Email Adres</label>
                            </div>
                            <div class="form-floating py-2">
                                <input type="password" class="form-control" id="password1" name="password1" minLength="6" required />
                                <label for="floatingPassword" class="mt-2">Şifrenizi Giriniz</label>
                            </div>
                            <div class="form-floating py-2">
                                <input type="password" class="form-control" name="password2" id="password2" required />
                                <label for="floatingPassword" class="mt-2">Şifrenizi Tekrar Giriniz</label>
                            </div>
                            <div class="form-check d-flex justify-content-center mb-5">
                                <input class="form-check-input me-1" type="checkbox" value="" id="form2Example3c" required />
                                <label class="form-check-label" for="form2Example3" style={{ backgroundColor: "white", opacity: "0.5",borderRadius:"2px" }}>
                                    <a href="#!"><b>Kullanım Şartlarındaki</b>  </a> tüm beyanları kabul ediyorum.
                                </label>
                            </div>
                            <div>
                                <button class="w-100 btn btn-lg btn-primary" onClick={() => sifreKontrol()} >Hesap Oluştur</button>
                            </div>
                            <p class="d-flex justify-content-center mx-4 mb-3 mb-lg-4" id="alert"></p>
                        </div>
                    </div>
               
           

        </div>
        </>
    );
}
export default Kayit;