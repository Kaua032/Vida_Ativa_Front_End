import { useEffect, useState } from "react";
import {
  BackgroundGraphic,
  GraphicStyle,
  InfoGraphic,
  SectionGraphic,
  Sticks,
} from "./GraphicStyled";
import { allFrequenceOnTheMonth } from "../../services/frequenceService";

function Graphic() {
  const [lackFrequnceOnTheMonth, setLackFrequenceOnTheMonth] = useState();
  const [presentFrequnceOnTheMonth, setPresentFrequenceOnTheMonth] = useState();

  async function findFrequenceOnTheMonth() {
    const frequenceResponse = await allFrequenceOnTheMonth();

    setLackFrequenceOnTheMonth(frequenceResponse.data.frequencesFalse);
    setPresentFrequenceOnTheMonth(frequenceResponse.data.frequencesTrue);
  }

  useEffect(() => {
    findFrequenceOnTheMonth();
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
            <div> <p>35</p> <hr /> </div>
            <div> <p>30</p> <hr /> </div>
            <div> <p>25</p> <hr /> </div>
            <div> <p>20</p> <hr /> </div>
            <div> <p>15</p> <hr /> </div>
            <div> <p>10</p> <hr /> </div>
            <div> <p>5</p> <hr /> </div>
            <div> <p>0</p> <hr /> </div>
          </div>
          <div id="dates">
            <p>Domingo</p>
            <p>Segunda</p>
            <p>Terça</p>
            <p>Quarta</p>
            <p>Quinta</p>
            <p>Sexta</p>
            <p>Sábado</p>
          </div>
        </BackgroundGraphic>
        <InfoGraphic>
            <Sticks greenHeight="74px" redHeight="50px">
                <div id="green"></div>
                <div id="red"></div>
            </Sticks>
        </InfoGraphic>
      </SectionGraphic>
    </GraphicStyle>
  );
}

export default Graphic;
