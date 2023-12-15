import { ButtonSpace, ButtonImage } from "./ButtonStyled.jsx";

function Button({ type, text }) {
  return (
    <ButtonSpace type={type}>
      {text}
      <ButtonImage />
    </ButtonSpace>
  );
}

export default Button;
