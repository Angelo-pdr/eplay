import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'

import logo from '../../asserts/images/logo.svg'
import carrinho from '../../asserts/images/carrinho.svg'

import { open } from '../../store/reduce/cart'
import { RootReduce } from '../../store'

import {
  HeaderBar,
  LinkItem,
  Links,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'

const Header = () => {
  const { items } = useSelector((state: RootReduce) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <HashLink to="/">
            <img src={logo} alt="EPLAY" />
          </HashLink>
          <nav className={isMenuOpen ? 'is-open' : ''}>
            <Links>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar seção de categorias"
                  to="/categories"
                >
                  Categorias
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar seção de novidades"
                  to="/"
                >
                  Novidades
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar seção de promoções"
                  to="/"
                >
                  Promoções
                </HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length} <span> - produtos(s)</span>
          <img src={carrinho} alt="carrinho de compras" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar seção de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar seção de novidades"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Novidades
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar seção de promoções"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
