import React from 'react'
import { HeaderBar, LinkICart, LinkItem, Links } from './styles'
import logo from '../../asserts/images/logo.svg'
import carrinho from '../../asserts/images/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        {' '}
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/">Novidades</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/">Promoções</Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkICart href="#">
      0 - produtos(s)
      <img src={carrinho} alt="carrinho de compras" />
    </LinkICart>
  </HeaderBar>
)

export default Header
