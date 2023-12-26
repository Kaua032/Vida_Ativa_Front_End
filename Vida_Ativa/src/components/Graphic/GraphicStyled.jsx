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

export const SectionGraphic = styled.section`
  display: flex;
  flex-direction: column;
`;

export const BackgroundGraphic = styled.div`
  margin-top: 25px;

  #lines {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  #lines div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #lines div p {
    color: #b0b0b0;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #lines div hr {
    width: 100%;
    max-width: 930px;
    height: 1px;
    border: 1px solid #b0b0b0;
    background: #b0b0b0;
  }

  #dates {
    display: flex;
    justify-content: space-between;
    padding-left: 35px;
    padding-right: 15px;

    color: #b0b0b0;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const InfoGraphic = styled.div``;

export const Sticks = styled.div`
  #green {
    height: ${(props) => `${props.greenHeight}`};
    width: 23px;
    border-radius: 5px 5px 0px 0px;
    background: #008037;
  }
  #red {
    height: ${(props) => `${props.redHeight}`};
    width: 23px;
    border-radius: 5px 5px 0px 0px;
    background: #b22222;
  }
`;
