import React, { Component } from 'react'
import styled from "styled-components";

import Add from '../assets/addition.png'

const Container = styled.div`
  background-color: #DA0037;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Button = styled.button`
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
const Img = styled.img`
  width: 60px;
`
const Span = styled.span`
  font-size: 30px;
  margin: 10px;
`
const Input = styled.input`
  width: 75%;
  height: 30px;
  margin-bottom: 5px;
  border-radius: 5px;
  color: black;
  padding: 5px;
`

export default class AddPlaylistCard extends Component {
  render() {
    return (
      <Container>
        <Button>
          <Img src={Add} />
          <Span>Add Playlist</Span>
        </Button>

        <Input type="text" placeholder='> Digite aqui o nome da sua Playlist' />
      </Container>
    )
  }
}
