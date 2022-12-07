import axiosClient from "./axiosClient";

const ProductAPI = {
    getAll: () => {
        const url = '/products';
        return axiosClient.get(url);
    },

}


