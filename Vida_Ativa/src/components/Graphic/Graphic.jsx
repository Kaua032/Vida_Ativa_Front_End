import { useEffect, useState } from "react";
import { GraphicStyle } from "./GraphicStyled";
import { allFrequenceOnTheMonth } from "../../services/frequenceService";

function Graphic() {
  const [lackFrequnceOnTheMonth, setLackFrequenceOnTheMonth] = useState();
  const [presentFrequnceOnTheMonth, setPresentFrequenceOnTheMonth] = useState();

  async function findFrequenceOnTheMonth() {
    const frequenceReponse = await allFrequenceOnTheMonth();

    setLackFrequenceOnTheMonth(frequenceReponse.data.frequencesFalse);
    setPresentFrequenceOnTheMonth(frequenceReponse.data.frequencesTrue);
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
    </GraphicStyle>
  );
}

export default Graphic;
