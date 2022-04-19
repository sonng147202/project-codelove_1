<template>
<div class="hold-transition register-page">
    <div class="register-box">
        <div class="register-logo">
            <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>

        <div class="card">
            <div class="card-body register-card-body">
                <p class="login-box-msg">Register a new membership</p>

                <form autocomplete="off" @submit.prevent="register" method="post">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Full name" v-model="name">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email" v-model="email">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password" v-model="password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mb-3">
                            <button type="submit" class="btn btn-primary btn-block">Register</button>
                        </div>
                    </div>
                </form>

                <a href="/login" class="text-center">I already have a membership</a>
            </div>
            <!-- /.form-box -->
        </div><!-- /.card -->
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
        async register() {
            var app = this
            try {
                await this.$auth
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
            } catch {
                console.log('ko đc r');
            }

        }
    }
}
</script>
