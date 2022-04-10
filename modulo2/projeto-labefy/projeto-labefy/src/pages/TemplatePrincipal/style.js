import styled from "styled-components";

export const Container = styled.div`
  background-color: #121212;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: auto;
`
export const Header = styled.header`
  background-color: #DA0037;
  height: 10vh;
`
export const Main = styled.main`
  background-color: #444444;
  height: 100%;
  margin: 10px 30px;
  flex-grow: 1;
`
export const Footer = styled.footer`
  background-color: #DA0037;
  height: 5vh;
  position: static;
`
export const Grid = styled.div`
  /* background-color: pink; */
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  padding: 20px;
  justify-content: center;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`