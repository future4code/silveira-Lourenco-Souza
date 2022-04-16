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
export const Input = styled.input`
  width: 75%;
  height: 25px;
  margin-bottom: 3px;
  border-radius: 5px;
  color: black;
  padding: 5px;
  outline: none;
`
export const Button = styled.button`
  cursor: pointer;
  height: 30px;
  border-radius: 5px;
  align-self: flex-start;
  margin-left: 45px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
      opacity: 0.8;

    }
`
export const Img = styled.img`
  width: 20px;
`
export const Span = styled.span`
  color: black;
  margin: 5px;
`