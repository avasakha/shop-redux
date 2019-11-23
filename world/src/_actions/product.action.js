import { productService } from "../_service";
import { authenticationConstants } from "../_constants";

export const productAction={
  productlist
}
function productlist(){
  return dispatch => {
    dispatch(request());
    productService.product().then(
      response => {
        dispatch(success(response));
        // history.push('/');
    },
    error =>{
        dispatch(failed(''));
    }
)
}
function request() { return { type: authenticationConstants.PRODUCT_REQUEST }; }
    function success(product) { return { type: authenticationConstants.PRODUCT_SUCCESS,product }; }
    function failed(error) { return { type: authenticationConstants.PRODUCT_SUCCESS,error }; }
}



  // console.log( productService.product().then())
  
  //   return {
  //       type: 'SHOW_PRODUCT',
  //       payload: productService.product().then(
  //         value => value.date
  //       ),
  //     }
  //   }
