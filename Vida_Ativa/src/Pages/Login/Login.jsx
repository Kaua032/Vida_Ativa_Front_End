import ButtonLogin from "../../components/ButtonLogin/ButtonLogin.jsx";
import Input from "../../components/Input/Input.jsx";
import Logo from "../../components/Logo/Logo.jsx";

function Login() {
  return (
    <>
      <Logo />
      <div>
        <h1>Bem Vindo</h1>
        <Input type="" placeholder="CPF" />
        <Input type="password" placeholder="Senha" />
        <ButtonLogin type="button" text="Entrar" />
      </div>
    </>
  );
}

export default Login;
