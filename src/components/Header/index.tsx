import React, { useState } from 'react'
import { HeaderBar, LinkItem, Links, CartButton, Hamburguer, HeaderRow, NavMobile } from './styles'
import logo from '../../asserts/images/logo.svg'
import carrinho from '../../asserts/images/carrinho.svg'
import { Link } from 'react-router-dom'
import { open } from '../../store/reduce/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReduce } from '../../store'

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
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav className={isMenuOpen ? 'is-open' : ''}>
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
        <CartButton onClick={openCart}>
          {items.length} <span> - produtos(s)</span>
          <img src={carrinho} alt="carrinho de compras" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
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
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
