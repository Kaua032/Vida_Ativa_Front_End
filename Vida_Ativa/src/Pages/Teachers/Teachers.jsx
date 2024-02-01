import Listheader from "../../components/ListTeachers/ListTeachers";
import Navbar from "../../components/Navbar/Navbar";
import { MainTeachers } from "./TeachersStyled";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Logo from "../../components/Logo/Logo";
import { signup } from "../../services/userService.js";
import { signupSchema } from "../../schemas/signupSchema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorText } from "../Login/LoginStyled.jsx";
import Input from "../../components/Input/Input.jsx";
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile.jsx";

function Teachers() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function mascara(e) {
    var v = e.target.value;

    if (isNaN(v[v.length - 1])) {
      e.target.value = v.substring(0, v.length - 1);
      return;
    }

    if (v.length == 3 || v.length == 7) e.target.value += ".";
    if (v.length == 11) e.target.value += "-";
  }

  const [serverError, setServerError] = useState("");

  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  async function inHandleSubmit(data) {
    try {
      await signup(data);
      handleClose();
      window.location.reload();
    } catch (error) {
      setServerError(error.response.data.message);
    }
  }

  return (
    <MainTeachers>
      <Navbar type1="1" type2="2" state1="off" state2="on" />
      <NavbarMobile type1="1" type2="2" state1="off" state2="on" />
      <div id="painel">
        <div id="painel_header">
          <Logo width="0px" height="0px" font_size="25px" direction="row" />
        </div>
        <div id="divButton">
          <Button
            variant="primary"
            onClick={handleShow}
            className="new-teacher"
          >
            Novo Professor
          </Button>
        </div>
        <Listheader />
      </div>
      <Modal className="modalAddTeacher" show={show} onHide={handleClose}>
        <form onSubmit={handleSubmitSignup(inHandleSubmit)}>
          <Logo
            width="80px"
            height="38.405px"
            font_size="25px"
            direction="row"
          />

          <Input
            name="name"
            type="text"
            placeholder="Nome Completo"
            autoFocus
            height="45px"
            width="460px"
            radius="20px"
            register={registerSignup}
          />
          {errorsSignup.name && (
            <ErrorText>{errorsSignup.name.message}</ErrorText>
          )}
          {serverError && <ErrorText>{serverError}</ErrorText>}
          <Input
            name="cpf"
            type="text"
            placeholder="000.000.000-00"
            onKeyPress={mascara}
            maxLength="14"
            autoFocus
            height="45px"
            width="460px"
            radius="20px"
            register={registerSignup}
          />
          {errorsSignup.cpf && (
            <ErrorText>{errorsSignup.cpf.message}</ErrorText>
          )}
          {serverError && <ErrorText>{serverError}</ErrorText>}
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            autoFocus
            height="45px"
            width="460px"
            radius="20px"
            register={registerSignup}
          />
          {errorsSignup.password && (
            <ErrorText>{errorsSignup.password.message}</ErrorText>
          )}
          {serverError && <ErrorText>{serverError}</ErrorText>}
          <div id="footer">
            <Button id="cancel" variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button className="submit" type="submit" variant="primary">
              Adicionar
            </Button>
          </div>
        </form>
      </Modal>
    </MainTeachers>
  );
}

export default Teachers;
