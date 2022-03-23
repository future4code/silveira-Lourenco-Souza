import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {IconeFixar} from '../IconeFixar/IconeFixar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

const Paragrafo = styled.p`
  flex-grow: 1;
`

const MinhaDiv = styled.div`
  display: flex;
  align-items: center;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    fixado: false,
    share: false
  }
  
  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })
    if (this.state.curtido === false) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  aoClickFixar = () => {
    this.setState({
      fixado: !this.state.fixado
    })
  }

  aoClickShare = () => {
    this.setState({
      share: !this.state.share
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

// -----------------------------------------
    let iconeFixar

    if(this.state.fixado) {
      iconeFixar = 'https://cdn-icons.flaticon.com/png/512/2099/premium/2099240.png?token=exp=1648071795~hmac=c2586145cfc6f56c27760d9a76a922d2'
    } else {
      iconeFixar = 'https://cdn-icons.flaticon.com/png/512/2099/premium/2099170.png?token=exp=1648072276~hmac=7ca3ae21666ceafeae2206f1cf509489'
    }
// -----------------------------------------

    let iconeShare

    if(this.state.share) {
      iconeShare = 'https://cdn-icons.flaticon.com/png/512/1358/premium/1358074.png?token=exp=1648072904~hmac=f4ee14e9db8fe6777b0cc71fdb21214a'
    } else {
      iconeShare = 'https://cdn-icons.flaticon.com/png/512/1358/premium/1358023.png?token=exp=1648072902~hmac=2ba18eb1380b9f046a40022b7babecd4'
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <Paragrafo>{this.props.nomeUsuario}</Paragrafo>

        <IconeFixar 
          icone= {iconeFixar}
          onClickIconeFixar= {this.aoClickFixar}
        />

      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>


      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />


        <MinhaDiv>
          <IconeFixar
            icone={iconeShare}
            onClickIconeFixar={this.aoClickShare}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </MinhaDiv>

      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post