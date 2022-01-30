import styled from 'styled-components';

export const Container = styled.div`
  background: #c72828;
  padding: 30px;

  header {
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 0 160px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    nav {
      div {
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
      }
    }
  }

  @media(max-width: 600px) {
    padding: 20px;

    header {
      padding: 0 0 110px;
      flex-direction: column;

      nav {
        box-shadow: 0px 0px 28px -10px rgb(0 0 0 / 56%);
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1;
      }
    }
  }
`;
