import styled from "styled-components";



export const Img = styled.img`
  @keyframes animation {
    0%{transform: scale(1.5,1.5)}
    100% {transform: scale(1,1)}
}

  width: 55px;
    animation-name: animation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    margin: 20px;

`