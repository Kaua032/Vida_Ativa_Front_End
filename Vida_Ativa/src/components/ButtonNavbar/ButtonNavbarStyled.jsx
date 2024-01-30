import styled from "styled-components";

export const ButtonNavStyle = styled.button`
  display: ${(props) => (props.display)};

  width: 250px;
  height: 45px;

  border: none;
  border-radius: 15px;

  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;

  color: ${(props) => (props.state === "on" ? "#ffffff;" : "#525668")};
  background: ${(props) => (props.state === "on" ? "#0A7DE8;" : "none")};
  background-image: url( ${(props) => (props.type === "1" ? (props.state === "on" ? "/freqWhite.svg" : "/freqGray.svg") : (props.type === "2" ? (props.state === "on"? "/permWhite.svg" : "/permGray.svg") : ""))});
  background-repeat: no-repeat;
  background-position: 20px 12px;

  cursor: pointer;

    &:hover{
        background-color: ${(props) => (props.state === "on" ? "#0a7de8df": "#e0e0e0")};
    }
`;
