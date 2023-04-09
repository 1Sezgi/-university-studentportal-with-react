import { sifreGuncelle } from "../Function";



  
  const SifreGuncelle = (props) => {
    return (
      <>
            <div class="container" style={{ marginTop: "200px" }}>
                  <div class="row justify-content-center">
                      <div class="col-lg-12 text-center">
                          <i class="fa-solid fa-user-plus"></i><h2>Parola Sıfırlama</h2>
                      </div>
                  </div>
                      <div class="row justify-content-center">
                          <div class="col-4">
                              <div class="form-floating py-2">
                                  <input type="password" class="form-control" id="mevcutSifre" name="mevcutSifre" />
                                  <label htmlFor="floatingInput">Mevcut Şifre</label>
                              </div>
                              <div class="form-floating py-2">
                                  <input type="password" class="form-control" id="yeniSifre" name="yeniSifre"/>
                                  <label htmlFor="floatingPassword">Şifrenizi Tekrar Giriniz</label>
                              </div>
                              <div class="form-floating py-2">
                                  <input type="password" class="form-control" id="yeniSifreTekrar" name="yeniSifreTekrar"/>
                                  <label htmlFor="floatingPassword" class="mt-2">Şifrenizi Tekrar Giriniz</label>
                              </div>                            
                              <div>
                              <p id="sonuc"></p>
                              <button className="w-100 btn btn-lg btn-primary" id="kayit_btn" onClick={() => sifreGuncelle()}>Güncelle</button>
                              </div>
                          </div>
                      </div>
                 
             
  
          </div>
      
  
  
  
  
  
  
  
  
      </>
    );
  }
  
  export default SifreGuncelle;