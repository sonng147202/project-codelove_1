import axios from "axios";

import {
	FETCH,
    FETCH_ONE,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT
} from "../actions/product";

const state = {
	products: [],
    product: {},
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
    [FETCH_ONE]: (state, product) => {
        state.product = product;
	},
};

const actions = {
    [FETCH]: ({ commit }) => {
        return axios.get('/auth/products')
                .then(response => commit('FETCH', response.data))
                .catch(error => console.log(error));
    },
    [FETCH_ONE]: ({ commit }, id) => {
        return axios.get(`/auth/products/show/${id}`)
                .then(response => commit('FETCH_ONE', response.data))
                .catch(error => console.log(error));
    },
    [ADD_PRODUCT]: ({}, data) => {
        return axios.post(`/auth/products/add`, data);
    },
    [DELETE_PRODUCT]({}, id) {
        axios.delete(`delete/${id}`)
            .then(() => this.dispatch('fetch'))
            .catch();
    },
    editUser({}, user) {
        axios.put(`${RESOURCE_USER}/${user.id}`, {
            name: user.name,
            email: user.email,
            password: user.password,
        })
            .then(() => this.dispatch('fetch'));
    },
    
};

export default {
	state,
	getters,
	actions,
	mutations,
};