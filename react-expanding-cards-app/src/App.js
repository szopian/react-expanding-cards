import Panel from "./components/Panel";
import { Wrapper, Container } from "./Styled";
import styled from "styled-components";

import ImageA from "./images/cem-ersozlu-bR9abI2wC88-unsplash.jpg";
import ImageB from "./images/jakob-rosen-R3Kt-VGPwUI-unsplash.jpg";
import ImageC from "./images/jonathan-ford-m6Ku4ZdI-yY-unsplash.jpg";
import ImageD from "./images/matteo-catanese-9o2rxHYRyro-unsplash.jpg";
import ImageE from "./images/pexels-bryan-gomes-3977529.jpg";
import ImageF from "./images/pexels-tobias-bjørkli-2119706.jpg";

const ImgPanel = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  position: relative;
  transition: all 0.7s ease-in;
  background-image: url(${ImageA});
  flex: 0.5;

  /* &&:active {
    flex: 5;
  } */

  &&.activeFlex {
    flex: 5;
  }

  @media (max-width: 480px) {
    &&:nth-of-type(5),
    &&:nth-of-type(6) {
      display: none;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <ImgPanel className="activeFlex" />
        <Panel BgImg={ImageA} />
        <Panel BgImg={ImageB} />
        <Panel BgImg={ImageC} />
        <Panel BgImg={ImageD} />
        <Panel BgImg={ImageE} />
        <Panel BgImg={ImageF} />
      </Container>
    </Wrapper>
  );
}

export default App;
