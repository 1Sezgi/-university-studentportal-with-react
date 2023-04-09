import { Link, Outlet } from "react-router-dom";
import style from './style.css';
import logo from './img/khaslogo.png';


var isLogin = sessionStorage.getItem("isLogin");


if (isLogin === "false") {
  sessionStorage.setItem("isLogin", "false");
}

export default function SideBar(props) {
  const menuItems = [{ id: 1, title: "ANASAYFA", link: "/Anasayfa", isLoggedIn: false }, { id: 2, title: "PROFİL", link: "/Profil", isLoggedIn: true }, { id: 3, title: "BAŞVURU FORMU", link: "/BasvuruForm", isLoggedIn: true }, { id: 4, title: "İLETİŞİM", link: "/Iletisim", isLoggedIn: false }];

  const SideBarButon = [{ id: 5, title: "GİRİŞ", link: "/Giris", isLoggedIn: false}, { id: 6, title: "KAYIT", link: "/Kayit", isLoggedIn: false }];

  const logout = () => {

    var isLogin = sessionStorage.getItem("isLogin");

    isLogin = false;

    sessionStorage.setItem("user_info", null);

    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logout_Btn").style.display = "none";
    document.getElementById("btn_div").style.display = "inline-block";
    window.location.href = '/Giris';

  }

  return (
    <>

      <header class="header" >
        <div class="container-fluid" id="back">
          <div class="row flex-nowrap">
            <div class="col-4 col-lg-2 position-relative" style={{ backgroundColor: "#b5b5b5", opacity: "0.7" }}>
              <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <div class="col-12 col-lg-12 text-center">
                  <img src={logo} alt="Logo" class=" mt-5" style={{ width: "120px", height: "120px" }} />
                </div>
                <div class="col-12 col-lg-12"> 
                  <ul
                    class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center justify-content-center"
                    id="menu"
                  >
                    {menuItems.map((menuItem) =>
                      !menuItem.isLoggedIn || isLogin === "true" ? (
                        <li key={menuItem.id} className="py-3 mx-3">
                          <Link
                            className="text-decoration-none"
                            style={{ color: "white", fontWeight: "bold" }}
                            to={menuItem.link}
                          >
                            {menuItem.title}
                          </Link>
                          <hr />
                        </li>
                      ) : null
                    )}
                  </ul>
                </div>
                <div class="col-12 col-lg-12">
                  <div id="btn_div" class="justify-content-between" style={{ position: "absolute", bottom: "25px", left: "calc((100% - 200px) / 2)" }}>
                    {SideBarButon.map((button) =>
                      (button.isLoggedIn === false) && (isLogin !== "true") && (
                        <Link key={button.id} to={button.link} class="btn btn-secondary py-3 my-3 buyutec" style={{ backgroundColor: "#0D47A1", opacity: "0.5", color: "white",height:"60px", marginLeft:"15px"}}>
                          {button.title}
                        </Link>
                      )
                    )}
                  </div>
                  {isLogin === "true" && (
                    <div className="justify-content-between" style={{ position: "absolute", top: "800px", left: "calc((100% - 88px) / 2)" }}>
                      <button onClick={logout} className="btn btn-secondary py-4 mx-1 buyutec" id="logout_Btn" style={{ backgroundColor: "red", opacity: "0.5", color: "white" }}>
                        Çıkış Yap
                      </button>
                    </div>
                  )}
                </div>
              
              </div>
            </div>
            <div className="col-8 col-lg-10" id="outlet">
              <Outlet />
            </div>
          </div>
        </div>
      </header>
    </>
  );

}