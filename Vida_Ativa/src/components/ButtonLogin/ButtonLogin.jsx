import { ButtonSpace, ButtonImage } from "./ButtonStyled.jsx";

function Button({...props }) {
  return (
    <ButtonSpace {...props} >
      <ButtonImage />
      {props.text}
    </ButtonSpace>
  );
}

export default Button;
