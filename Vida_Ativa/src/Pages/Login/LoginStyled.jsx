import styled from "styled-components";

export const LoginMain = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  background-image: url("/background_image.png");
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1000px) {
    background-image: none;
  }

  @media (max-width: 450px) {
    gap: 50px;
  }
`;

export const DivLogin = styled.div`
  width: 600px;
  height: 423px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
  }

  padding: 35px 0px 40px 0px;

  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  h1 {
    color: #333;

    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 650px) {
    width: 90%;
  }
  @media (max-width: 450px) {
    background: none;
    box-shadow: none;
    gap: 50px;
    h1 {
      display: none;
    }
  }
`;
