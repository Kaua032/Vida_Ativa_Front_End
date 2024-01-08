import { useEffect, useState } from "react";
import { SpaceSearch } from "../Search/SearchStyled";
import { LineTeacher, ListArea } from "./ListTeachersStyled";
import { allUsers } from "../../services/userService";

function Listheader() {
  const [infoAllUsers, setInfoAllUsers] = useState();
  const [initialLoad, setInitialLoad] = useState(true);

  async function FindAllUsers() {
    const usersReponse = await allUsers();
    console.log(usersReponse.data.users[0]);
    setInfoAllUsers(usersReponse.data.users[0]);
  }

  function PermissionCheck(index) {
    const inputStudent = document.getElementById(`${index}student`);
    const inputTeacher = document.getElementById(`${index}prof`);
    if (inputStudent && inputTeacher) {
      inputStudent.checked = infoAllUsers[index].add_student;
      inputTeacher.checked = infoAllUsers[index].add_teacher;
    }
  }

  useEffect(() => {
    FindAllUsers();
    if (infoAllUsers && initialLoad) {
      infoAllUsers.forEach((user, index) => {
        PermissionCheck(index);
      });
      setInitialLoad(false);
    }
  }, [initialLoad, infoAllUsers]);
  return (
    <ListArea>
      <header>
        <div id="header1">
          <p>Lista de Professores</p>
          <form>
            <SpaceSearch>
              <input type="text" placeholder="Buscar" />
              <button type="submit">
                <img src="/SearchListIcon.svg" alt="" />
              </button>
            </SpaceSearch>
          </form>
        </div>
        <div id="header2">
          <p>Nome</p>
          <p>CPF</p>
          <p>Aluno</p>
          <p>Prof</p>
        </div>
      </header>
      <table>
        {infoAllUsers &&
          infoAllUsers.map((user, index) => (
            // eslint-disable-next-line react/jsx-key
            <LineTeacher>
              <form action="">
                <p className="teacher">{user.name}</p>
                <p className="cpf">{user.cpf}</p>
                <input
                  id={`${index}student`}
                  className="student"
                  type="checkbox"
                  name="add_student"
                />
                <input
                  id={`${index}prof`}
                  className="prof"
                  type="checkbox"
                  name="add_teacher"
                />
              </form>
            </LineTeacher>
          ))}
      </table>
    </ListArea>
  );
}

export default Listheader;
