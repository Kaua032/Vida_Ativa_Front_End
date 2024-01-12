import { ButtonArea } from "./DefaultButtonStyled";

function DefaultButton({ ...props }) {
  return (
    <ButtonArea img={props.img} onClick={props.onClick}>
      {props.text}
    </ButtonArea>
  );
}

export default DefaultButton;
