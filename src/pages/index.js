import React from "react";
import { createGlobalStyle } from 'styled-components';

import Menu from '../Components/Header/Menu';
import Baner from "../Components/Header/Baner";
import Person from "../Components/Person";
import Play from '../Components/Play'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    }
`

const IndexPage = () => {

  return (
    <main>
      <GlobalStyle />
      <Menu />
      <Baner />
      <Person />
      <Play />
    </main>
  )
}

export default IndexPage
