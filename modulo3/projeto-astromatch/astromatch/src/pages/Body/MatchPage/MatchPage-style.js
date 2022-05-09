import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
`
export const ContainerPerson = styled.div`
  /* border: dotted 1px black; */
  display: flex;
  align-items: center;
  padding: 10px;
    :hover{
      background-color: lightgray;
      cursor: pointer;
    }
  `
export const Img = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 90px;
`
export const Name = styled.p`
  font-size: 20px;
  margin: 10px;
`
export const ContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`