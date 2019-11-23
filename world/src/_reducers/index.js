import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import {   productReducer } from "./product.reducer";
import {Cartreducer} from "./cart.reducer"
const rootReducer = combineReducers({
    authentication,
    productReducer,
    Cartreducer
});

export default rootReducer;
