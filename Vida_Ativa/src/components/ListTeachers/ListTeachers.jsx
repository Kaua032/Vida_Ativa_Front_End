import { useEffect, useState } from "react";
import { SpaceSearch } from "../Search/SearchStyled";
import { LineTeacher, ListArea } from "./ListTeachersStyled";
import { allUsers } from "../../services/userService";

function Listheader() {
  const [infoAllUsers, setInfoAllUsers] = useState();

  async function FindAllUsers() {
    const usersReponse = await allUsers();

    setInfoAllUsers(usersReponse.data.users);
  }

  // function verifyChecked(id){

  // }

  useEffect(() => {
    FindAllUsers();
  }, []);
  return (
    <ListArea>
      <header>
        <div id="header1">
          <p>Lista de Chamada</p>
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
        <tbody>
          {infoAllUsers &&
            infoAllUsers.map((user, index) => (
              // eslint-disable-next-line react/jsx-key
              <LineTeacher>
                <th>
                  <p id="teacher">{user[index].name}</p>
                </th>
                <th>
                  <p>{user[index].cpf}</p>
                </th>
                <th>
                  <input
                    id={`${index}student`}
                    className="student"
                    type="checkbox"
                  />
                </th>
                <th>
                  <input id={`${index}prof`} className="prof" type="checkbox" />
                </th>
              </LineTeacher>
            ))}
        </tbody>
      </table>
    </ListArea>
  );
}

export default Listheader;
