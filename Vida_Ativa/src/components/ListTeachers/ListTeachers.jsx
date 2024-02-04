import { useEffect, useState } from "react";
import { SpaceSearch } from "../Search/SearchStyled";
import { ListArea } from "./ListTeachersStyled";
import { allUsers, updateUser } from "../../services/userService";

function Listheader() {
  const [infoAllUsers, setInfoAllUsers] = useState();
  const [initialLoad, setInitialLoad] = useState(true);

  async function FindAllUsers() {
    try {
      const usersResponse = await allUsers();
      if (usersResponse.data.users[0].length > 0) {
        const users = usersResponse.data.users.map((user) => {
          return user;
        });
        users[0].sort((a, b) => a.name.localeCompare(b.name));
        setInfoAllUsers(users[0]);
      } else {
        console.warn("Nenhum usuário encontrado.");
      }
    } catch (error) {
      console.error("Erro ao obter usuários:", error);
    }
  }

  function PermissionCheck(index) {
    const inputStudent = document.getElementById(`${index}student`);
    const inputTeacher = document.getElementById(`${index}prof`);
    if (inputStudent && inputTeacher) {
      inputStudent.checked = infoAllUsers[index].add_student;
      inputTeacher.checked = infoAllUsers[index].add_teacher;
    }
  }

  function changeButtons() {
    document.getElementById("shadowButton").style.display = "none";
    document.getElementById("submitButton").style.display = "flex";
  }

  function assemblingData() {
    document.getElementById("shadowButton").style.display = "flex";
    document.getElementById("submitButton").style.display = "none";
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
    return inHandleSubmit(dataUsers);
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
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th className="titleNames">
              <p>Nome</p>
            </th>
            <th className="titleCpfs">
              <p>CPF</p>
            </th>
            <th className="student">
              <p>Aluno</p>
            </th>
            <th className="teacher">
              <p>Prof</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {infoAllUsers &&
            infoAllUsers.map((user, index) => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <td className="titleNames">
                  <p id="teacherName">{user.name}</p>
                </td>
                <td className="titleCpfs">
                  <p>{user.cpf}</p>
                </td>
                <input
                  type="hidden"
                  name="cpf"
                  id={`${index}cpf`}
                  value={user.cpf}
                />
                <td className="tdStudent">
                  <input
                    id={`${index}student`}
                    className="student"
                    type="checkbox"
                    name="add_student"
                    onChange={() => changeButtons()}
                  />
                </td>
                <td className="tdTeacher">
                  <input
                    id={`${index}prof`}
                    className="prof"
                    type="checkbox"
                    name="add_teacher"
                    onChange={() => changeButtons()}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
        className="buttonSubmit"
        id="submitButton"
        type="submit"
        onClick={() => assemblingData()}
      >
        Salvar
      </button>
      <button className="buttonSubmit" id="shadowButton">
        Salvar
      </button>
    </ListArea>
  );
}

export default Listheader;
