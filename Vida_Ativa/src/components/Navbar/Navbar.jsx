import ButtonNavbar from "../ButtonNavbar/ButtonNavbar";
import Logo from "../Logo/Logo";
import { MainNav, NavNav, PerfilNav } from "./NavbarStyled";

function Navbar({type1, type2}) {
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
        <div>
          <h3>Vitor</h3>
          <p>Administrador</p>
        </div>
        <button id="logout"></button>
      </PerfilNav>
    </MainNav>
  );
}

export default Navbar;
