import { ADD_NEW_PRODUCT, GET_ALL_PRODUCTS } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const addNewProduct = (product) => async (dispatch) => {
  try {
    console.log(product);
    const { data } = await api.addProduct(product);
    dispatch({ type: ADD_NEW_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts();
    dispatch({ type: GET_ALL_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
