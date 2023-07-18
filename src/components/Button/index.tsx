import React from 'react'
import * as S from './styles'

export type Props = {
  type?: 'button' | 'link'
  title: string
  to?: string
  onclick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  children,
  onclick,
  variant = 'primary'
}: Props) => {
  if (type == 'button') {
    return (
      <S.ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onclick}
      >
        {children}
      </S.ButtonContainer>
    )
  }
  return (
    <S.ButtonLink type="link" to={to as string}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
