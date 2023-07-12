import React, { useState } from 'react'
import Card from '../../components/Card'
import { InpuitGroup, Row, TabButton } from './styles'
import Button from '../../components/Button'
import boleto from "../../asserts/images/barcode.png"
import cartao from "../../asserts/images/credit-card.png"

const Checkout = () =>{
  const [payWithCar, setPayWithCar] = useState(false)
  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InpuitGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input type="text" id="fullName" />
            </InpuitGroup>
            <InpuitGroup>
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" />
            </InpuitGroup>
            <InpuitGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" />
            </InpuitGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InpuitGroup maxWidth='284px'>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input type="text" id="deliveryEmail" />
            </InpuitGroup>
            <InpuitGroup maxWidth='284px'>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input type="text" id="confirmDeliveryEmail" />
            </InpuitGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
      <>
        <TabButton isActive ={payWithCar} onClick={() => setPayWithCar(true)}>
          <img src={boleto} alt="Boleto" />
          Boleto bancário
        </TabButton>
        <TabButton isActive ={!payWithCar} onClick={() => setPayWithCar(false)}>
          <img src={cartao} alt="Cartão" />
          Cartão de crédito
        </TabButton>
        <div className='margin-top'>
          {payWithCar ? (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                onfirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a liberação do
                código de ativação do jogo adquirido ocorrerá somente após a aprovação
                do pagamento do boleto.
              </p>
            ) : (
            <>
            <Row >
                <InpuitGroup>
                  <label htmlFor="cardOnew">Nome do titular do cartão</label>
                  <input type="text" id='cardOnew' />
                </InpuitGroup>
                <InpuitGroup>
                  <label htmlFor="cpfCardOnew">CPF do titular do cartão</label>
                  <input type="text" id='cpfCardOnew' />
                </InpuitGroup>
            </Row>
            <Row marginTop='24px'>
                <InpuitGroup>
                  <label htmlFor="cardDisplayName">Nome no cartão</label>
                  <input type="text" id='cardDisplayName' />
                </InpuitGroup>
                <InpuitGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input type="text" id='cardNumber' />
                </InpuitGroup>
                <InpuitGroup maxWidth="123px">
                  <label htmlFor="expiresMoth">Mês do vencimento</label>
                  <input type="text" id='expiresMoth' />
                </InpuitGroup>
                <InpuitGroup maxWidth="123px">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input type="text" id='expiresYear' />
                </InpuitGroup>
                <InpuitGroup maxWidth="48px">
                  <label htmlFor="cardCode">CVV</label>
                  <input type="text" id='cardCode' />
                </InpuitGroup>
            </Row>
            <Row marginTop='24px'>
              <InpuitGroup maxWidth="150px">
                <label htmlFor="installments">Parcelamento</label>
                <select>
                  <option>1x de R$ 200,00</option>
                  <option>2x de R$ 100,00</option>
                  <option>3x de R$ 66,66</option>
                </select>
              </InpuitGroup>
            </Row>
          </>)}
        </div>
      </>
      </Card>

      <Button type="button" title="Cliquei aqui para finaliza a compra">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout
