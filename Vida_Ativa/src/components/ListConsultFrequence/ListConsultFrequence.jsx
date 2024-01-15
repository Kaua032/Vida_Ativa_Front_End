import { useEffect, useState } from "react";
import { SpaceSearch } from "../Search/SearchStyled";
import { ConsultListFrequenceArea } from "./ListConsultFrequenceStyled";
import { FrequenceByDate } from "../../services/frequenceService";

function ConsultListFrequence({ ...props }) {
  const [infoAllStudents, setInfoAllStudents] = useState();

  async function GetDate() {
    let inputDate = document.getElementById("dateConsult").value;
    if (!inputDate) {
      const currentDate = new Date();

      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;

      inputDate = formattedDate;

      let infoDate = {
        class_date: inputDate,
      };
      FindFrequenceByDate(infoDate);
    } else {
      let infoDate = {
        class_date: inputDate,
      };
      FindFrequenceByDate(infoDate);
    }
  }

  async function FindFrequenceByDate(data) {
    try {
      const response = await FrequenceByDate(data);

      if (!response.data.message) {
        console.log(response.data.frequences);
        setInfoAllStudents(response.data.frequences);
      } else {
        console.log(response.data.message);
        setInfoAllStudents();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetDate();
  }, []);

  return (
    <ConsultListFrequenceArea>
      <header>
        <p>Lista de Alunos</p>
        <input id="dateConsult" type="date" onChange={() => GetDate()} />
        <form action="">
          <SpaceSearch>
            <input type="text" placeholder="Buscar" />
            <button type="submit">
              <img src="/SearchListIcon.svg" alt="" />
            </button>
          </SpaceSearch>
        </form>
      </header>
      <section>
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
            {infoAllStudents ? (
              infoAllStudents.map((user, index) => (
                // eslint-disable-next-line react/jsx-key
                <tr>
                  <td className="titleNames">
                    <p id="studentName">{user.name}</p>
                  </td>
                  <td>
                    <p>{user.cpf_student}</p>
                  </td>
                  <input
                    type="hidden"
                    name="cpf"
                    id={`${index}cpf`}
                    value={user.cpf_student}
                  />
                  <td className="titleRegistrations">
                    <p>{user.registration}</p>
                  </td>
                  <td>
                    <input
                      id={`${index}frequence`}
                      type="checkbox"
                      name="frequence"
                      defaultChecked={user.frequence}
                      className="frequence"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  <img src="./alerta.png" alt="Alerta" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </ConsultListFrequenceArea>
  );
}

export default ConsultListFrequence;
