import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    padding: 25px 0;
    background: crimson;
`;

export const FooterWrapper = styled.footer`
    background: var(--darkgray);
    padding: 25px 0;
    color: white;
`;

export const Wrapper = styled.div`
    max-width: 1280px;
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
    background: var(--lightgray);
    padding: 15px;
    display: flex;

    &__container {
      display: flex;
      align-items: flex-start;
      flex-grow: 1;
    }

    &__content {
      margin-right: auto;
    }

    &__add {
      margin-left: 15px;
    }

    .price {
      margin-top: auto;
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

    &:not(:last-child) {
      margin-right: 15px;
    }

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }

  }
  
  h3 {

    &:not(:last-child) {
        margin-bottom: 8px;
    }
    
  }

  .price {
    color: var(--red);

    &:not(:last-child) {
      margin-bottom: 15px;
    }
    
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

  .extra {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &__checkbox {
      
      &:not(:last-child) {
        margin-right: 5px;
      }

    }
    
    &__label {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 5px;
      }

    }

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

`;

export const CartWrapper = styled.div`
  padding: 25px;
  background: var(--lightgray);
  min-width: 400px;

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

    &:not(:last-child) {
      margin-right: 15px;
    }

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

  .cart-buttons {
    display: flex;
    align-items: center;
    
    &:not(:last-child) {
      margin-right: 8px;
    }

    &__subtrackt,
    &__add {
      padding: 8px 12px;
    }

    &__subtrackt {
      padding: 7px 12px 9px;
    }
    
    &__add {
      padding: 8px 11px;
    }

    button {

      &:not(:last-child) {
        margin-right: 8px;
      }

    }

  }

  button {

    &.remove-button {
      padding: 8px 10px 6px;
    }

  }

`;

export const CartTotal = styled.div`
  
  ul {

    &:not(:last-child) {
      margin-bottom: 15px;
    }

  }

`;