import React from 'react'
import { HeaderBar, LinkICart, LinkItem, Links } from './styles'
import logo from '../../asserts/images/logo.svg'
import carrinho from '../../asserts/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
    <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
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
