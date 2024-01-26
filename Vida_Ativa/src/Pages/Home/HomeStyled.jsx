import styled from "styled-components";

export const MainHome = styled.main`
  display: flex;

  #painel {
    width: 100%;
    max-width: 1000px;
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    padding: 50px;
    margin-left: 24.65277777777778%;
  }
  #painel_buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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
  #painel_header {
    display: none;
    width: 100%;
    justify-content: space-between;
  }
  #painel_header .spaceHeader {
    width: 30px;
    height: 30px;
  }

  #backgroundGraphic {
    width: 100%;
    display: flex;
    overflow-x: auto;
  }
  #backgroundGraphic::-webkit-scrollbar{
    width: 0;
  }

  @media (max-width: 1000px) {
    #painel {
      margin-left: 0;
      padding: 0;
    }
    #painel_header {
      display: flex;
      padding: 30px;
    }
    #backgroundGraphic{
      padding: 20px;
    }
    #painel_buttons{
      padding: 30px;
    }
  }
`;
