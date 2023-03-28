import styled from "styled-components";

export const NavBar = styled.header`
  width: 100%;
  height: 14vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  h1 {
    font-size: 3.2rem;
    color: var(---black);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  h1 > svg {
    margin-left: 1.2rem;
    font-size: 1.8rem;
    color: #c7c7cd;
  }
  nav{
    cursor: pointer;
  }
  nav ul{
    display: none;
  }
  nav ul.open{
    animation: fade2 .6s linear forwards;
    position: absolute;
    right: 4rem;
    z-index: 999;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    align-items: flex-start;
    justify-content: center;
    gap:.8rem;
    background: var(---white);
    width: 140px;
    height: 140px;
    border: 0.7px solid #E3E3E3;
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.1);
    border-radius: 8px;
  }
  nav ul li{
    display: flex;
    align-items: center;
    gap: .4rem;
    font-size: 1.4rem;
    color: var(---black);
    transition: .6s all;
  }
  nav ul li:hover{
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
  nav ul li svg{
    font-size: 2rem;
  }
`;

export const Filter = styled.form`
  height: 4.8rem;
  padding: 0 4rem;
  display: flex;
  gap: 1.6rem;
  position: relative;
  button {
    border: none;
    border-radius: 5px;

    padding: 1.2rem 3.2rem;
    background-color: var(---purple);

    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 1.4rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: var(---white);
    cursor: pointer;
    transition: all 0.6s;
    svg {
      font-size: 2.4rem;
    }
    &:hover,
    &:focus,
    &:active {
      filter: grayscale(0.6);
    }
  }
  .input {
    position: relative;
    width: 100%;
    label {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 2.4rem;
      svg {
        font-size: 2.4rem;
        color: #505059;
      }
    }
    input {
      padding: 0 6rem;
      background: var(---white);
      border: 0.7px solid #e3e3e3;
      box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.1);
      border-radius: 8px;
      width: 100%;
      height: 100%;
      color: var(---black);
      font-size: 1.6rem;
      font-weight: 400;
      transition: all 0.6s;
      &:hover,
      &:focus {
        border: 0.7px solid var(---purple);
      }
    }
  }
  .filter{
    display: none;
    input[type="checkbox"] {
      display: none;
    }
    input:checked ~ label span {
      left: inherit;
      right: 2px;
      background-color: var(---purple);
    }
  }
  div.open{
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    justify-content: center;
    background-color: var(---white);
    width: 200px;
    height: 120px;
    padding: 0 2rem;
    border-radius: 5px;
    z-index: 100;
    animation: fade .4s linear forwards;
    .line{
      display: flex;
      justify-content: space-between;
      h3{
        font-size: 1.4rem;
        font-weight: 500;
        color: var(---black)
      }
    }
    @keyframes fade {
      0%{
        top: 60%;
        opacity: 0;
      }
      50%{
        top: 100%;
        opacity: 0.4;
      }
      100%{
        top: 120%;
        opacity: 1;
      }
    }
    @keyframes fade2 {
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }
  }
`;

export const Switch = styled.label`
  display: block;
  position: relative;
  width: 40px;
  height: 20px;
  background-color: var(---purple-light);
  border-radius: 999px;

  span {
    position: absolute;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(---bg-color);
    cursor: pointer;
  }

`;
