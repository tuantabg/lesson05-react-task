import * as Types from "../constants/ActionTypes";

var initialState = [];

var product = (state = initialState, action) => {
    switch (action.type) {
        // default
        default :
            return [...state];
    }
};

export default product;