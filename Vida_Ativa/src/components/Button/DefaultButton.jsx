import { ButtonArea } from "./DefaultButtonStyled";

function DefaultButton({ ...props }) {
  return <ButtonArea img={props.img}>{props.text}</ButtonArea>;
}

export default DefaultButton;
