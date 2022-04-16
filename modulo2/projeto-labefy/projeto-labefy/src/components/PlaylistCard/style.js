import styled from "styled-components";

export const Container = styled.div`
  background-color: #EDEDED;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: flex-start;
  word-break:break-all;
    :hover {
      background-color: #b4040c;
        span {
          color: white;
        }
    };
`
export const Span = styled.span`
  color: black;
  padding: 10px;
  font-size: 30px;
  width: 80%;
  flex-grow: 1;
  text-decoration: underline;
  word-break: keep-all;
`
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
`
export const Button = styled.button`
  cursor: pointer;
  display: flex;
  border-radius: 5px;
  padding: 2px;
  margin: 5px;
  :hover {
      opacity: 0.8;

    }
`
export const Img = styled.img`
  width: 25px;
  padding: 3px;
`