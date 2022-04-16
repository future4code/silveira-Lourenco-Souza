import React, { Component } from 'react'
import styled from "styled-components";
import axios from 'axios';
import { Container, Button, Img, Span, Input } from './style';

import Add from '../../assets/addition.png'



export default class AddPlaylistCard extends Component {

  state = {
    inputCreatePlaylist: ''
  }

  handleInput = (e) => {
    this.setState({
      inputCreatePlaylist: e.target.value
    })
  }

  AddPlaylist = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const header = {
      headers: {
        "Authorization": "lourenco-souza-silveira"
      }
    }
    const body = {
      "name" : this.state.inputCreatePlaylist
    }

    axios.post(url, body, header)
    .then((res) => {
      this.setState({
        inputCreatePlaylist: ''
      })
    })
    .catch((err) => {
      alert(err.response.data.message);
      this.setState({
        inputCreatePlaylist: ''
      })
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.AddPlaylist()
    }
  }

  render() {
    return (
      <Container>
        <Button  onClick={this.AddPlaylist} >
          <Img src={Add} />
          <Span>Create Playlist</Span>
        </Button>

        <Input type="text" placeholder='> Digite aqui o nome da sua Playlist' maxLength={25} value={this.state.inputCreatePlaylist} onChange={this.handleInput} onKeyPress={this.handleKeyPress} />
      </Container>
    )
  }
}
