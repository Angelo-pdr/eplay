import styled from "styled-components";
import { cores } from "../../styles";

export const Items = styled.ul`
  display: flex;
`

export const Item = styled.li`
  margin-right: 1rem;
  img{
    border: 2px solid ${cores.branca};
    border-radius: .5rem;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`
