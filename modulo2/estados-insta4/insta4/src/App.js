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
  /* margin: 25px; */
`

const MyDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 300px;
  border: 1px black solid;
  padding: 10px 0 10px 0;
`

const MyInput = styled.input`
  margin: 3px;
  min-width: 250px;
  height: 20px;
  border-radius: 7px;
`

const MyButton = styled.button`
  align-self: flex-end;
  margin-right: 28px;
  margin-top: 5px;
`

const Myh2 = styled.h2`
  margin:0;
  padding:0;
  font-size: 30px;
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

        <MyDiv>
          <Myh2>Inst4</Myh2>
          <MyInput type="text" placeholder='Nome' />
          <MyInput type="text" placeholder='Link para imagem do perfil' />
          <MyInput type="text" placeholder='Link para imagem do post' />

          <MyButton>Postar</MyButton>
        </MyDiv>

        {pessoasNoPost}

      </MainContainer>
    );
  }
}

export default App;
