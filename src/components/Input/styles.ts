import styled, { css } from 'styled-components';

interface InputProps {
  isFocused: Boolean;
  isFilled: Boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  align-items: center;

  width: 100%;
  font-size: 16px;
  background: #fff;
  border-radius: 8px;
  padding: 18px 24px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    font-size: 36px;
    font-weight: 600;
    line-height: 36px;
    margin-bottom: 40px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    border: 0;
    color: #b7b7cc;
    background: transparent;

    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
