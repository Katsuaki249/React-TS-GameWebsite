import styled from 'styled-components';

export const Container = styled.footer`

  display: flex;
  justify-content: center;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-image: url(https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/themes/gamehoak/images/codezeel/footer-bg.png);
  background-size: cover;

  .footer-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .grid-container {
    width: 75%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    padding: 7rem 0;
    
    ul {
      padding-top: 1.5rem;
    }
    
    li {
      padding-bottom: 1.5rem;
    }

    form {
      display: flex;
      width: 100%;
      button {
        background-color: white;
        width: 3rem;
        height: 3rem;
      }
    }

    input {
      height: 3rem;
      width: 20rem;;
      border: none;
      -webkit-appearance: none;
      -ms-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    imput::after {

    }
    
  }
  
  .copy-right {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 1rem 0;
    border-top: 1px solid ${({ theme }) => theme.colors.gray700};

    .content {
      display: flex;
      width: 75%;
      justify-content: space-between;
    }
  }

  @media (max-width: 560px) {

    .grid-container {
      width: 95%;
      display: flex;
      flex-direction: column;
    }

    li {
      display: none;
    }
  }
`;
