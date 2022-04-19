<template>
<div class="container">
    <div class="row justify-content-md-center">
        <div class="col-6">
            <div class="card card-default">
                <div class="card-header">Register</div>
                <div class="card-body">
                    <form autocomplete="off" @submit.prevent="register" method="post">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" class="form-control" placeholder="Full Name" v-model="name">
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" class="form-control" v-model="password">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        register() {
            var app = this

            this.$auth
                .register({
                    data: {
                        name: app.name,
                        email: app.email,
                        password: app.password,
                    },
                    redirect: {
                        name: 'dashboard'
                    },
                    staySignedIn: true,
                    autoLogin: true,
                    fetchUser: true
                });
        }
    }
}
</script>
