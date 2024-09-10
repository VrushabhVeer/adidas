import axios from "axios";
import {
  GET_MENSPRODUCT_FAILURE,
  GET_MENSPRODUCT_REQUEST,
  GET_MENSPRODUCT_SUCCESS,
  GET_SHOES_FAILURE,
  GET_SHOES_REQUEST,
  GET_SHOES_SUCCESS,
  GET_WOMENSPRODUCT_FAILURE,
  GET_WOMENSPRODUCT_REQUEST,
  GET_WOMENSPRODUCT_SUCCESS,
} from "./actionTypes";

const getMenProducts = (params) => (dispatch) => {
  dispatch({ type: GET_MENSPRODUCT_REQUEST });
  return axios
    .get("https://adidasapi-production.up.railway.app/mensproduct", params)
    .then((res) => {
      return dispatch({ type: GET_MENSPRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: GET_MENSPRODUCT_FAILURE });
    });
};

export { getMenProducts };

const getWomenProducts = (params) => (dispatch) => {
  dispatch({ type: GET_WOMENSPRODUCT_REQUEST });
  return axios
    .get("https://adidasapi-production.up.railway.app/womensproduct", params)
    .then((res) => {
      return dispatch({ type: GET_WOMENSPRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: GET_WOMENSPRODUCT_FAILURE });
    });
};

export { getWomenProducts };

const getShoesData = (params) => (dispatch) => {
  dispatch({ type: GET_SHOES_REQUEST });
  return axios
    .get("https://adidasapi-production.up.railway.app/shoes", params)
    .then((res) => {
      return dispatch({ type: GET_SHOES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: GET_SHOES_FAILURE });
    });
};

export { getShoesData };
