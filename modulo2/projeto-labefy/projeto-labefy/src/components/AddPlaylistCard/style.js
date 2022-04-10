import styled from "styled-components";

export const Container = styled.div`
  background-color: #DA0037;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    :hover {
      background-color: #bd0030;
    }
`
export const Button = styled.button`
  height: 50%;
  margin: 0 10px 10px 10px;
  border-radius: 7px;
  background-color: #DA0037;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 15px;
    :hover {
      opacity: 0.8;

    }
`
export const Img = styled.img`
  width: 60px;
`
export const Span = styled.span`
  font-size: 30px;
  margin: 10px;
`
export const Input = styled.input`
  width: 75%;
  height: 30px;
  margin-bottom: 5px;
  border-radius: 5px;
  color: black;
  padding: 5px;
  outline: none;
`