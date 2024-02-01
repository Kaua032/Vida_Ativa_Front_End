import { Link } from "react-router-dom";
import {
  ButtonNavMobile,
  NavMobile,
  NavbarMobileMain,
} from "./NavbarMobileStyled";

function NavbarMobile({ ...props }) {
  return (
    <NavbarMobileMain>
      <NavMobile>
        <Link to="/home">
          <ButtonNavMobile type={props.type1} state={props.state1} />
        </Link>
        <Link to="/teachers">
          <ButtonNavMobile type={props.type2} state={props.state2} />
        </Link>
      </NavMobile>
      <div></div>
    </NavbarMobileMain>
  );
}

export default NavbarMobile;
