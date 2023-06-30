import React from 'react'
import Button from '../Button'
import { CartContainer, Overlay, Sidebar, Preco, Quatity, CartItem } from './styles'
import Tag from '../Tag'
import start_wars from "../../asserts/images/star_wars.png"

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
         <img src={start_wars} alt="" />
         <div>
            <h3>Nome do Jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
         </div>
         <button type='button' />
        </CartItem>
        <CartItem>
         <img src={start_wars} alt="" />
         <div>
            <h3>Nome do Jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
         </div>
         <button type='button' />
        </CartItem>
      </ul>
      <Quatity>2 jogo(s) no carrinho</Quatity>
      <Preco>
        Total de R$ 381,80
        <span>em até 6x sem juros</span>
      </Preco>
      <Button title="Clique aqui para continua com a compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
