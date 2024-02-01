import { Link, useNavigate } from "react-router-dom";
import {
  ButtonNavMobile,
  FooterMobile,
  NavMobile,
  NavbarMobileMain,
} from "./NavbarMobileStyled";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "../../schemas/changePasswordSchema";
import { findUser, updatePasswordUser } from "../../services/userService";
import { ErrorText } from "../../Pages/Login/LoginStyled";
import { Button, Modal } from "react-bootstrap";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";

function NavbarMobile({ ...props }) {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [serverError, setServerError] = useState("");
  const [displayAddTeacher, setDisplayAddTeacher] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register: registerChangePassword,
    handleSubmit: handleSubmitChangePassword,
    formState: { errors: errorsChangePassword },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
  });

  async function inHandleSubmit(data) {
    try {
      const response = await updatePasswordUser(data);
      console.log(response);
    } catch (error) {
      setServerError(error.response.data.message);
      console.log(error);
    }
  }

  async function findUserLogged() {
    try {
      const response = await findUser();
      await ifCanAddTeacher(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  function ifCanAddTeacher(user) {
    if (user.add_teacher == false) {
      setDisplayAddTeacher("none");
      return;
    }
    return setDisplayAddTeacher("");
  }

  async function logOut() {
    Cookies.remove("token");
    navigate("/");
  }

  useEffect(() => {
    findUserLogged();
  }, []);

  return (
    <NavbarMobileMain>
      <NavMobile>
        <Link to="/home">
          <ButtonNavMobile
            display="flex"
            type={props.type1}
            state={props.state1}
          />
        </Link>
        <Link to="/teachers">
          <ButtonNavMobile
            display={displayAddTeacher}
            type={props.type2}
            state={props.state2}
          />
        </Link>
      </NavMobile>
      <FooterMobile>
        <button id="changePassword" onClick={handleShow}></button>
        <button id="logout" onClick={logOut}></button>
      </FooterMobile>
      <Modal className="modalAddTeacher" show={show} onHide={handleClose}>
        <form onSubmit={handleSubmitChangePassword(inHandleSubmit)}>
          <Logo
            width="80px"
            height="38.405px"
            font_size="25px"
            direction="row"
          />

          <Input
            name="current_password"
            type="password"
            placeholder="Senha atual"
            height="45px"
            width="460px"
            radius="20px"
            register={registerChangePassword}
          />
          {errorsChangePassword.current_password && (
            <ErrorText>
              {errorsChangePassword.current_password.message}
            </ErrorText>
          )}
          {serverError && <ErrorText>{serverError}</ErrorText>}

          <Input
            name="new_password"
            type="password"
            placeholder="Nova senha"
            height="45px"
            width="460px"
            radius="20px"
            register={registerChangePassword}
          />
          {errorsChangePassword.new_password && (
            <ErrorText>{errorsChangePassword.new_password.message}</ErrorText>
          )}
          {serverError && <ErrorText>{serverError}</ErrorText>}

          <div id="footer">
            <Button id="cancel" variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button className="submit" type="submit" variant="primary">
              Atualizar
            </Button>
          </div>
        </form>
      </Modal>
    </NavbarMobileMain>
  );
}

export default NavbarMobile;
