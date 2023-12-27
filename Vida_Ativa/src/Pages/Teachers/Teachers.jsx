import Listheader from "../../components/ListTeachers/ListTeachers";
import Navbar from "../../components/Navbar/Navbar";
import { MainTeachers } from "./TeachersStyled";

function Teachers() {
  return (
    <MainTeachers>
      <Navbar type1="1" type2="2" state1="off" state2="on" />
      <div id="painel">
        <Listheader />
      </div>
    </MainTeachers>
  );
}

export default Teachers;
