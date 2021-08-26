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
  --webkit-transition: all 700ms ease-in;
  background-image: url(${(props) => props.BgImage});
  flex: 0.5;

  &&:active {
    flex: 5;
  }
`;
