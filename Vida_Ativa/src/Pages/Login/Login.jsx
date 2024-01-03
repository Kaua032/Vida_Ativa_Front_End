import { useState } from "react";
import ButtonLogin from "../../components/ButtonLogin/ButtonLogin.jsx";
import Input from "../../components/Input/Input.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import { DivLogin, ErrorText, LoginMain } from "./LoginStyled.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/signinSchema.js";
import { useNavigate } from "react-router-dom";
import { signin } from "../../services/userService.js";
import Cookies from "js-cookie";

function Login() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  async function inHandleSubmit(data) {
    try {
      const response = await signin(data);
      console.log(response)
      Cookies.set("token", response.data.token, { expires: 1 });
      navigate("/home");
    } catch (error) {
      setServerError(error.response.data.message);
      console.log(error);
    }
  }

  function mascara(e) {
    var v = e.target.value;

    if (isNaN(v[v.length - 1])) {
      e.target.value = v.substring(0, v.length - 1);
      return;
    }

    if (v.length == 3 || v.length == 7) e.target.value += ".";
    if (v.length == 11) e.target.value += "-";
  }

  return (
    <LoginMain>
      <Logo
        width="250px"
        height="120.015px"
        font_size="45px"
        direction="column"
      />
      <DivLogin>
        <h1>Bem Vindo</h1>
        <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
          <Input
            name="cpf"
            type="text"
            placeholder="CPF"
            onKeyPress={mascara}
            maxLength="14"
            height="58px"
            width="500px"
            radius="50px"
            register={registerSignin}
          />
          {errorsSignin.cpf && <ErrorText>{errorsSignin.cpf.message}</ErrorText>}
          {serverError && <ErrorText>{serverError}</ErrorText>}
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            height="58px"
            width="500px"
            radius="50px"
            register={registerSignin}
          />
          {errorsSignin.password && <ErrorText>{errorsSignin.password.message}</ErrorText>}
          {serverError && <ErrorText>{serverError}</ErrorText>}
          <ButtonLogin
            type="submit"
            text="Entrar"
            height="58px"
            width="500px"
            top="30px"
          />
        </form>
      </DivLogin>
    </LoginMain>
  );
}

export default Login;
