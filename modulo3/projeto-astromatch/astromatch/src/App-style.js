import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: 'roboto';
  }
`
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;

  @media screen and (max-device-width : 480px){
    min-width: 500px;
  }
`