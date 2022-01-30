import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  display: flex;
  padding: 48px 40px;
  flex-direction: column;
  background: #F0F0F5;
  border-radius: 8px;

  h1 {
    font-size: 36px;
    font-weight: 600;
    line-height: 36px;
    margin-bottom: 40px;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
  }

  button {
    border: 0;
    color: #fff;
    font-weight: 600;
    border-radius: 8px;
    background: #39b100;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      margin: 0 auto;
      padding: 16px 16px;
      background: #41c900;
      border-radius: 0 8px 8px 0;
    }
  }

  @media(max-width: 600px) {
    padding: 28px 20px;

    h1 {
      font-size: 28px;
      margin-bottom: 30px;
    }

    button {
      margin-top: 38px;
    }
  }
`;
