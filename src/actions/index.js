import * as Types from "../constants/ActionTypes";
import callApi from "../utils/ApiCaller";

// Action fitch product request
export const actFitchProductRequest = () => {
    return (dispatch) => {
        return callApi("products", "GET", null).then(response => {
            dispatch(actFetchProduct(response.data));
        });
    }
};

// Action fetch product
export const actFetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products: products
    }
};

// Action delete product request
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, "DELETE", null).then(response => {
            dispatch(actDeleteProduct(id));
        });
    }
};

// Action delete product
export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id: id
    }
};

// Action add product request
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi("products", "POST", product).then(response => {
            dispatch(actAddProduct(response.data));
        });
    }
};

// Action add product
export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product: product
    }
};

// Action update product request
export const actEditProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, "GET", null).then(response => {
            dispatch(actEditProduct(response.data));
        });
    }
};

// Action update product
export const actEditProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product: product
    }
};

// Action update product request
export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, "PUT", product).then(response => {
            dispatch(actUpdateProduct(response.data));
        });
    }
};

// Action update product
export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product: product
    }
};