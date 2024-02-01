import { useEffect, useState } from "react";
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
import ConsultListFrequence from "../../components/ListConsultFrequence/ListConsultFrequence";
import { findUser } from "../../services/userService.js";
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile.jsx";

function Home() {
  const [displayAddStudent, setDisplayAddStudent] = useState("");
  const [showNewFrequence, setNewFrequence] = useState("none");
  const [showConsultFrequence, setShowConsultFrequence] = useState("none");
  const [show, setShow] = useState(false);

  const newFrequenceClose = () => setNewFrequence("none");

  const newFrequenceShow = () => {
    if (showNewFrequence === "flex") {
      setNewFrequence("none");
    } else {
      setShowConsultFrequence("none");
      setNewFrequence("flex");
    }
  };

  const consultFrequenceShowOrClose = () => {
    if (showConsultFrequence === "none") {
      setNewFrequence("none");
      setShowConsultFrequence("flex");
    } else if (showConsultFrequence === "flex") {
      setShowConsultFrequence("none");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function findUserLogged() {
    const response = await findUser();
    IfAddStudent(response.data.user);
  }

  function IfAddStudent(user) {
    if (user.add_student == false) {
      setDisplayAddStudent("none");
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

  useEffect(() => {
    findUserLogged();
  }, []);

  return (
    <MainHome display={displayAddStudent}>
      <Navbar type1="1" type2="2" state1="on" state2="off" />
      <NavbarMobile />
      <div id="painel">
        <div id="painel_header">
          <Logo width="0px" height="0px" font_size="25px" direction="row" />
        </div>
        <div id="backgroundGraphic">
          <Graphic />
        </div>
        <div id="painel_buttons">
          <Button
            variant="primary"
            onClick={handleShow}
            className="new-student"
          >
            Novo Aluno
          </Button>
          <DefaultButton
            img="./plusIcon.png"
            text="Nova Frequência"
            onClick={newFrequenceShow}
          />
          <DefaultButton
            img="./searchIcon.png"
            text="Consultar Frequência"
            onClick={consultFrequenceShowOrClose}
          />
        </div>
        <ListNewFrequence
          display={showNewFrequence}
          onClose={newFrequenceClose}
        />
        <ConsultListFrequence display={showConsultFrequence} />
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
