import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  min-width: 300px;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?random=1'}
          fotoPost={'https://picsum.photos/200/150?random=1'}
        />

        <Post
          nomeUsuario={'Lourenço'}
          fotoUsuario={'https://picsum.photos/50/50?random=2'}
          fotoPost={'https://picsum.photos/200/150?random=2'}
        />

        <Post
          nomeUsuario={'José'}
          fotoUsuario={'https://picsum.photos/50/50?random=3'}
          fotoPost={'https://picsum.photos/200/150?random=3'}
        />
      </MainContainer>
    );
  }
}

export default App;
