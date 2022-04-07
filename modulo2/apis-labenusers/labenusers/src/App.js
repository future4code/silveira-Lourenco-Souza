import React, { Component } from 'react'
import styled from 'styled-components'

import Form from './components/Form'
import User from './components/User'

const Div = styled.div`
  margin: 15px
`

export default class App extends Component {

  
  state = {
    tela: true
  }

  trocarTela = () => {
    this.setState({
      tela: !this.state.tela,   
    })
  }

  render() {


    return (
      <Div>
        <h1>Api Labenusers</h1>
        <hr /> <br />

        {this.state.tela ? <button onClick={this.trocarTela}> &gt; &gt; Trocar de tela</button> : <button onClick={this.trocarTela}> &lt; &lt; Trocar de tela</button>}

        <div>
          { this.state.tela ? <Form /> : <User /> }
        </div>

          <br />
      </Div>
    )
  }
}