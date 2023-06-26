import styled from "styled-components";
import { cores } from "../../styles";

export const Items = styled.ul`
  display: flex;
`

export const Item = styled.li`
  margin-right: 1rem;
  position: relative;
  > img {
    border: 2px solid ${cores.branca};
    border-radius: .5rem;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  cursor: pointer;
  transition: opacity .5s ease;

  &:hover {
    opacity: 1;
    transition: opacity .5s ease;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  width: 100%;
  position: relative;
  z-index: 1;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    h1{
      font-size: 18px;
      font-weight: bold;
    }
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
    cursor: pointer;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`
