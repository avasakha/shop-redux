import { authenticationConstants } from "../_constants";
import { authenticationService } from "../_service";

export const authenticationAction = {
    login,
    register
}


function login (login,password,history) {
    return dispatch => {
        dispatch(request());
        authenticationService.login(login,password).then(
            response => {
                dispatch(success(response));
                history.push('/');
            },
            error =>{
                dispatch(failed(''));
            }
        )
    }


    function request() { return { type: authenticationConstants.LOGIN_REQUEST }; }
    function success(user) { return { type: authenticationConstants.LOGIN_SUCCESS,user }; }
    function failed(error) { return { type: authenticationConstants.LOGIN_SUCCESS,error }; }
}

function register (email,password,history) {
    return dispatch => {
        dispatch(request());
        authenticationService.register(email,password).then(
            response => {
                dispatch(success(response));
                 history.push('/');
            },
            error =>{
                dispatch(failed(''));
            }
        )
    }


    function request() { return { type: authenticationConstants.REGISTER_REQUEST }; }
    function success(user) { return { type: authenticationConstants.REGISTER_SUCCESS,user }; }
    function failed(error) { return { type: authenticationConstants.REGISTER_FAILED,error}}
}
