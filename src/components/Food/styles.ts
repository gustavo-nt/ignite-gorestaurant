import styled, { css } from 'styled-components';

interface FoodProps {
  available: boolean;
}

export const Container = styled.div<FoodProps>`
  background: #f0f0f5;
  border-radius: 8px;

  header {
    height: 188px;
    overflow: hidden;
    text-align: center;
    background: #ffb84d;
    transition: 0.3s opacity;
    border-radius: 8px 8px 0px 0px;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    ${props => !props.available &&
      css`
        opacity: 0.3;
      `
    };

    img {
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    padding: 30px;

    h2 {
      color: #3d3d4d;
    }

    p {
      color: #3d3d4d;

      margin-top: 16px;
    }

    .price {
      font-style: normal;
      line-height: 34px;
      font-size: 24px;
      color: #39b100;

      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 30px;
    background: #e4e4eb;
    border-radius: 0px 0px 8px 8px;

    div.icon-container {
      display: flex;

      button {
        border: none;
        padding: 10px;
        display: flex;
        background: #fff;
        transition: 0.1s;
        border-radius: 8px;

        svg {
          color: #3d3d4d;
        }

        & + button {
          margin-left: 6px;
        }
      }
    }

    div.availability-container {
      display: flex;
      align-items: center;

      p {
        color: #3d3d4d;
      }

      .switch {
        width: 88px;
        height: 32px;
        margin-left: 12px;
        position: relative;
        display: inline-block;

        & input {
          width: 0;
          height: 0;
          opacity: 0;
        }

        .slider {
          cursor: pointer;
          position: absolute;
          inset: 0 0 0 0;

          background-color: #c72828;
          -webkit-transition: 0.4s;
          border-radius: 16px;
          transition: 0.4s;

          &:before {
            content: '';
            width: 40px;
            height: 20px;

            position: absolute;
            bottom: 6px;
            left: 8px;

            -webkit-transition: 0.4s;
            background-color: white;
            border-radius: 10px;
            transition: 0.4s;
          }
        }

        input:checked + .slider {
          background-color: #39b100;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(32px);
          -ms-transform: translateX(32px);
          transform: translateX(32px);
        }
      }
    }
  }

  @media(max-width: 600px) {
    section.body {
      padding: 30px 20px;
    }
    
    section.footer {
      padding: 20px;
    }
  }
`;
