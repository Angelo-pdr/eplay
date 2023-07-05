import React from 'react'
import Button from '../Button'
import { CartContainer, Overlay, Sidebar, Preco, Quatity, CartItem } from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReduce } from '../../store'
import { close, remover } from '../../store/reduce/cart'
import { formataPreco } from '../ProductsList'

const Cart = () =>{
  const {isOpen, items} = useSelector((state: RootReduce) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrices = () => {
    return items.reduce((acumlador, valorAtual) => {
     return (acumlador += valorAtual.prices.current!)
    }, 0)
  }

  const closeCart  = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
     dispatch(remover(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open': ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button type='button' onClick={ () => removeItem(item.id) } />
            </CartItem>
          ))}
        </ul>
        <Quatity>{items.length} jogo(s) no carrinho</Quatity>
        <Preco>
          Total de R$ {formataPreco(getTotalPrices())}
          <span>em até 6x sem juros</span>
        </Preco>
        <Button title="Clique aqui para continua com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
