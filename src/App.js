import React from 'react';
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import LogoContainer from './components/LogoContainer';
import LogoImg from './components/LogoImg';
import Main from './components/Main';
import NavItem from './components/NavItem';
import Navbar from './components/Navbar';
import logo from './components/img/loja1.jpg';

const HeaderSection = () => {
    return (
      <Header>
        <LogoContainer>
            <LogoImg src={logo} alt="Logo" />
        </LogoContainer>
        <Navbar>
          <NavItem>
            <a href="#home">Home</a>
          </NavItem>
          <NavItem>
            <a href="#carrinho">Carrinho</a>
          </NavItem>
          <NavItem>
            <a href="#pesquisar">Pesquisa</a>
          </NavItem>
          <NavItem>
            <a href="#agenda">Agenda</a>
          </NavItem>
          <NavItem>
            <a href="#perfil">Perfil</a>
          </NavItem>
        </Navbar>
      </Header>
    );
};
  
const MainSection = () => {
    return (
      <Main>
        <div id="home">Home</div>
        <div id="carrinho">Carrinho</div>
        <div id="pesquisar">Pesquisa</div>
        <div id="agenda">Agenda</div>
        <div id="perfil">Perfil</div>
      </Main>
    );
};
  
const App = () => {
    return (
      <AppContainer>

        <HeaderSection> </HeaderSection>

        <MainSection> </MainSection>
      </AppContainer>
    );
};
  
export default App;