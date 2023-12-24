import ButtonNavbar from "../ButtonNavbar/ButtonNavbar";
import Logo from "../Logo/Logo";
import { MainNav, NavNav, PerfilNav } from "./NavbarStyled";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { findUser } from "../../services/userService";
import { UserContext } from "../../Context/UserContext.jsx";
import { useContext, useEffect, useState } from "react";

function Navbar({ type1, type2 }) {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const [userLoaded, setUserLoaded] = useState(false);

  async function signout() {
    Cookies.remove("token");
    navigate("/");
  }

  async function findUserLogged() {
    try {
      const response = await findUser();
      setUser(response.data.user);
      setUserLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (Cookies.get("token")) {
      findUserLogged();
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <MainNav>
      <NavNav>
        <Logo width="80px" height="38.405px" font_size="25px" direction="row" />
        <div id="buttons">
          <ButtonNavbar type={type1} state="on" content="Frequência" />
          <ButtonNavbar type={type2} state="off" content="Permissões" />
        </div>
      </NavNav>
      <PerfilNav>
        {userLoaded ? (
          <div>
            <h3>{user.name}</h3> <p>Professor</p>
          </div>
        ) : (
          navigate("/")
        )}
        <button onClick={signout} id="logout"></button>
      </PerfilNav>
    </MainNav>
  );
}

export default Navbar;
