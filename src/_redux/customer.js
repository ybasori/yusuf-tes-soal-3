import api from "../_configs/api";

const GET_CUSTOMER_LOADING = "GET_CUSTOMER_LOADING";
const GET_CUSTOMER_SUCCESS = "GET_CUSTOMER_SUCCESS";
const GET_CUSTOMER_ERROR = "GET_CUSTOMER_ERROR";
const GET_CUSTOMER_RESET = "GET_CUSTOMER_RESET";

const ADD_CUSTOMER_LOADING = "ADD_CUSTOMER_LOADING";
const ADD_CUSTOMER_SUCCESS = "ADD_CUSTOMER_SUCCESS";
const ADD_CUSTOMER_ERROR = "ADD_CUSTOMER_ERROR";
const ADD_CUSTOMER_RESET = "ADD_CUSTOMER_RESET";

const EDIT_CUSTOMER_LOADING = "EDIT_CUSTOMER_LOADING";
const EDIT_CUSTOMER_SUCCESS = "EDIT_CUSTOMER_SUCCESS";
const EDIT_CUSTOMER_ERROR = "EDIT_CUSTOMER_ERROR";
const EDIT_CUSTOMER_RESET = "EDIT_CUSTOMER_RESET";

const DELETE_CUSTOMER_LOADING = "DELETE_CUSTOMER_LOADING";
const DELETE_CUSTOMER_SUCCESS = "DELETE_CUSTOMER_SUCCESS";
const DELETE_CUSTOMER_ERROR = "DELETE_CUSTOMER_ERROR";
const DELETE_CUSTOMER_RESET = "DELETE_CUSTOMER_RESET";

const initState = {
    isLoadingGetCustomer: false,
    customer: null,
    errorGetCustomer: null,
    isLoadingAddCustomer: false,
    successAddCustomer: null,
    errorAddCustomer: null,
    isLoadingEditCustomer: false,
    successEditCustomer: null,
    errorEditCustomer: null,
    isLoadingDeleteCustomer: false,
    successDeleteCustomer: null,
    errorDeleteCustomer: null,
};

const customer = (state = initState, action) => {
    switch (action.type) {
        case GET_CUSTOMER_LOADING:
            return {
                ...state,
                isLoadingGetCustomer: true,
                customer: null,
                errorGetCustomer: null,
            };

        case GET_CUSTOMER_SUCCESS:
            return {
                ...state,
                isLoadingGetCustomer: false,
                customer: action.payload.data,
                errorGetCustomer: null,
            };

        case GET_CUSTOMER_ERROR:
            return {
                ...state,
                isLoadingGetCustomer: false,
                customer: null,
                errorGetCustomer: action.payload,
            };

        case GET_CUSTOMER_RESET:
            return {
                ...state,
                isLoadingGetCustomer: false,
                customer: null,
                errorGetCustomer: null,
            };

        case ADD_CUSTOMER_LOADING:
            return {
                ...state,
                isLoadingAddCustomer: true,
                successAddCustomer: null,
                errorGetCustomer: null,
            };

        case ADD_CUSTOMER_SUCCESS:
            return {
                ...state,
                isLoadingAddCustomer: false,
                successAddCustomer: action.payload,
                errorAddCustomer: null,
            };

        case ADD_CUSTOMER_ERROR:
            return {
                ...state,
                isLoadingAddCustomer: false,
                successAddCustomer: null,
                errorAddCustomer: action.payload,
            };

        case ADD_CUSTOMER_RESET:
            return {
                ...state,
                isLoadingAddCustomer: false,
                successAddCustomer: null,
                errorAddCustomer: null,
            };

        case EDIT_CUSTOMER_LOADING:
            return {
                ...state,
                isLoadingEditCustomer: true,
                successEditCustomer: null,
                errorEditCustomer: null,
            };

        case EDIT_CUSTOMER_SUCCESS:
            return {
                ...state,
                isLoadingEditCustomer: false,
                successEditCustomer: action.payload,
                errorEditCustomer: null,
            };

        case EDIT_CUSTOMER_ERROR:
            return {
                ...state,
                isLoadingEditCustomer: false,
                successEditCustomer: null,
                errorEditCustomer: action.payload,
            };

        case EDIT_CUSTOMER_RESET:
            return {
                ...state,
                isLoadingEditCustomer: false,
                successEditCustomer: null,
                errorEditCustomer: null,
            };

        case DELETE_CUSTOMER_LOADING:
            return {
                ...state,
                isLoadingDeleteCustomer: true,
                successDeleteCustomer: null,
                errorDeleteCustomer: null,
            };

        case DELETE_CUSTOMER_SUCCESS:
            return {
                ...state,
                isLoadingDeleteCustomer: false,
                successDeleteCustomer: action.payload,
                errorDeleteCustomer: null,
            };

        case DELETE_CUSTOMER_ERROR:
            return {
                ...state,
                isLoadingDeleteCustomer: false,
                successDeleteCustomer: null,
                errorDeleteCustomer: action.payload,
            };

        case DELETE_CUSTOMER_RESET:
            return {
                ...state,
                isLoadingDeleteCustomer: false,
                successDeleteCustomer: null,
                errorDeleteCustomer: null,
            };
        default:
            return { ...state };
    }
};
export default customer;

export const getCustomer = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CUSTOMER_LOADING });
        const res = await api.getCustomer();
        dispatch({
            type: GET_CUSTOMER_SUCCESS,
            payload: { data: res.data.data },
        });
    } catch (err) {
        dispatch({ type: GET_CUSTOMER_ERROR, payload: err });
    }
};

export const addCustomer = (form) => async (dispatch) => {
    try {
        dispatch({ type: ADD_CUSTOMER_LOADING });
        const res = await api.addCustomer(form);
        dispatch({
            type: ADD_CUSTOMER_SUCCESS,
            payload: true,
        });
    } catch (err) {
        dispatch({ type: ADD_CUSTOMER_ERROR, payload: err });
    }
};

export const resetAddCustomer = () => async (dispatch) => {
    dispatch({ type: ADD_CUSTOMER_RESET });
};

export const editCustomer = (form) => async (dispatch) => {
    try {
        dispatch({ type: EDIT_CUSTOMER_LOADING });
        const res = await api.editCustomer(form);
        dispatch({
            type: EDIT_CUSTOMER_SUCCESS,
            payload: true,
        });
    } catch (err) {
        dispatch({ type: EDIT_CUSTOMER_ERROR, payload: err });
    }
};

export const resetEditCustomer = () => async (dispatch) => {
    dispatch({ type: EDIT_CUSTOMER_RESET });
};

export const deleteCustomer = (form) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_CUSTOMER_LOADING });
        const res = await api.deleteCustomer(form);
        dispatch({
            type: DELETE_CUSTOMER_SUCCESS,
            payload: true,
        });
    } catch (err) {
        console.log(err);
        dispatch({ type: DELETE_CUSTOMER_ERROR, payload: err });
    }
};

export const resetDeleteCustomer = () => async (dispatch) => {
    dispatch({ type: DELETE_CUSTOMER_RESET });
};
