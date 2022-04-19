<template>
<div class="hold-transition login-page">
    <div class="login-box">
        <div class="login-logo">
            <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in to start your session</p>

                <form autocomplete="off" @submit.prevent="login" method="post">
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email" v-model="email" required>
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password" v-model="password" required>
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mb-3">
                            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                        </div>
                    </div>
                </form>
                <a href="/register" class="text-center">Register a new membership</a>
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
                        redirect: {
                            name: 'dashboard'
                        },
                        staySignedIn: true,
                        fetchUser: true
                    })
            } catch {
                console.log('ko thanh cong');
            }
        },

    }
}
</script>
