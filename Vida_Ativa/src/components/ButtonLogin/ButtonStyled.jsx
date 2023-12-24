import styled from "styled-components";

export const ButtonSpace = styled.button`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 50px;
  background: #0a7de8;
  border: none;

  margin-top: ${(props) => props.top};

  color: #fff;

  font-family: Montserrat, Arial;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  @media (max-width: 650px) {
    width: 90%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
export const ButtonImage = styled.img``;
