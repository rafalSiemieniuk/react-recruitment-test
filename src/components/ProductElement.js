import React, { useCallback } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { debounce } from 'lodash';
import {
  checkProductAction,
  updateProductsAction,
} from 'store/actions/appAction';
import { useSelector } from 'react-redux';
import { getLastCheckProductMessage } from 'store/selectors/appSelector';
import styled from 'styled-components';

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100px;
`;

export const ProductElement = ({ pid, min, max, isBlocked, quantity }) => {
  const debouncedClick = useCallback(
    debounce((quantity) => {
      checkProductAction({ pid, quantity });
    }, 300),
    []
  );

  const addProduct = () => {
    const newQuantity = quantity + 1;
    debouncedClick(newQuantity);
    updateProductsAction({ pid, quantity: newQuantity });
  };

  const removeProduct = () => {
    const newQuantity = quantity ? quantity - 1 : 0;
    if (newQuantity) {
      debouncedClick(newQuantity);
      updateProductsAction({ pid, quantity: newQuantity });
    }
  };

  return (
    <>
      <StyledInfo>
        <div>Obecnie masz {quantity} sztuk produktu.</div>
        <div>
          Minimum {min}. Maximum {max}.
        </div>
      </StyledInfo>
      <StyledButtonsWrapper>
        <Fab
          size="small"
          color="primary"
          aria-label="add"
          disabled={isBlocked}
          onClick={addProduct}>
          <AddIcon />
        </Fab>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          disabled={isBlocked}
          onClick={removeProduct}>
          <RemoveIcon />
        </Fab>
      </StyledButtonsWrapper>
    </>
  );
};
