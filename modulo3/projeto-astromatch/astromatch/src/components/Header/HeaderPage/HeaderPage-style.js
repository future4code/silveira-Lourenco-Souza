import styled from 'styled-components'

export const Container = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
    min-height: 60px;
    align-items: center;

`
export const Img = styled.img`
  width: 150px;
  margin-left: auto;
  position: absolute;
`
export const Button = styled.button`
  ${(p) => p.position == "right" ?  "margin-right: auto" : "margin-left: auto"  };
  width: 55px;
  cursor: pointer;
  padding: 1px 7px 1px 7px;
  background-color: white;
  border: none;
    :hover{
      
    }
  /* border: none; */
  /* margin: 0 5px; */
`