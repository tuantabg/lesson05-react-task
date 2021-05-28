import {combineReducers} from "redux";
import products from "./product";
import itemEditing from "./itemEditing";

const appReducer = combineReducers({
    products : products,
    itemEditing : itemEditing
});

export default appReducer;