import styled from "styled-components";

export const ListArea = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  padding: 55px 30px 30px 30px;

  border-radius: 15px;
  border: 1px solid #b0b0b0;

  background: #fff;

  header p {
    color: #525668;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  #header1 {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
  }
  #header2 {
    display: flex;

    margin-top: 25px;
    justify-content: space-between;
    padding: 0px 40px 0px 20px;
  }

  table {
    margin-top: 15px;
  }
  .buttonSubmit {
    width: 200px;
    border: none;
    padding: 11px 75px;
    margin-left: 5px;
    cursor: pointer;
    background-repeat: no-repeat;
    border-radius: 50px;
    background: #0a7de8;
    color: #fff;

    color: #fff;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #submitButton {
    display: none;
  }
  #shadowButton {
    background-color: #8c9cac99;
    cursor: auto;
  }
  table thead {
    color: #525668;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  table thead tr th,
  table tbody tr td {
    width: 25%;
  }
  .titleNames{
    width: 40%;
  }

  .teacher p, .student p{
    text-align: center;
  }

  .tdStudent, .tdTeacher{
     text-align: center;
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
