import React, { Component } from 'react'
import styled from "styled-components";

const Container = styled.div`
  background-color: #DA0037;
  border: blue solid 1px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`
const Button = styled.button`
  height: 50%;
  margin: 15px;
  border-radius: 7px;
  background-color: #DA0037;
  cursor: pointer;
`

export default class AddPlaylistCard extends Component {
  render() {
    return (
      <Container>
        <Button>Add Playlist</Button>
      </Container>
    )
  }
}
