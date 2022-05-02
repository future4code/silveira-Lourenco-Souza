import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  width: 40%;
  cursor: pointer;
    :hover {
      background-color: lightgray;
    }
`




const SelectTripDetailsCard = (props) => {

  const navigate = useNavigate()

  const goToTripDetails = () => {
    navigate(`/admin/trips/details/`)
  }

  const teste2 = (e) => {
    console.log("vc clickou em mim2");
    e.stopPropagation()

  }

  const trip = props.trips

  return (
    <Container onClick={()=>goToTripDetails(trip)}>
      <p>{trip.name}</p>
      <button onClick={teste2}>X</button>
    </Container>
  )
}

export default SelectTripDetailsCard