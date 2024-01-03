import styled from "styled-components";

export const ButtonArea = styled.button`
  height: 40px;
  padding: 0px 15px 0px 45px;

  border-radius: 50px;
  background: #0a7de8;

  background-image: url(${(props) => props.img});
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
`;
