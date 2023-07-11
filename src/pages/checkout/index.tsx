import React from 'react'
import Card from '../../components/Card'
import { InpuitGroup, Row } from './styles'
import Button from '../../components/Button'

const Checkout = () => (
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
          <InpuitGroup>
            <label htmlFor="deliveryEmail">E-mail</label>
            <input type="text" id="deliveryEmail" />
          </InpuitGroup>
          <InpuitGroup>
            <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
            <input type="text" id="confirmDeliveryEmail" />
          </InpuitGroup>
        </Row>
      </>
    </Card>
    <Card title="Pagamento">
      <>
        <p>
          Ao optar por essa forma de pagamento, é importante lembrar que a
          confirmação pode levar até 3 dias úteis, devido aos prazos
          estabelecidos pelas instituições financeiras. Portanto, a liberação do
          código de ativação do jogo adquirido ocorrerá somente após a aprovação
          do pagamento do boleto.
        </p>
      </>
    </Card>
    <Button type="button" title="Cliquei aqui para finaliza a compra">
      Finalizar compra
    </Button>
  </div>
)

export default Checkout
