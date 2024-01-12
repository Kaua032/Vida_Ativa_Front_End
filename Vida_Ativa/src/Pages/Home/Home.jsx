import { useState } from "react";
import DefaultButton from "../../components/Button/DefaultButton";
import Graphic from "../../components/Graphic/Graphic";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import { ErrorText } from "../Login/LoginStyled";
import { MainHome } from "./HomeStyled";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "../../schemas/studentSchema";
import { RegisterStudent } from "../../services/studentService";
import ListNewFrequence from "../../components/ListNewFrequence/ListNewFrequence";

function Home() {
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
    register: registerStudent,
    handleSubmit: handleSubmitStudent,
    formState: { errors: errorsStudent },
  } = useForm({
    resolver: zodResolver(studentSchema),
  });

  async function inHandleSubmit(data) {
    try {
      await RegisterStudent(data);
      handleClose();
      window.location.reload();
    } catch (error) {
      setServerError(error.response.data.message);
    }
  }

  return (
    <MainHome>
      <Navbar type1="1" type2="2" state1="on" state2="off" />
      <div id="painel">
        <Graphic />
        <div id="painel_buttons">
          <Button
            variant="primary"
            onClick={handleShow}
            className="new-student"
          >
            Novo Aluno
          </Button>
          <DefaultButton img="./plusIcon.png" text="Nova Frequência" />
          <DefaultButton img="./searchIcon.png" text="Consultar Frequência" />
        </div>
        <ListNewFrequence />
      </div>
      <Modal className="modalAddTeacher" show={show} onHide={handleClose}>
        <form onSubmit={handleSubmitStudent(inHandleSubmit)}>
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
            register={registerStudent}
          />
          {errorsStudent.name && (
            <ErrorText>{errorsStudent.name.message}</ErrorText>
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
            register={registerStudent}
          />
          {errorsStudent.cpf && (
            <ErrorText>{errorsStudent.cpf.message}</ErrorText>
          )}
          {serverError && <ErrorText>{serverError}</ErrorText>}
          <Input
            name="registration"
            type="date"
            placeholder="000.000.000-00"
            autoFocus
            height="45px"
            width="460px"
            radius="20px"
            register={registerStudent}
          />
          {errorsStudent.registration && (
            <ErrorText>{errorsStudent.registration.message}</ErrorText>
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
    </MainHome>
  );
}

export default Home;
