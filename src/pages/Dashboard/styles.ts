import styled from 'styled-components';

export const FoodsContainer = styled.div`
  padding: 0 40px;
  
  > div {
    margin: 0 auto;
    padding: 40px 0;
    max-width: 1280px;
    margin-top: -140px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
  }

  @media(max-width: 1190px) {
    > div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media(max-width: 830px) {
    > div {
      display: flex;
      padding-bottom: 60px;
      flex-direction: column;
    }
  }

  @media(max-width: 600px) {
    padding: 0 20px; 
  }
`;
