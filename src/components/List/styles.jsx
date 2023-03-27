import styled from 'styled-components'
export const Container = styled.section`
  padding: 0 15px;
  height: 100%;
  .header{
    display: flex;
    align-items: center;
    height: 7.2rem;

    h2{
      font-size: 1.8rem;
      font-weight: 700;
      padding: 0 2.4rem;
    }

    button{
      border: 0;
      background: transparent;
      display: flex;
      align-items: center;
      color: var(---purple);
      font-size: 2.4rem;
      cursor: pointer;
      transition: .6s all;
    }
    &:hover, &:focus, &:active{
      filter: grayscale(.6)
    }
  }
  ul{
    display: flex;
    height: 60vh;
    gap: 1.6rem;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
`;

