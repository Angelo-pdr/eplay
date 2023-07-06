import React from 'react'
import { Container, FooterSection, Link, Links, SectionTitulo } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitulo>Categorias</SectionTitulo>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">Ação</Link>
          </li>
          <li>
            <Link to="/categories#fight">Lutar</Link>
          </li>
          <li>
            <Link to="/categories#sports">Esportes</Link>
          </li>
          <li>
            <Link to="/categories#simulation">Simulação</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitulo>Acesso rápido</SectionTitulo>
        <Links>
          <li>
            <Link to="/#on-sales">Promoções</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
