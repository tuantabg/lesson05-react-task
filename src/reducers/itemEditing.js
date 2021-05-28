import * as Types from "../constants/ActionTypes";

var initialState = {};

var itemEditing = (state = initialState, action) => {
    switch (action.type) {
        // UPDATE PRODUCT
        case Types.EDIT_PRODUCT:
            return action.product;

        // default
        default : return state;
    }
};

export default itemEditing;