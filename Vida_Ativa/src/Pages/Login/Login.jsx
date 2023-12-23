import ButtonLogin from "../../components/ButtonLogin/ButtonLogin.jsx";
import Input from "../../components/Input/Input.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import { DivLogin, LoginMain } from "./LoginStyled.jsx";

function Login() {

  function mascara(e){
    var v = e.target.value 

    if(isNaN(v[v.length-1])){
      e.target.value = v.substring(0, v.length-1);
      return
    }

    if(v.length == 3 || v.length == 7) e.target.value += ".";
    if(v.length == 11) e.target.value += "-"
  }

  return (
    <LoginMain>
      <Logo width="250px" height="120.015px" font_size="45px" direction="column"/>
      <DivLogin>
        <h1>Bem Vindo</h1>
        <form action="">
          <Input type="text"  placeholder="CPF" name="cpf" onKeyPress={mascara} maxLength="14" height="58px" width="500px" radius="50px"/>
          <Input type="password" placeholder="Senha" height="58px" width="500px" radius="50px"/>
          <ButtonLogin type="submit" text="Entrar" height="58px" width="500px" top="30px"/>
        </form>
      </DivLogin>
    </LoginMain>
  );
}

export default Login;
