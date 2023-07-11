import styled from 'styled-components'
import { cores } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const InpuitGroup = styled.div`
  flex: auto;
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${cores.branca};
    height: 32px;
    width: 100%;
    padding: 0px 8px;
    border: 1px solid ${cores.branca};
  }
`
