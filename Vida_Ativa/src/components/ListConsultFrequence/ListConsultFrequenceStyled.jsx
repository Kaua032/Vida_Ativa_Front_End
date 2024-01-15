import styled from "styled-components";

export const ConsultListFrequenceArea = styled.div`
    max-width: 1000px;
    width: 100%;

    display: ${(props) => props.display};
    flex-direction: column;
    gap: 15px;

     section {
    width: 100%;
    padding: 50px 20px 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    border-radius: 15px;
    border: 1px solid #dcdcdc;
    background: #f9fbfe;
  }
  section header {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  section header #header1 {
    display: flex;
    width: 100%;

    justify-content: space-between;
  }
  section header p {
    color: #525668;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  section header #header1 #dateClass {
    border: none;

    color: #525668;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  table thead {
    color: #525668;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  table thead tr #titleFrequence {
    text-align: center;
  }
  table {
    width: 100%;
  }
  table thead tr th,
  table tbody tr td {
    width: 25%;
  }
  .titleNames {
    width: 30%;
  }
  .frequence[type="checkbox"] {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #b22222;
    margin-left: 42.73799001041779%;
  }
  .titleRegistrations {
    width: 30%;
  }
  .frequence[type="checkbox"]:checked {
    appearance: none; /* remove o estilo padrão do navegador */
    background-color: #008037;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    border: none;

    background-image: url("/checkedInput.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`
