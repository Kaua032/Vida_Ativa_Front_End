import { InputStyled } from "./InputStyled";

function Input({ type, placeholder, height, width, radius }) {
  return (
    <InputStyled
      type={type}
      placeholder={placeholder}
      height={height}
      width={width}
      radius={radius}
    />
  );
}

export default Input;
