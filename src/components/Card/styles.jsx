import styled, {css} from 'styled-components'

export const Box = styled.li`
  width: 90%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 2px dashed transparent;
  background: var(---white);
  box-shadow: 0px 4px 16px #EAE2FD;
  border-radius: 8px;

  cursor: grab;

  h3{
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 130%;
    color: var(---black);
  }
  p{
    font-size: 1.4rem;
    font-weight: 500;
    color: var(---black-light);
  }


  ${props => props.isDragging && css`
    border: 2px dashed rgba(0,0,0,0.2);
    border-radius: 0;
    background: transparent;
    cursor: grabbing;
    p, h3, div{
      opacity: 0;
    }
  `}
  @media screen and (max-width: 748px) {
    width: 300px;
    p{
      width: 260px;
    }
  }
`;

export const Label = styled.span`
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 50%;
  background: ${props => props.color};
`;

export const Tags = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  span{
    padding: 4px 8px;
    background: var(---purple-light);
    border-radius: 8px;
    font-size: 1.2rem;
    color: var(---purple);
  }
`;