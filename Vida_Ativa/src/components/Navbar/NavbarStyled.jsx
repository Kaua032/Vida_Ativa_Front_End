import styled from "styled-components";

export const MainNav = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 290px;
  height: 100vh;
  padding: 20px 20px 40px 20px;
`;
export const NavNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 70px;

  #buttons {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;

export const PerfilNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: #525668;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: #525668;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #logout {
    width: 25px;
    height: 25px;
    border: none;
    background-image: url(/iconLogOut.svg);
    background-repeat: no-repeat;
    cursor: pointer;
  }
`;
