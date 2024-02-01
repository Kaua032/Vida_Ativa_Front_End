import styled from "styled-components";

export const MainTeachers = styled.main`
  display: flex;
  min-height: 100vh;

  #painel {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    padding: 50px;
    margin-left: 24.65277777777778%;
  }
  #painel #divButton {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: flex-start;
  }
  #painel .new-teacher {
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

  #painel #painel_header {
    display: none;
    width: 100%;
    justify-content: center;
  }
  #painel_header .spaceHeader {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 1000px) {
    #painel {
      margin-left: 0;
      padding: 10px;
      padding-left: 3.5rem;
    }
    #painel #painel_header {
      display: flex;
      padding: 30px 0px;
    }
  }
`;
