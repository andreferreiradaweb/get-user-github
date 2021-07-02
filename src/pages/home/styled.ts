import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  padding: 50px;
  background: var(--white);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 16px 7px rgba(0,0,0,0.19);
`

export const HeaderContainer = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  img {
    width: 80px;
    height: 80px;
  }
  strong {
    font-size: 50px;
    line-height: 50px;
    font-weight: 800;
    color: var(--black);
  }
`

export const InputContainer = styled.div`

  button {
    padding: 10px;
    background: var(--blue);
    border: none;
    color: var(--white);
    cursor: pointer;
    text-transform: uppercase;
    font-size: 14px;
    margin-left: 5px;
    font-weight: 600;
    border-radius: 5px;

    &.loading {
      opacity: 0.7;
    }
  }
  input {
    padding: 7px;
    margin-right: 5px;
    border: 2px solid var(--blue);
    border-radius: 5px;

    &::placeholder {
      font-size: 13px;
      color: #d3d3d3;
    }
  }
  p {
    color: red;
    font-size: 12px;
    font-weight: 800;
    position: absolute;
  }
`