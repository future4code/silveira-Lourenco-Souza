import React, { Component } from 'react'
import TemplatePrincipal from './pages/TemplatePrincipal/TemplatePrincipal'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #EDEDED;
  }
`


export default class App extends Component {
  render() {
    return (
      <>
        <TemplatePrincipal />
        <GlobalStyled />
      </>
    )
  }
}
