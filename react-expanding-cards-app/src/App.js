import Panel from "./components/Panel";
import { Wrapper, Container } from "./Styled";
import styled from "styled-components";
import React, { Component, useState } from "react";

import ImageA from "./images/cem-ersozlu-bR9abI2wC88-unsplash.jpg";
import ImageB from "./images/jakob-rosen-R3Kt-VGPwUI-unsplash.jpg";
import ImageC from "./images/jonathan-ford-m6Ku4ZdI-yY-unsplash.jpg";
import ImageD from "./images/matteo-catanese-9o2rxHYRyro-unsplash.jpg";
import ImageE from "./images/pexels-bryan-gomes-3977529.jpg";
import ImageF from "./images/pexels-tobias-bjørkli-2119706.jpg";

const ImgPanel = styled.button`
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

  ${(props) => {
    if (props.toggle) {
      return `
      flex: 0.5;
      `;
    } else {
      return `
      flex: 5;
      `;
    }
  }}

  @media (max-width: 480px) {
    &&:nth-of-type(5),
    &&:nth-of-type(6) {
      display: none;
    }
  }
`;

class App extends Component {
  state = { checkBool: false };

  setBoolTrue() {
    this.setState({ checkBool: true });
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <ImgPanel
            as="button"
            toggle={this.state.checkBool}
            onClick={this.state.checkBool}
          />
          ;
          <Panel
            BgImg={ImageA}
            toggle={this.state.checkBool}
            onClick={this.state.checkBool}
          />
          <Panel BgImg={ImageB} />
          <Panel BgImg={ImageC} />
          <Panel BgImg={ImageD} />
          <Panel BgImg={ImageE} />
          <Panel BgImg={ImageF} />
        </Container>
      </Wrapper>
    );
  }
}

// function App() {
//   return (
//     <Wrapper>
//       <Container>
//         <ImgPanel />
//         <Panel BgImg={ImageA} />
//         <Panel BgImg={ImageB} />
//         <Panel BgImg={ImageC} />
//         <Panel BgImg={ImageD} />
//         <Panel BgImg={ImageE} />
//         <Panel BgImg={ImageF} />
//       </Container>
//     </Wrapper>
//   );
// }

export default App;
