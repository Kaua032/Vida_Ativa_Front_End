import ButtonLogin from "../../components/ButtonLogin/ButtonLogin.jsx";
import Input from "../../components/Input/Input.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import { DivLogin, LoginMain } from "./LoginStyled.jsx";

function Login() {
  return (
    <LoginMain>
      <Logo width="250px" height="120.015px" font_size="45px" direction="column"/>
      <DivLogin>
        <h1>Bem Vindo</h1>
        <Input type="text" placeholder="CPF" height="58px" width="500px" radius="50px"/>
        <Input type="password" placeholder="Senha" height="58px" width="500px" radius="50px"/>
        <ButtonLogin type="button" text="Entrar" height="58px" width="500px" top="30px"/>
      </DivLogin>
    </LoginMain>
  );
}

export default Login;
