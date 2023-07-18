import React, { useState } from 'react'
import Card from '../../components/Card'
import { InpuitGroup, Row, TabButton, Button } from './styles'
import boleto from '../../asserts/images/barcode.png'
import cartao from '../../asserts/images/credit-card.png'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMoth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(15, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
        .required('O campo é obrigatório'),

      cardOwner: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        )
        .min(5, 'O nome precisa ter pelo menos 5 caracteres'),
      cpfCardOnew: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        )
        .min(5, 'O nome precisa ter pelo menos 5 caracteres'),
      cardDisplayName: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        )
        .min(5, 'O nome precisa ter pelo menos 5 caracteres'),
      cardNumber: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        )
        .min(5, 'O nome precisa ter pelo menos 5 caracteres'),
      expiresMoth: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        )
        .min(5, 'O nome precisa ter pelo menos 5 caracteres'),
      expiresYear: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        )
        .min(5, 'O nome precisa ter pelo menos 5 caracteres'),
      cardCode: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        )
        .min(5, 'O nome precisa ter pelo menos 5 caracteres'),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          name: values.fullname,
          email: values.email,
          document: values.cpf
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2023
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! <br /> Abaixo estão os detalhes da sua compra:
              <br />
              Número do pedido: {data.orderId} <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de Crédito' : 'Boleto Bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY] e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <Row>
                <InpuitGroup>
                  <label htmlFor="fullname">Nome completo</label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={form.values.fullname}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('fullname', form.errors.fullname)}
                  </small>
                </InpuitGroup>
                <InpuitGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('email', form.errors.email)}</small>
                </InpuitGroup>
                <InpuitGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
                </InpuitGroup>
              </Row>
              <h3 className="margin-top">
                Dados de entrega - conteúdo digital
              </h3>
              <Row>
                <InpuitGroup maxWidth="284px">
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    type="text"
                    id="deliveryEmail"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'deliveryEmail',
                      form.errors.deliveryEmail
                    )}
                  </small>
                </InpuitGroup>
                <InpuitGroup maxWidth="284px">
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    type="text"
                    id="confirmDeliveryEmail"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'confirmDeliveryEmail',
                      form.errors.confirmDeliveryEmail
                    )}
                  </small>
                </InpuitGroup>
              </Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <TabButton
                isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
                type="button"
              >
                <img src={boleto} alt="Boleto" />
                Boleto bancário
              </TabButton>
              <TabButton
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
                type="button"
              >
                <img src={cartao} alt="Cartão" />
                Cartão de crédito
              </TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <Row>
                      <InpuitGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage('cardOwner', form.errors.cardOwner)}
                        </small>
                      </InpuitGroup>
                      <InpuitGroup>
                        <label htmlFor="cpfCardOwner">
                          CPF do titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cpfCardOwner"
                          name="cpfCardOwner"
                          value={form.values.cpfCardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'cpfCardOwner',
                            form.errors.cpfCardOwner
                          )}
                        </small>
                      </InpuitGroup>
                    </Row>
                    <Row marginTop="24px">
                      <InpuitGroup>
                        <label htmlFor="cardDisplayName">Nome no cartão</label>
                        <input
                          type="text"
                          id="cardDisplayName"
                          name="cardDisplayName"
                          value={form.values.cardDisplayName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'cardDisplayName',
                            form.errors.cardDisplayName
                          )}
                        </small>
                      </InpuitGroup>
                      <InpuitGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'cardNumber',
                            form.errors.cardNumber
                          )}
                        </small>
                      </InpuitGroup>
                      <InpuitGroup maxWidth="123px">
                        <label htmlFor="expiresMoth">Mês do vencimento</label>
                        <input
                          type="text"
                          id="expiresMoth"
                          name="expiresMoth"
                          value={form.values.expiresMoth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'expiresMoth',
                            form.errors.expiresMoth
                          )}
                        </small>
                      </InpuitGroup>
                      <InpuitGroup maxWidth="123px">
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <input
                          type="text"
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'expiresYear',
                            form.errors.expiresYear
                          )}
                        </small>
                      </InpuitGroup>
                      <InpuitGroup maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage('cardCode', form.errors.cardCode)}
                        </small>
                      </InpuitGroup>
                    </Row>
                    <Row marginTop="24px">
                      <InpuitGroup maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          id="installments"
                          name="installments"
                          value={form.values.installments}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        >
                          <option>1x de R$ 200,00</option>
                          <option>2x de R$ 100,00</option>
                          <option>3x de R$ 66,66</option>
                        </select>
                        <small>
                          {getErrorMessage(
                            'installments',
                            form.errors.installments
                          )}
                        </small>
                      </InpuitGroup>
                    </Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a onfirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button type="submit" title="Cliquei aqui para finaliza a compra">
            Finalizar compra
          </Button>
        </form>
      )}
    </div>
  )
}
export default Checkout
