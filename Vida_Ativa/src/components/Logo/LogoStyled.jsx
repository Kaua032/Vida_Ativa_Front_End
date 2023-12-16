import styled from "styled-components";

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-direction: ${(props) => props.direction};
`;
export const ImgLogo = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export const TitleLogo = styled.h1`
  #span1 {
    color: #008037;

    font-family: Montserrat;
    font-size: ${(props) => props.font_size};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #span2 {
    color: #004aad;
    font-family: Montserrat;
    font-size: ${(props) => props.font_size};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
