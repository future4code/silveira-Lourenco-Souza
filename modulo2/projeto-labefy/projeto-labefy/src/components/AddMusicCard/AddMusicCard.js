import React, { Component } from 'react'

import {Container, Input, Button, Img, Span} from './style'
import Addition from '../../assets/addition.png'



export default class AddMusicCard extends Component {
  render() {
    return (
      <Container>
        <Input type="text" placeholder="Music:" />
        <Input type="text" placeholder='Artist:' />
        <Input type="text" placeholder='Url:' />

        <Button>
          <Img src={Addition} alt="" />
          <Span>Add Music to Playlist</Span>
        </Button>

      </Container>
    )
  }
}
