import { ButtonSpace, ButtonImage } from "./ButtonStyled.jsx";

function Button({ type, text, height, width, top }) {
  return (
    <ButtonSpace type={type} height={height} width={width} top={top}>
      {text}
      <ButtonImage />
    </ButtonSpace>
  );
}

export default Button;
