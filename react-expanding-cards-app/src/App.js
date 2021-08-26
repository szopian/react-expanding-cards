import Panel from "./components/Panel";
import { Wrapper, Container } from "./Styled";

import ImageA from "./images/cem-ersozlu-bR9abI2wC88-unsplash.jpg";
import ImageB from "./images/jakob-rosen-R3Kt-VGPwUI-unsplash.jpg";
import ImageC from "./images/jonathan-ford-m6Ku4ZdI-yY-unsplash.jpg";
import ImageD from "./images/matteo-catanese-9o2rxHYRyro-unsplash.jpg";
import ImageE from "./images/pexels-bryan-gomes-3977529.jpg";
import ImageF from "./images/pexels-tobias-bjørkli-2119706.jpg";

function App() {
  return (
    <Wrapper>
      <Container>
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
