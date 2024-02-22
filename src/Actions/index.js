export const products = {
    addProducts: (data) => ({
        type: "ADD_PRODUCTS",
        payload: data
    }),
    addProductsSuccess: (data) => ({
        type: "ADD_PRODUCTS_SUCCESS",
        payload: {}
    }),
    addProductsFail: (error) => ({
        type: "ADD_PRODUCTS_FAIL",
        payload: {}
    }),
    getProducts: () => ({
        type: "GET_PRODUCTS",
        payload: {}
    }),
    getProductsSuccess: (data) => ({
        type: "GET_PRODUCTS_SUCCESS",
        payload: data
    }),
    getProductsFail: (error) => ({
        type: "GET_PRODUCTS_FAIL",
        payload: {}
    }),
    deleteProducts: (data) => ({
        type: "DELETE_PRODUCTS",
        payload: data
    }),
    deleteProductsSuccess: (data) => ({
        type: "DELETE_PRODUCTS_SUCCESS",
        payload: data
    }),
    deleteProductsFail: (error) => ({
        type: "DELETE_PRODUCTS_FAIL",
        payload: {}
    }),
    getProductsById: (data) => ({
        type: "GET_PRODUCTS_BY_ID",
        payload: data
    }),
    getProductsSuccessById: (data) => ({
        type: "GET_PRODUCTS_SUCCESS_BY_ID",
        payload: data
    }),
    getProductsFailById: (error) => ({
        type: "GET_PRODUCTS_FAIL_BY_ID",
        payload: {}
    }),
}