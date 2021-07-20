import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    padding: 25px 0;
    background: crimson;
`;

export const FooterWrapper = styled.footer`
    background: black;
    padding: 25px 0;
    color: white;
`;

export const Wrapper = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const MainWrapper = styled.div`
    padding: 70px 0;

    .main-inner {
      display: flex;
      align-items: flex-start;
      width: 100%;
    }

`;

export const RecipeListWrapper = styled.div`
  flex-grow: 1;

  .recipe {

    &__container {
      display: flex;
      background: var(--lightgray);
      padding: 15px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      margin-right: auto;
    }

    .price {
      margin-top: auto;
    }

    &__extra {
      display: none;
      padding: 15px;
    }

  }

  .is-open {

    .recipe__extra {
      display: block;
      font-size: 14px;
      background: var(--lightgray);
    }

  }

  &:not(:last-child) {
    margin-right: 15px;
  }
  
  ul {
    list-style: none;
  }

  li {

    &:not(:last-child) {
        margin-bottom: 15px;
    }
    
  }
`;

export const RecipeWrapper = styled.div`

  .recipe__image {
  }

  img {
  }
  
  h3 {

    &:not(:last-child) {
        margin-bottom: 8px;
    }
    
  }

  .price {
    color: var(--red);
  }

  .description {

    &:not(:last-child) {
      margin-bottom: 12px;
    }
    
  }

  .description,
  li {
    font-size: 14px;
  }

  button {
    padding: 9px 11px;
    background: var(--gray);

    &.close {
      padding: 9px 13px;
    }

    &:hover,
    &:focus {
      cursor: pointer;  
    }

  }

  ul {
    display: flex;
  }

  li {
    padding: 0;
  }

`;

export const CartWrapper = styled.div`
  padding: 25px;
  background: var(--lightgray);
  min-width: 350px;

  ul {
    display: flex;
    list-style: none;
  }

  li {

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  span {
    font-weight: bold;
  }

  .order-button {
    width: 100%;
    font-size: 16px;
    background: var(--red);
  }

`;

export const CartItems = styled.div`

  ul {
    display: flex;
    flex-direction: column;
  }
  
  li {
    padding: 15px 10px;
    background: var(--gray);
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    border-radius: 3px;

    &:last-child {
      margin-bottom: 25px;
    }
    
    &:not(:last-child) {
      margin-bottom: 15px;
    }

  }

  .cart-item {
    display: flex;
    flex-grow: 1;

    &__label,
    &__count {

      &:not(:last-child) {
        margin-right: 8px;
      }
      
    }

    &__price {
      font-weight: bold;
    }

  }

  button {
    padding: 8px 12px;
  }

`;

export const CartTotal = styled.div`
  
  ul {

    &:not(:last-child) {
      margin-bottom: 15px;
    }

  }

`;