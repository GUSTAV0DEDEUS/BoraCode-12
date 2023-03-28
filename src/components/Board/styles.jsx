import styled from 'styled-components'
export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 30px 0;
  height: calc(100% - (14vh + 4.8rem));

  @media screen and (max-width: 748px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    height: auto;
  }
`