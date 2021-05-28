import * as Types from "../constants/ActionTypes";

var initialState = [];

var filterIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index
        }
    });
    return result;
}

var product = (state = initialState, action) => {
    var index = -1;
    var {id, product} = action;

    switch (action.type) {
        // LIST ALL
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...state];

        case Types.DELETE_PRODUCT:
            index = filterIndex(state, id);
            state.splice(index, 1);
            return [...state];

        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];

        case Types.UPDATE_PRODUCT:
            index = filterIndex(state, product.id);
            state[index] = product;
            return [...state];
        // default
        default :
            return [...state];
    }
};

export default product;