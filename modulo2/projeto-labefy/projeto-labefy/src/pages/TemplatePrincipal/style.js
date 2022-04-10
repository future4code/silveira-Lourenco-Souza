import styled from "styled-components";

export const Container = styled.div`
  background-color: #121212;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: auto;
`
export const Header = styled.header`
  display: flex;
  justify-content: center;
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
export const Span = styled.span`
  font-size: 75px;
  margin: 0px 5px 5px 5px;
  text-decoration: underline;
  color: #b4040c;
`
export const Img = styled.img`
  width: 85px;
  margin: 0;
`
export const DivLogo = styled.div`
  width: 400px;

  justify-content: center;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  background-color: #EDEDED;
  border-radius: 10px;
`