import styled from "styled-components";

export const InputStyled = styled.input`
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  padding: 15px;

  border-radius: ${(props) => props.radius};
  border: 1px solid #c0c0c0;

  background: #fff;

  color: rgb(51, 51, 51);
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: rgba(49, 49, 49, 0.5);
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media (max-width: 650px) {
    width: 90%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
