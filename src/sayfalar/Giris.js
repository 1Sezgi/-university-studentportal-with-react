import React from 'react';
import { TiUserOutline } from "react-icons/ti";
import { IoCheckmarkSharp } from "react-icons/io5";
import { login } from "../Function";



function Giris() {
    return (
        <>

        
            <div class="container" style={{ marginTop: "200px" }}>
                <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                        <i class="fa-solid fa-right-to-bracket"></i><h2><TiUserOutline /></h2> <h2>Giriş</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-4">
                        <form class="">
                            <div class="form-floating py-2 ">
                                <input type="email" class="form-control" name="email" id="email" required />
                                <label for="email" class="form-label mt-2">E-mail Adress</label>
                            </div>

                            <div class="form-floating py-2 ">
                                <input type="password" class="form-control" name="password" id="password" required />
                                <label for="floatingPassword" class="mt-2">Password</label>
                            </div>
                        </form>
                        <div>
                            <button type='button' class="w-100 btn btn-lg btn-primary " onClick={() => login()}><IoCheckmarkSharp /></button>
                        </div>
                        <label class="form-check-label my-2 mx-5 px-5" for="form2Example3" style={{ backgroundColor: "white", opacity: "0.5",borderRadius:"2px" }}>
                        <a href="/SifreGuncelle"><b>Parolanızı mı unuttunuz ?</b></a> 
                        </label>
                        
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <p id="alert"></p> <br />
                        </div>
                    </div>
                </div>

            </div>

        </>
    );

}



export default Giris;




