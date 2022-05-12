import Vue from 'vue'
import Vuex from 'vuex'
import Product from './modules/product'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Product
    }
})