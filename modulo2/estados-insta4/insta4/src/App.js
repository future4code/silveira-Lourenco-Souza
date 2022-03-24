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

  state = {

  pessoas: [
      { nome: 'Paulinha', fotoPerfil: 'https://picsum.photos/50/50?random=1', fotoPost: 'https://picsum.photos/200/150?random=1' },
      { nome: 'Lourenço', fotoPerfil: 'https://picsum.photos/50/50?random=2', fotoPost: 'https://picsum.photos/200/150?random=2' },
      { nome: 'José', fotoPerfil: 'https://picsum.photos/50/50?random=3', fotoPost: 'https://picsum.photos/200/150?random=3' }

    ] 
  }

  render() {

    const pessoasNoPost = this.state.pessoas.map((pessoa)=>{
      return (
      <Post 
        nomeUsuario= {pessoa.nome}
        fotoUsuario={pessoa.fotoPerfil}
        fotoPost={pessoa.fotoPost}
      />
      )
    })

    return (
      <MainContainer>

        {pessoasNoPost}

      </MainContainer>
    );
  }
}

export default App;
