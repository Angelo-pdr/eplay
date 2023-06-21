import React from 'react'
import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type?: 'button' | 'link'
  title: string
  to?: string
  onclick?: () => void
  children: string
}

const Tag = ({ type, title, to, children, onclick }: Props) => {
  if (type == 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onclick}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink type="link" to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Tag
