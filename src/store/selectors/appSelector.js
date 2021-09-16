import { get } from 'lodash';

const STORE_PATH = 'app';

export const getProducts = (state) =>
    get(state, `${STORE_PATH}.products`, []);

export const getLastCheckProductMessage = (state) =>
    get(state, `${STORE_PATH}.lastCheckProductMessage`, {});

export const getProductsLoading = (state) =>
    get(state, `${STORE_PATH}.productsLoading`, false);

export const getLastCheckProductMessageLoading = (state) =>
    get(state, `${STORE_PATH}.lastCheckProductMessageLoading`, false);

