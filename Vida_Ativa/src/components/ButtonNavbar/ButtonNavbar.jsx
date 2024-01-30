import { ButtonNavStyle } from "../ButtonNavbar/ButtonNavbarStyled.jsx";

function ButtonNavbar({ ...props }) {
  return (
    <ButtonNavStyle display={props.display} type={props.type} state={props.state}>
      {props.content}
    </ButtonNavStyle>
  );
}

export default ButtonNavbar;
