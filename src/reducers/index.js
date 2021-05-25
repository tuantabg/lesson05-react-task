import {combineReducers} from "redux";
import products from "./Product";

const appReducer = combineReducers({
    products : products
});

export default appReducer;