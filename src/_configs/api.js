import Axios from "axios";

const instance = Axios.create({
    baseURL: "/",
    timeout: 1000,
});

const api = {
    getCustomer: () => instance.get(`/customer`),
};

export default api;
