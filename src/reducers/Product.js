import * as Types from "../constants/ActionTypes";

var initialState = [
    {
        id: 1,
        code: 1,
        name: "Iphone 7",
        description: "San xuat tai Viet Nam",
        price: 9000000,
        status: true
    },
    {
        id: 2,
        code: 2,
        name: "Samsung 10",
        description: "San xuat tai Han Quoc",
        price: 7000000,
        status: true
    },
    {
        id: 3,
        code: 3,
        name: "Remmi note 5",
        description: "San xuat tai China",
        price: 4000000,
        status: false
    },
];

var appReducer = (state = initialState, action) => {
    switch (action.type) {
        // LIST ALL
        case Types.LIST_PRODUCT_ALL:
            return [...state];

        // default
        default : return [...state];
    }
};

export default appReducer;