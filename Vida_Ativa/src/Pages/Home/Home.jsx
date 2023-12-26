import Graphic from "../../components/Graphic/Graphic";
import Navbar from "../../components/Navbar/Navbar";
import { MainHome } from "./HomeStyled";

function Home() {
  return (
    <MainHome>
      <Navbar type1="1" type2="2" state1="on" state2="off" />
      <div id="painel">
        <Graphic />
      </div>
    </MainHome>
  );
}

export default Home;
