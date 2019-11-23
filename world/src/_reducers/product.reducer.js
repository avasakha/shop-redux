import { authenticationConstants } from "../_constants";

const initialState = { loginRequest: false, product:[] };

export const productReducer = (state = initialState, action) => {

    const { type, product, error } = action;
    switch (type) {
      case authenticationConstants.PRODUCT_REQUEST:

          return { ...state, loginRequest: true };
      case authenticationConstants.PRODUCT_SUCCESS:

          return { ...state, loginRequest: false, product};
      case authenticationConstants.PRODUCT_FAILED:
          return {...state,loginRequest: false, error};
          default:
              return state
  }
}


