import DefaultButton from "../../components/Button/DefaultButton";
import Graphic from "../../components/Graphic/Graphic";
import Navbar from "../../components/Navbar/Navbar";
import { MainHome } from "./HomeStyled";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function Home() {
  return (
    <MainHome>
      <Navbar type1="1" type2="2" state1="on" state2="off" />
      <div id="painel">
        <Graphic />
        <div id="painel_buttons">
          <Button variant="primary"  className="new-student">Novo Aluno</Button>
          <DefaultButton img="./plusIcon.png" text="Nova Frequência" />
          <DefaultButton img="./searchIcon.png" text="Consultar Frequência" />
        </div>
      </div>
    </MainHome>
  );
}

export default Home;
