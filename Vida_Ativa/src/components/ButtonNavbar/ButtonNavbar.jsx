import { ButtonNavStyle } from "../ButtonNavbar/ButtonNavbarStyled.jsx";

function ButtonNavbar({ state, content, type }) {
  return (
    <ButtonNavStyle type={type} state={state}>
      {content}
    </ButtonNavStyle>
  );
}

export default ButtonNavbar;
