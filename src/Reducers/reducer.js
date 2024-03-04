const initialState = {
    products: [],
    productToBeEdit: {},
    topShopProducts: {},
    newProducts: {},
    loginData: {}
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'USER_LOGIN':
            return Object.assign({}, state, {
                loginData: {}
            });
        case 'USER_LOGIN_SUCCESS':
            return Object.assign({}, state, {
                loginData: payload
            });
        case 'USER_LOGIN_FAIL':
            return Object.assign({}, state, {
                loginData: {}
            });
        case 'ADD_PRODUCTS':
            return Object.assign({}, state, {
            });
        case 'ADD_PRODUCTS_SUCCESS':
            return Object.assign({}, state, {
            });
        case 'ADD_PRODUCTS_FAIL':
            return Object.assign({}, state, {
            });
        case 'UPDATE_PRODUCT':
            return Object.assign({}, state, {
            });
        case 'UPDATE_PRODUCT_SUCCESS':
            return Object.assign({}, state, {
                // update products arra
            });
        case 'UPDATE_PRODUCT_FAIL':
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
        case 'GET_TOP_SHOP_PRODUCTS':
            return Object.assign({}, state, {
                topShopProducts: {},
            });
        case 'GET_TOP_SHOP_PRODUCTS_SUCCESS':
            return Object.assign({}, state, {
                topShopProducts: payload,
            });
        case 'GET_TOP_SHOP_PRODUCTS_FAIL':
            return Object.assign({}, state, {
                topShopProducts: {},
            });
        case 'GET_NEW_PRODUCTS':
            return Object.assign({}, state, {
                newProducts: {},
            });
        case 'GET_NEW_PRODUCTS_SUCCESS':
            return Object.assign({}, state, {
                newProducts: payload,
            });
        case 'GET_NEW_PRODUCTS_FAIL':
            return Object.assign({}, state, {
                newProducts: {},
            });
        default:
            return state;
    }
};