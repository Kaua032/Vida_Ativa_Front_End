import { useEffect, useState } from "react";
import { AllStudents } from "../../services/studentService";
import { SpaceSearch } from "../Search/SearchStyled";
import { ListNewFrequenceArea } from "./ListNewFrequenceStyled";

function ListNewFrequence({ ...props }) {
  const [infoAllStudents, setInfoAllStudents] = useState();

  async function FindAllStudents() {
    const studentResponse = await AllStudents();
    const students = studentResponse.data.users.map((student) => {
      let date = new Date(student.registration);
      student.registration = date.toLocaleDateString("pt-BR");
      return student;
    });
    setInfoAllStudents(students);
  }

  const closeList = () => props.onClose();

  useEffect(() => {
    FindAllStudents();
  }, []);
  return (
    <ListNewFrequenceArea {...props}>
      <div>
        <button id="send">Enviar</button>
        <button id="cancel" onClick={closeList}>
          Cancelar
        </button>
      </div>
      <section>
        <header>
          <div id="header1">
            <p>Lista de Alunos</p>
            <input id="dateClass" type="date" />
            <form>
              <SpaceSearch>
                <input type="text" placeholder="Buscar" />
                <button type="submit">
                  <img src="/SearchListIcon.svg" alt="" />
                </button>
              </SpaceSearch>
            </form>
          </div>
        </header>
        <table>
          <thead>
            <tr>
              <th className="titleNames">
                <p>Nome</p>
              </th>
              <th>
                <p>CPF</p>
              </th>
              <th className="titleRegistrations">
                <p>Matrícula</p>
              </th>
              <th id="titleFrequence">
                <p>Frequência</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {infoAllStudents &&
              infoAllStudents.map((user, index) => (
                // eslint-disable-next-line react/jsx-key
                <tr>
                  <td className="titleNames">
                    <p id="studentName">{user.name}</p>
                  </td>
                  <td>
                    <p>{user.cpf}</p>
                  </td>
                  <input
                    type="hidden"
                    name="cpf"
                    id={`${index}cpf`}
                    value={user.cpf}
                  />
                  <td className="titleRegistrations">
                    <p>{user.registration}</p>
                  </td>
                  <td>
                    <input
                      id={`${index}frequence`}
                      type="checkbox"
                      name="frequence"
                      className="frequence"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </ListNewFrequenceArea>
  );
}

export default ListNewFrequence;
