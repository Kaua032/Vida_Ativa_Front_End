import { useEffect, useState } from "react";
import { SpaceSearch } from "../Search/SearchStyled";
import { LineTeacher, ListArea } from "./ListTeachersStyled";
import { allUsers, updateUser } from "../../services/userService";

function Listheader() {
  const [infoAllUsers, setInfoAllUsers] = useState();
  const [initialLoad, setInitialLoad] = useState(true);

  async function FindAllUsers() {
    const usersReponse = await allUsers();
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
  
  function changeButtons(){
    document.getElementById("shadowButton").style.display = "none"
    document.getElementById("submitButton").style.display = "flex"
  }

  function assemblingData() {
    document.getElementById("shadowButton").style.display = "flex"
    document.getElementById("submitButton").style.display = "none"
    let dataUsers = [];
    if (infoAllUsers) {
      for (let i = 0; i < infoAllUsers.length; i++) {
        const inputCpf = document.getElementById(`${i}cpf`).value;
        const inputStudent = document.getElementById(`${i}student`).checked;
        const inputProf = document.getElementById(`${i}prof`).checked;

        const currentUser = {
          cpf: inputCpf,
          add_student: Boolean(inputStudent),
          add_teacher: Boolean(inputProf),
        };

        dataUsers.push(currentUser);
      }
    }
    return inHandleSubmit(dataUsers)
  }

  async function inHandleSubmit(data) {
    try {
      console.log(data);
      await updateUser(data);
    } catch (error) {
      console.log(error);
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
      {infoAllUsers &&
        infoAllUsers.map((user, index) => (
          // eslint-disable-next-line react/jsx-key
          <LineTeacher>
            <p className="teacher">{user.name}</p>
            <p className="cpf">{user.cpf}</p>
            <input
              type="hidden"
              name="cpf"
              id={`${index}cpf`}
              value={user.cpf}
            />
            <input
              id={`${index}student`}
              className="student"
              type="checkbox"
              name="add_student"
              onChange={() => changeButtons()}
            />
            <input
              id={`${index}prof`}
              className="prof"
              type="checkbox"
              name="add_teacher"
              onChange={() => changeButtons()}
            />
          </LineTeacher>
        ))}
      <button
        className="buttonSubmit"
        id="submitButton"
        type="submit"
        onClick={() => assemblingData()}
      >
        Salvar
      </button>
      <button className="buttonSubmit" id="shadowButton">Salvar</button>
    </ListArea>
  );
}

export default Listheader;
