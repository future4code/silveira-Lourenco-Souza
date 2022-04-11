import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Container, Header, Main, Footer, Grid, Span, Img, DivLogo } from './style'

import Logo from '../../assets/logo-labefy.png'
import AddPlaylistCard from '../../components/AddPlaylistCard/AddPlaylistCard'
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard'
import AddMusicCard from '../../components/AddMusicCard/AddMusicCard'
import MusicCard from '../../components/MusicCard/MusicCard'


export default class TemplatePrincipal extends Component {

  state = {
    listOfPlaylist: ['Playlist A', 'Playlist B', 'Playlist C', 'Minha Playlist']
  }

  componentDidMount = () => {
    this.getPlaylistNames()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(this.state.listOfPlaylist !== prevState.listOfPlaylist) {
      this.getPlaylistNames()
    }
  }

  getPlaylistNames = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const header = {
      headers: {
        "Authorization" : "lourenco-souza-silveira"
      }
    }
    axios.get(url, header)
    .then((res) => {
      this.setState({
        listOfPlaylist: res.data.result.list
      })
    })
    .catch((err) => {
      console.log(err.response.data);
    })
  }

  render() {
    return (
      <Container>
        <Header>

          <DivLogo>
            <Img src={Logo} alt="Logo Labefy" />
            <Span>Labefy</Span>
          </DivLogo>
        </Header>

        <Main>
          <Grid>
            <AddPlaylistCard />
            <PlaylistCard NomePlaylist={this.state.listOfPlaylist} />
          

          </Grid>
        </Main>

        <Footer>
          <span>Aqui é o Footer</span>
        </Footer>

      </Container>
    )
  }
}
