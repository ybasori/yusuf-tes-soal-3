import api from "../_configs/api";

const GET_CUSTOMER_LOADING = "GET_CUSTOMER_LOADING";
const GET_CUSTOMER_SUCCESS = "GET_CUSTOMER_SUCCESS";
const GET_CUSTOMER_ERROR = "GET_CUSTOMER_ERROR";
const GET_CUSTOMER_RESET = "GET_CUSTOMER_RESET";

const initState = {
    isLoadingGetCustomer: false,
    customer: null,
    errorGetCustomer: null,
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
        default:
            return { ...state };
    }
};
export default customer;

export const getCustomer = () => async (dispatch) => {
    try {
        console.log("ooo");
        dispatch({ type: GET_CUSTOMER_LOADING });
        const res = await api.getCustomer();
        dispatch({
            type: GET_CUSTOMER_SUCCESS,
            payload: { data: res.data },
        });
    } catch (err) {
        dispatch({ type: GET_CUSTOMER_ERROR, payload: err });
    }
};
