const initialState = {
    products: [],
    productToBeEdit: {}
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_PRODUCTS':
            return Object.assign({}, state, {
            });
        case 'ADD_PRODUCTS_SUCCESS':
            return Object.assign({}, state, {
            });
        case 'ADD_PRODUCTS_FAIL':
            return Object.assign({}, state, {
            });
        case 'GET_PRODUCTS':
            return Object.assign({}, state, {
                products: [],
            });
        case 'GET_PRODUCTS_SUCCESS':
            return Object.assign({}, state, {
                products: payload,
            });
        case 'GET_PRODUCTS_FAIL':
            return Object.assign({}, state, {
                products: [],
            });
        case 'DELETE_PRODUCTS':
            return Object.assign({}, state, {
                // products: [],
            });
        case 'DELETE_PRODUCTS_SUCCESS':
            return Object.assign({}, state, {
                products: state.products.filter((p) => p.id != payload),
            });
        case 'DELETE_PRODUCTS_FAIL':
            return Object.assign({}, state, {
                // products: [],
            });
        case 'GET_PRODUCTS_BY_ID':
            return Object.assign({}, state, {
                productToBeEdit: {},
            });
        case 'GET_PRODUCTS_SUCCESS_BY_ID':
            return Object.assign({}, state, {
                productToBeEdit: payload,
            });
        case 'GET_PRODUCTS_FAIL_BY_ID':
            return Object.assign({}, state, {
                productToBeEdit: {},
            });
        default:
            return state;
    }
};