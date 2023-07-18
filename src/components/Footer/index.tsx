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
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG AÇÃO"
              to="/categories#action"
            >
              Ação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG LUTA"
              to="/categories#fight"
            >
              Lutar
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de ESPORTES"
              to="/categories#sports"
            >
              Esportes
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de SIMULAÇÃO"
              to="/categories#simulation"
            >
              Simulação
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitulo>Acesso rápido</SectionTitulo>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar seção de promoções"
              to="/#on-sales"
            >
              Promoções
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
