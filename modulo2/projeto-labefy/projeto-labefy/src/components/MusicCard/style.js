import styled from "styled-components";

export const Details = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  line-height: 25px;
`

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
  font-size: 20px;
  text-decoration: underline;
`
export const SpanArtist = styled.span`
  font-size: 15px;
  color: black;
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