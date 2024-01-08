import styled from "styled-components";

export const ListArea = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;

  border-radius: 15px;
  border: 1px solid #b0b0b0;

  background: #fff;

  padding: 55px 0px 10px 0px;

  color: #525668;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  #header1 {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
  }
  #header2 {
    display: flex;

    margin-top: 25px;
    justify-content: space-between;
    padding: 0px 20px;
  }

  table {
    margin-top: 15px;
  }
`;

export const LineTeacher = styled.div`
  display: flex;

  color: #525668;

  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  border-top: 1px solid #dcdcdc;
  padding: 10px 15px;

  form{
    width: 100%;
    display: flex;
  }

  form *{
    width: 25%;
  }
  .cpf {
    text-align: center;

  }
  .student {
    margin-left: 15%;
  }
  .prof {
    margin-left: 27%;
  }
  
  .prof[type="checkbox"],
  .student[type="checkbox"] {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #b22222;
  }
  .prof[type="checkbox"]:checked,
  .student[type="checkbox"]:checked {
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

`;
