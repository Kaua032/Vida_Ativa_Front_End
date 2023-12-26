import styled from "styled-components";

export const GraphicStyle = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 300px;

  border-radius: 15px;
  border: 1px solid #dcdcdc;
  background: #f9fbfe;

  padding: 20px;

  #header {
    display: flex;
    gap: 20px;

    justify-content: end;
  }
  #present,
  #lack {
    color: #fff;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    width: 200px;

    padding: 6px 0px;

    text-align: center;
  }

  #present {
    border-radius: 10px;
    background: #008037;
  }

  #lack {
    border-radius: 10px;
    background: #b22222;
  }
`;
