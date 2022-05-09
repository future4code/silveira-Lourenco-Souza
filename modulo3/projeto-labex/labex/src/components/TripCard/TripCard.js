import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid black;
`

const TripCard = (props) => {

  const trips = props.tripsContent

  return (
    <Container>

      <p>Nome: {trips.name} </p>
      <p>Descrição: {trips.description} </p>
      <p>Planeta: {trips.planet} </p>
      <p>Duração: {trips.durationInDays} </p>
      <p>Data: {trips.date} </p>
    </Container>
  )
}

export default TripCard