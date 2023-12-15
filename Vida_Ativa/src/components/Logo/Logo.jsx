import { ImgLogo, LogoStyled, TitleLogo } from "./LogoStyled.jsx";

function Logo({ width, height, font_size, direction }) {
  return (
    <LogoStyled direction={direction}>
      <ImgLogo src="/LogoDraw.png" width={width} height={height} />
      <TitleLogo font_size={font_size}>vida ativa</TitleLogo>
    </LogoStyled>
  );
}

export default Logo;
