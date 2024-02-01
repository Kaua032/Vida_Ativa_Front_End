import styled from "styled-components";

export const NavbarMobileMain = styled.main`
  display: none;
  flex-direction: column;
  padding: 20px 5px 30px 5px;
  width: 3rem;
  height: 100vh;
  background-color: white;
  position: fixed;
  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const NavMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ButtonNavMobile = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  background-color: ${(props) => (props.state === "on" ? "#0A7DE8;" : "#fff")};

  background-image: url( ${(props) => (props.type === "1" ? (props.state === "on" ? "/freqWhite.svg" : "/freqGray.svg") : (props.type === "2" ? (props.state === "on"? "/permWhite.svg" : "/permGray.svg") : ""))});
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer;
`;

export const FooterMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: auto;

  cursor: pointer;

  #logout, #changePassword{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: none;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
  }
  #logout {
    background-image: url(/iconLogOut.svg);
  }
  #changePassword{
    background-image: url(/iconsPassword/changePasswordGray.png);
  }
`