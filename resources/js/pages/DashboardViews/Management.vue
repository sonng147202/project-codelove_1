<template>
<div class="container">
    <div class="row mb-3">
        <div class="col">
            <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#formAddProduct">
                Add
            </button>
        </div>
    </div>
    <table class="table bg-white">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Avatar</th>
                <th scope="col">Price</th>
                <th scope="col">Color</th>
                <th scope="col">Size</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in StoreProducts" :key="index">
                <th scope="row">{{index}}</th>
                <td class="align-items">{{item.name}}</td>
                <td><img :src="'uploads/' + item.avatar" width="50" height="50"></td>
                <td>{{item.price}}</td>
                <td>{{item.color}}</td>
                <td>{{item.size}}</td>
                <td>
                    <button type="button" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
	<ModalAddProduct />
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import ModalAddProduct from "../../components/Modals/AddProduct.vue";
import ModalEditProduct from "../../components/Modals/EditProduct.vue";

export default {
    computed: {
        ...mapGetters('StoreProducts'),
    },
    data() {
        return {
            products: null,
        }
    },
    methods: {
        ...mapActions(['FETCH']),
    },
	components: {
		ModalAddProduct,
		ModalEditProduct
	}
}
</script>

<style>

</style>
