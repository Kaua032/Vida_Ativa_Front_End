import ButtonNavbar from "../ButtonNavbar/ButtonNavbar";
import Logo from "../Logo/Logo";
import { MainNav, NavNav, PerfilNav } from "./NavbarStyled";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { findUser, updatePasswordUser } from "../../services/userService";
import { UserContext } from "../../Context/UserContext.jsx";
import { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Input from "../Input/Input.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "../../schemas/changePasswordSchema.js";
import { ErrorText } from "../../Pages/Login/LoginStyled.jsx";

function Navbar({ type1, type2, state1, state2 }) {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const [userLoaded, setUserLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const [serverError, setServerError] = useState("");

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

  async function signout() {
    Cookies.remove("token");
    navigate("/");
  }

  async function findUserLogged() {
    try {
      const response = await findUser();
      setUser(response.data.user);
      setUserLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (Cookies.get("token")) {
      findUserLogged();
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <MainNav>
      <NavNav>
        <Logo width="80px" height="38.405px" font_size="25px" direction="row" />
        <div id="buttons">
          <Link to="/home">
            <ButtonNavbar type={type1} state={state1} content="Frequência" />
          </Link>
          <Link to="/teachers">
            <ButtonNavbar type={type2} state={state2} content="Permissões" />
          </Link>
        </div>
      </NavNav>
      <PerfilNav>
        {userLoaded ? (
          <div onClick={handleShow}>
            <h3>{user.name}</h3> <p>Professor</p>
          </div>
        ) : (
          navigate("/")
        )}
        <button onClick={signout} id="logout"></button>
      </PerfilNav>
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
    </MainNav>
  );
}

export default Navbar;
