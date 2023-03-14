import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  flex-direction: row;
  width: 75%;

  .sidebar-btn {
    display: none;
    background: none;
    border: none;
    svg {
      color: white;
      font-size: 1.5rem;
    }
  }

  .navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .navbar-logo {
    display: flex;
    justify-content: space-between;
    with: 100%;
    padding: 15px ;

    span {
        font-size: 1.275rem;
        font-weight: 500;  
      }
  }

  nav {
    display: flex;
    justify-content: space-between;
    with: 100%;
    padding: 15px ;

    ul {
      display: flex;
      gap: 40px;
    }

    li {
      span {
        font-size: 1.275rem;
        font-weight: 500;  
      }
    }
  }

  .navbar-right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    button {
      svg {
        color: white;
        font-size: 1.5rem;
      }
    }

    svg {
      font-size: 1.5rem;
    }

    input {
      display: none;
    }
  }

  @media (max-width: 720px) {
    width: 95%;

    .sidebar-btn {
      display: block;
    }

    nav {
      display: none;
      li a {
        padding: 0.5rem;
      }
    }
  }

  @media (max-width: 520px) {

  }
`;
