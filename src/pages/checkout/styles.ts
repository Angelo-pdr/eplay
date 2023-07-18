import styled from 'styled-components'
import { colors } from '../../styles'

type InpuitGroupProps = {
  maxWidth?: string
}
type RowProps = {
  marginTop?: string
}
type TagProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;
`

export const InpuitGroup = styled.div<InpuitGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    height: 32px;
    width: 100%;
    padding: 0px 8px;
    border: 1px solid ${colors.white};
  }
`

export const TabButton = styled.button<TagProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) => (props.isActive ? colors.green : colors.black)};
  border: none;
  height: 32px;
  margin-right: 16px;
  padding: 0px 8px;
  cursor: pointer;
  img {
    margin-right: 8px;
  }
`

export const Button = styled.button`
  border: 2px solid ${colors.green};
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 16px;
  borde-radius: 8px;
  display: inline-block;
  border-radius: 8px;
  cursor: pointer;
`
