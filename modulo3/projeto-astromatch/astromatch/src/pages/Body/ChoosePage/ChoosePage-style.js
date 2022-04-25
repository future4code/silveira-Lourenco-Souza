import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* background-color: red; */
`
export const ContainerPerson = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    flex-grow: 1;
`
export const ContainerLoading = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`
export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  `
export const Button = styled.button`
  height: 55px;
  width: 55px;
  background-color: white;
  margin: 10px 40px;
  cursor: pointer;
  font-size: 25px;
  border-radius: 50px;
  ${(p) => p.input === "Ok" ? "color: green" : "color: red"};
    :hover{
      ${(p) => p.input === "Ok" ? "background-color: green" : "background-color: red"};
      transform: scale(1.2, 1.2);
      color: white;
    }
`
export const Img = styled.img`
  width: 100%;
  height: 400px;
  padding: 10px;
  border-radius: 15px;
`
export const DivParent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const DivChild = styled.div`
  position: absolute;
  bottom: 10px;
  width: 360px;
  margin: 10px 0;
  padding: 10px;
  background-color: #00000070;
  border-radius: 5px;
    p {
      color: white;
    };
    .Name{
      font-size: 20px;
      margin-bottom: 7px;
    } span{
      font-size: 23px;
      font-weight: bold;
    };
    .Info{
      font-size: 17px;
    }
`
export const ButtonDis = styled.button`
  height: 55px;
  width: 55px;
  background-color: lightgray;
  margin: 10px 40px;
  font-size: 25px;
  border-radius: 50px;
  color: white;
`