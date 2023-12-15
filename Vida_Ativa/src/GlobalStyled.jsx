import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
      max-width: 100vw;
      height: 100vh;
      background: rgb(245,248,249);
      background: linear-gradient(145deg, rgba(245,248,249,1) 0%, rgba(234,242,252,1) 100%);
    }
`;
