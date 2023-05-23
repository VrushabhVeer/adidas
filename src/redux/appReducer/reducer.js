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

const initialState = {
  mensProduct: [],
  womensProduct: [],
  shoes: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // mens
    case GET_MENSPRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case GET_MENSPRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        mensProduct: [...payload],
        isError: false,
      };

    case GET_MENSPRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //   womens

    case GET_WOMENSPRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case GET_WOMENSPRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        womensProduct: [...payload],
        isError: false,
      };

    case GET_WOMENSPRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //   shoes

    case GET_SHOES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case GET_SHOES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        shoes: [...payload],
        isError: false,
      };

    case GET_SHOES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
