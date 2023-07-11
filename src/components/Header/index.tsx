import React from 'react'
import { HeaderBar, LinkItem, Links, CartButton } from './styles'
import logo from '../../asserts/images/logo.svg'
import carrinho from '../../asserts/images/carrinho.svg'
import { Link } from 'react-router-dom'
import { open } from '../../store/reduce/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReduce } from '../../store'

const Header = () => {
  const { items } = useSelector((state: RootReduce) => state.cart)
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }
  return (
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
      <CartButton onClick={openCart}>
        {items.length} - produtos(s)
        <img src={carrinho} alt="carrinho de compras" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
