import { useEffect, useState } from "react";
import { SpaceSearch } from "../Search/SearchStyled";
import { LineTeacher, ListArea } from "./ListTeachersStyled";
import { allUsers, updateUser } from "../../services/userService";
import { updateUserSchema } from "../../schemas/updateUserSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
  function ChangeInput(index) {
    const buttonSubmit = document.getElementById(`${index}submitbutton`);
    if (buttonSubmit) {
      buttonSubmit.style.display = "flex";
    }
  }

  const { register: registerUpdateUser, handleSubmit: handleSubmitUpdateUser } =
    useForm({ resolver: zodResolver(updateUserSchema) });

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
            <form onSubmit={handleSubmitUpdateUser(inHandleSubmit)}>
              <p className="teacher">{user.name}</p>
              <p className="cpf">{user.cpf}</p>
              <input
                type="hidden"
                name="cpf"
                value={user.cpf}
                {...registerUpdateUser("cpf")}
              />
              <input
                id={`${index}student`}
                className="student"
                type="checkbox"
                name="add_student"
                {...registerUpdateUser("add_student")}
              />
              <input
                id={`${index}prof`}
                className="prof"
                type="checkbox"
                name="add_teacher"
                defaultChecked={user.add_teacher}
                {...registerUpdateUser("add_teacher")}
              />
              <button
                className="buttonSubmit"
                id={`${index}submitbutton`}
                type="submit"
              ></button>
            </form>
          </LineTeacher>
        ))}
    </ListArea>
  );
}

export default Listheader;
