import styled from "styled-components";

export const MainHome = styled.main`
  display: flex;

  #painel {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 50px;
  }
  #painel_buttons {
    width: 630px;
    display: flex;
    justify-content: space-between;
    margin: auto;
  }
  #painel_buttons .new-student {
    height: 40px;
    padding: 0px 15px 0px 45px;

    border-radius: 50px;
    background: #0a7de8;

    background-image: url("./plusIcon.png");
    background-repeat: no-repeat;
    background-position: 5px 4px;

    border: none;

    color: #fff;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    cursor: pointer;
  }
`;
