import store from 'store';
import { fetchProducts, checkProduct } from 'store/services/appService';
import {
  setProducts,
  setProductsLoading,
  setLastCheckProductMessage,
  setLastCheckProductMessageLoading,
} from 'store/reducers/appReducer';
import { errorToast } from 'helpers/errorToastHelper';
import ProductModel from 'models/ProductModel';

export const fetchProductsAction = async () => {
  try {
    store.dispatch(setProductsLoading(true));
    const response = await fetchProducts();
    const products = response.map((product) => new ProductModel(product));
    store.dispatch(setProducts(products));
  } catch (e) {
    errorToast('An unexpected error has occurred. We are sorry');
  } finally {
    store.dispatch(setProductsLoading(false));
  }
};

export const updateProductsAction = ({ pid, quantity }) => {
  const { products } = store.getState().app;
  const newProducts = products.map((product) =>
    product.pid === pid ? new ProductModel({ ...product, quantity }) : product
  );
  store.dispatch(setProducts(newProducts));
};

export const checkProductAction = async ({ pid, quantity }) => {
  try {
    store.dispatch(setLastCheckProductMessageLoading(true));
    const payload = JSON.stringify({ pid, quantity });
    const response = await checkProduct(payload);
    store.dispatch(setLastCheckProductMessage(response));
  } catch (e) {
    const { data } = e.response;
    store.dispatch(setLastCheckProductMessage(data));
    errorToast(data?.message);
    const { products } = store.getState().app;
    const newProducts = products.map((product) => {
      if (product.pid === pid) {
        return new ProductModel({ ...product, quantity: product.min });
      }
      return product;
    });
    store.dispatch(setProducts(newProducts));
  } finally {
    store.dispatch(setLastCheckProductMessageLoading(false));
  }
};
