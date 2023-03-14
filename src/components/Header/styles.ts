import styled, { css } from 'styled-components';

interface ContainerProps {
  isDropDownOpen: boolean;
}

export const Container = styled.header<ContainerProps>`

  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.gray500};

  .header-container {
    width: 75%;
    display: flex;
    justify-content: space-between;
  }

  .topbar-left {
    display: flex;
    gap: 1rem
  }

  .wishlist {
    padding-right: 1rem;
    border-right: 1px solid ${({ theme }) => theme.colors.gray700};
  }

  .need-help {
    
    span{
      display: flex;
      align-items: center;
    }

    span:hover {
      cursor: pointer;
    }

    svg {
      padding-left: 0.275rem; 
      transform: scale(150%);
      transition: 0.5s;
      ${({ isDropDownOpen }) =>
        isDropDownOpen
          ? css`
          transform: rotate3d(1, 0, 0, 180deg) scale(150%);
      `
          : css`
          transform: rotate3d(1, 0, 0, 0deg) scale(150%);
        `}
    }
  }
  .dropdown {

    ${({ isDropDownOpen }) =>
      isDropDownOpen
        ? css`
        height: 8.5rem;
      `
        : css`
        height: 0rem;
        opacity: 0;
        `}
        
        
    display: flex;
    flex-direction: column;
    align-items: start;  
    position: absolute;
    top: 3.125rem;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.purple};
    border: 2px solid ${({ theme }) => theme.colors.gray700};
    transition: 0.3s;

    ul {
      padding: 1rem;
      li {
        padding: 0.275rem;
        span {
          
        }
      }
    }
  }

  a:hover,
  span:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media (max-width: 720px) {

    .header-container {
      width: 95%;  
      justify-content: space-between;
    }
  }

  @media (max-width: 520px) {

    .header-container {
      justify-content: center;
    }

    .topbar-right {
      display: none;
    }
  }
`;
