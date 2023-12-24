import { InputStyled } from "./InputStyled";

function Input({ register, name, ...props }) {
  return <InputStyled {...register(name)} {...props} />;
}

export default Input;
