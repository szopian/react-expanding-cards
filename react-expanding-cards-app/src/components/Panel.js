import React from "react";
import styled from "styled-components";

export default function Panel({ BgImg }) {
  return <ImgPanel BgImage={BgImg} />;
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
  transition: all 0.7s ease-in;
  background-image: url(${(props) => props.BgImage});
  flex: 0.5;

  &&:active {
    flex: 5;
  }

  @media (max-width: 480px) {
    &&:nth-of-type(5),
    &&:nth-of-type(6) {
      display: none;
    }
  }
`;
