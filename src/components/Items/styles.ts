import styled from 'styled-components'

export const Wrapper = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  > h1 {
    align-self: center;
    margin-bottom: 20px;
    margin-top: 35px;
    text-transform: uppercase;
  }
`
export const Title = styled.h1`
  align-self: center;
`
export const Container = styled.div`
  justify-content: center;
  display: flex;
  gap: 16px;
  > img {
    width: 500px;
    height: 500px;
    object-fit: cover;
  }
`

export const Imagem = styled.img``
