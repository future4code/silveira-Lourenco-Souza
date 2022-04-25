import styled from "styled-components";



export const Img = styled.img`
  @keyframes animation {
  0%   {transform: scale(1.2,1.2)}
  100% {transform: scale(1,1)}
}

  width: 55px;
    animation-name: animation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    margin: 10px;

`