import Axios from "axios";

const instance = Axios.create({
    baseURL: "/",
    timeout: 1000,
});

const api = {
    getCustomer: () => instance.get(`/customer`),
    addCustomer: (data) => instance.post(`/customer`, data),
    editCustomer: (data) => instance.put(`/customer/${data.id}`, data),
    deleteCustomer: (data) => instance.delete(`/customer/${data}`),
};

export default api;
