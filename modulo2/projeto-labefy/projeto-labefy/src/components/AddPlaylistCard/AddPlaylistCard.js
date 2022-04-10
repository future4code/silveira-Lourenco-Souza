import React, { Component } from 'react'
import styled from "styled-components";
import { Container, Button, Img, Span, Input } from './style';

import Add from '../../assets/addition.png'



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
