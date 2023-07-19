import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { getTotalPrices, parseToBrl } from '../../utils'
import { close, remover } from '../../store/reduce/cart'
import { RootReduce } from '../../store'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReduce) => state.cart)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remover(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(item.prices.current)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </S.CartItem>
              ))}
            </ul>
            <S.Quatity>{items.length} jogo(s) no carrinho</S.Quatity>
            <S.Prices>
              Total de R$ {parseToBrl(getTotalPrices(items))}
              <span>em até 6x sem juros</span>
            </S.Prices>
            <Button
              onclick={goToCheckout}
              title="Clique aqui para continua com a compra"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ): (
          <p className="empyt-text" >O carrinho está vazio, adicione pelo menos um produto para continuar com a compra</p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
