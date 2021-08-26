import React, { useState } from "react";
import styled from "styled-components";
import Image from "../images/cem-ersozlu-bR9abI2wC88-unsplash.jpg";
import { Container } from "../Styled";

export default function Panel() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <Container>
      <ImgPanel
        className={isActive ? ImgPanelActive : ImgPanel}
        onClick={handleToggle}
      />
    </Container>
  );
}

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
  --webkit-transition: all 700ms ease-in;
  background-image: url(${Image});
  flex: 0.5;
`;

const ImgPanelActive = styled(ImgPanel)`
  flex: 5;
`;

// const Heading = styled.h3``;

// function Panel() {
//   return <ImgPanel>img</ImgPanel>;
// }

// export default Panel;
