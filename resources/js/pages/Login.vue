<template>
<div class="container">
    <div class="row justify-content-md-center">
        <div class="col-6">
            <div class="card card-default">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <form autocomplete="off" @submit.prevent="login" method="post">
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" class="form-control" v-model="password" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Signin</button>
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
            email: '',
            password: '',
        }
    },
    mounted() {
        //
    },
    methods: {
        async login() {
            // get the redirect object
            try {
                var app = this
                await this.$auth
                    .login({
                        data: {
                            email: app.email,
                            password: app.password
                        },
                        redirect: {name: 'dashboard'},
                        staySignedIn: true,
                        fetchUser: true
                    })
            }
            catch{
                console.log('ko thanh cong');
            }
        }
    }
}
</script>
