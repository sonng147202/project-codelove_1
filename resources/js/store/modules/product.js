import axios from "axios";

import {
	FETCH,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from "../actions/product";

const state = {
	products: [],
};

const getters = {
    StoreProducts: (state) => {
        return state.products;
    }
};

const mutations = {
	[FETCH]: (state, products) => {
        state.products = products;
	},
};

const actions = {
    [FETCH]: ({ commit }) => {
        return axios.get('/auth/products')
                .then(response => commit('FETCH', response.data))
                .catch(error => console.log(error));
    },
    [ADD_PRODUCT]: ({}, data) => {
        return axios.post(`/auth/products/add`, data)
            .then(() => this.dispatch('FETCH'))
            .catch(error => console.log(error));

    },
    [UPDATE_PRODUCT]: ({}, obj) => {
        return axios.post(`/auth/products/update/${obj.id}`, obj.data)
            .then(() => this.dispatch('FETCH'))
            .catch(error => console.log(error));
    },
    [DELETE_PRODUCT]({}, id) {
        axios.delete(`/auth/products/delete/${id}`)
            .then(() => this.dispatch('FETCH'))
            .catch(error => console.log(error));
    },
};

export default {
	state,
	getters,
	actions,
	mutations,
};