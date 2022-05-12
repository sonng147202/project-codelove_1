<template>
<!-- Modal -->
<div class="modal fade" id="formAddProduct" tabindex="-1" aria-labelledby="formAddProductLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="formAddProductLabel">Add Product</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form @submit.prevent="addProduct" enctype="multipart/form-data">
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
import { mapActions } from 'vuex';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            formDataProduct: {
                categoryId: null,
                name: null,
                avatar: null,
                price: null,
                color: '#000000',
                size: null,
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
        ...mapActions(['ADD_PRODUCT']),
        addProduct() {
            const _this = this;
            const formData = new FormData();

            formData.append('category_id', this.formDataProduct.categoryId)
            formData.append('name', this.formDataProduct.name)
            formData.append('img', this.formDataProduct.avatar)
            formData.append('price', this.formDataProduct.price)
            formData.append('color', this.formDataProduct.color)
            formData.append('size', this.formDataProduct.size)

            _this.ADD_PRODUCT(formData)
                .then((response) => {
                    $('#formAddProduct').modal('hide');

                    for (var key of formData.keys()) {
                        formData.delete(key);
                    };
                    
                    _this.formDataProduct.categoryId = null;
                    _this.formDataProduct.name = null;
                    _this.formDataProduct.avatar = null;
                    _this.formDataProduct.price = null;
                    _this.formDataProduct.color = '#000000';
                    _this.formDataProduct.size = null;

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

    }
}
</script>

<style>

</style>
