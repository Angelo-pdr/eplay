import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'

import logo from '../../asserts/images/logo.svg'
import cartIcon from '../../asserts/images/carrinho.svg'

import { open } from '../../store/reduce/cart'
import { RootReduce } from '../../store'

import * as S from './styles'

const Header = () => {
  const { items } = useSelector((state: RootReduce) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <HashLink to="/">
            <img src={logo} alt="EPLAY" />
          </HashLink>
          <nav className={isMenuOpen ? 'is-open' : ''}>
            <S.Links>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar seção de categorias"
                  to="/categories"
                >
                  Categorias
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar seção de novidades"
                  to="/"
                >
                  Novidades
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar seção de promoções"
                  to="/"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          {items.length} <span> - produtos(s)</span>
          <img src={cartIcon} alt="carrinho de compras" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar seção de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar seção de novidades"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Novidades
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar seção de promoções"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
