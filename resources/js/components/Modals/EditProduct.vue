<template>
<!-- Modal -->
<div class="modal fade" :id="'formUpdateProduct' + productItem.id" tabindex="-1" :aria-labelledby="'formUpdateProduct' + productItem.id + 'Label'" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" :id="'formUpdateProduct' + productItem.id + 'Label'">Update Product</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form @submit.prevent="updateProduct" enctype="multipart/form-data">
            <div class="modal-body">
                    <div class="form-group">
                        <label for="txtName">Name</label>
                        <input type="text" class="form-control" id="txtName" v-model="formDataProduct.name">
                    </div>
                    <div class="form-group">
                        <label for="txtCategories">Categories</label>
                        <select class="form-control" id="txtCategories" v-model="formDataProduct.categoryId">
                            <option v-for="(cat, index) in categories" :key="index" :value="cat.id">{{cat.name}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="txtFile">Avatar</label>
                        <input type="file" class="form-control-file" id="txtFile" @change="handleAvatar">
                    </div>
                    <div class="form-group">
                        <label for="txtPrice">Price</label>
                        <input type="text" class="form-control" id="txtPrice" v-model="formDataProduct.price">
                    </div>
                    <div class="form-group">
                        <label for="txtColor">Color</label>
                        <input type="color" class="form-control" id="txtColor" v-model="formDataProduct.color">
                    </div>
                    <div class="form-group">
                        <label for="txtSize">Size</label>
                        <input type="text" class="form-control" id="txtSize" v-model="formDataProduct.size">
                    </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2';

export default {
    computed: {
        ...mapGetters(['InfoProduct']),
    },
    data() {
        return {
            formDataProduct: {
                id: this.productItem.id,
                categoryId: this.productItem.category_id,
                name: this.productItem.name,
                avatar: this.productItem.avatar,
                price: this.productItem.price,
                color: this.productItem.color,
                size: this.productItem.size,
            },
            categories: null
        }
    },
    created() {
        const _this = this;
        axios.get('/auth/categories')
            .then(function (response) {
                _this.categories = response.data;
            })
    },
    methods: {
        ...mapActions(['UPDATE_PRODUCT']),
        updateProduct() {
            const _this = this;
            const formData = new FormData();

            formData.append('category_id', _this.formDataProduct.categoryId);
            formData.append('name', _this.formDataProduct.name);
            formData.append('img', _this.formDataProduct.avatar);
            formData.append('price', _this.formDataProduct.price);
            formData.append('color', _this.formDataProduct.color);
            formData.append('size', _this.formDataProduct.size);     
            _this.UPDATE_PRODUCT({id: _this.formDataProduct.id, data: formData})
                .then((response) => {
                    $(`#formAddProduct${_this.formDataProduct.id}`).modal('hide');

                    for (var key of formData.keys()) {
                        formData.delete(key);
                    };
                    
                    Swal.fire(
                        'Good job!',
                        response.data,
                        'success'
                    );
                })
        },
        handleAvatar(e) {
            this.formDataProduct.avatar = e.target.files[0];
        }
    },
    props: {
        productItem: Object,
    }
}
</script>

<style>

</style>
