import styled from "styled-components";

export const SpaceSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  input {
    width: 200px;
    height: 30px;

    border: none;
    border-bottom: 1px solid #525668;
    padding: 4px 5px;

    color: #2f313a;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  input::placeholder {
    color: #525668;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  button {
    width: 20px;
    height: 20px;

    border: none;
    cursor: pointer;
  }
`;
