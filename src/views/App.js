import React, { useEffect } from 'react';
import { ProductElement } from 'components/ProductElement';
import { fetchProductsAction } from 'store/actions/appAction';
import { getProducts, getProductsLoading } from 'store/selectors/appSelector';
import { useSelector } from 'react-redux';
import { formatCurrency } from 'helpers/formatCurrencyHelper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledContentWrapper = styled.div`
  min-height: calc(100vh - 58px);
  margin-bottom: 78px;
`;

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    box-shadow: 0 0 10px 0 #000;
  }
  .Toastify__toast--error {
    background-color: #ffe4e4;
  }
`;

const StyledCircularProgressWrapper = styled.div`
  text-align: center;
  padding: 40px 0;
`;

const StyledCard = styled(Card)`
  margin: 20px auto;
  max-width: 600px;

  .title-product {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledTotalSumWrapper = styled(Card)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  border-top: 1px solid #000;
  height: 58px;
  text-align: center;
`;

const App = () => {
  const products = useSelector(getProducts);
  const isLoading = useSelector(getProductsLoading);

  useEffect(() => {
    fetchProductsAction();
  }, []);

  const calcTotalSum = () => {
    return products.reduce((prev, next) => prev + next.priceInNumber, 0);
  };

  return (
    <>
      <StyledContentWrapper>
        {isLoading ? (
          <StyledCircularProgressWrapper>
            <CircularProgress />
          </StyledCircularProgressWrapper>
        ) : (
          <ul>
            {products.map((product) => (
              <StyledCard key={product.pid}>
                <CardContent>
                  <div className="title-product">
                    <h3>{product.name}</h3>
                    <span>{product.actualPrice}</span>
                  </div>
                  <ProductElement
                    pid={product.pid}
                    min={product.min}
                    max={product.max}
                    isBlocked={product.isBlocked}
                    quantity={product.quantity}
                  />
                </CardContent>
              </StyledCard>
            ))}
          </ul>
        )}
      </StyledContentWrapper>
      <StyledTotalSumWrapper>
        <CardContent>Suma: {formatCurrency(calcTotalSum())}</CardContent>
      </StyledTotalSumWrapper>
      <StyledToastContainer />
    </>
  );
};

export { App };
