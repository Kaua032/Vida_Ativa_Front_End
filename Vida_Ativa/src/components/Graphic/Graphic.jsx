import { useEffect, useState } from "react";
import {
  BackgroundGraphic,
  GraphicStyle,
  InfoGraphic,
  SectionGraphic,
  Sticks,
} from "./GraphicStyled";
import { allFrequenceOnTheMonth, allFrequenceOnTheWeek } from "../../services/frequenceService";
import { AllStudents } from "../../services/studentService";

function Graphic() {
  const [lackFrequnceOnTheMonth, setLackFrequenceOnTheMonth] = useState();
  const [presentFrequnceOnTheMonth, setPresentFrequenceOnTheMonth] = useState();
  const [totalStudents, setTotalStudents] = useState();
  const [allFrequenceWeek, setAllFrequenceWeek] = useState();
  const weekInEnglish = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weekInPortuguese = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  const englishToPortuguese = {};
  weekInEnglish.forEach((day, index) => {
    englishToPortuguese[day] = weekInPortuguese[index];
  });

  async function findFrequenceOnTheMonth() {
    const frequenceResponse = await allFrequenceOnTheMonth();

    setLackFrequenceOnTheMonth(frequenceResponse.data.frequencesFalse);
    setPresentFrequenceOnTheMonth(frequenceResponse.data.frequencesTrue);
  }

  async function countTotalStudents() {
    const totalStudents = await AllStudents();

    setTotalStudents(totalStudents.data.users.length);
  }

  async function frequenceWeek() {
    const responseFrequenceWeek = await allFrequenceOnTheWeek();

    setAllFrequenceWeek(responseFrequenceWeek.data)
  }

  useEffect(() => {
    findFrequenceOnTheMonth();
    countTotalStudents();
    frequenceWeek();
  }, []);

  return (
    <GraphicStyle>
      <div id="header">
        <p id="present"> Presença | mês {presentFrequnceOnTheMonth}</p>
        <p id="lack"> Faltas | mês {lackFrequnceOnTheMonth}</p>
      </div>
      <SectionGraphic>
        <BackgroundGraphic>
          <div id="lines">
            <div> <hr /> </div>
            <div> <hr /> </div>
            <div> <hr /> </div>
            <div> <hr /> </div>
            <div> <hr /> </div>
            <div> <hr /> </div>
            <div> <hr /> </div>
            <div> <hr /> </div>
            <div> <hr /> </div>
            <div> <hr /> </div>
          </div>
          <div id="dates">
          {weekInEnglish.map((dayInEnglish) => (
          (() => {
            const dayInPortuguese = englishToPortuguese[dayInEnglish];
            if (
              allFrequenceWeek &&
              allFrequenceWeek[dayInEnglish] &&
              (allFrequenceWeek[dayInEnglish].frequencesTrue === 0 &&
                allFrequenceWeek[dayInEnglish].frequencesFalse === 0)
                ) {
              console.log(allFrequenceWeek[dayInEnglish])
              return (
                <InfoGraphic>
                  <Sticks greenheight="0px" redheight="0px">
                    <div id="green"></div>
                    <div id="red"></div>
                  </Sticks>
                  <p>{dayInPortuguese}</p>
                </InfoGraphic>
              );
            } else if (
              allFrequenceWeek &&
              allFrequenceWeek[dayInEnglish] &&
              totalStudents
            ) {
              return (
                <InfoGraphic>
                  <Sticks
                    greenheight={`${(allFrequenceWeek[dayInEnglish].frequencesTrue /
                      totalStudents) * 200}px`}
                    redheight={`${(allFrequenceWeek[dayInEnglish].frequencesFalse /
                      totalStudents) * 200}px`}
                  >
                    <div id="green"></div>
                    <div id="red"></div>
                  </Sticks>
                  <p>{dayInPortuguese}</p>
                </InfoGraphic>
              );
            }
          })()
        ))}
        </div>
        </BackgroundGraphic>
      </SectionGraphic>
    </GraphicStyle>
  );
}

export default Graphic;
