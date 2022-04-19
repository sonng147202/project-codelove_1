<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link :to="{name: 'home'}" class="navbar-brand">Home</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" v-if="$auth.check()">
            <li class="nav-item" v-for="(route, key) in routes.user" v-bind:key="route.path">
                <router-link :to="{ name : route.path }" :key="key" class="nav-link">{{route.name}}</router-link>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="!$auth.check()">
            <li class="nav-item" v-for="(route, key) in routes.unlogged" v-bind:key="route.path">
                <router-link :to="{ name : route.path }" :key="key" class="nav-link">{{route.name}}</router-link>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="$auth.check()">
            <li class="nav-item">
                <a class="nav-link" href="#" @click.prevent="$auth.logout()">Logout</a>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
    data() {
        return {
            routes: {
                // UNLOGGED
                unlogged: [{
                        name: 'Register',
                        path: 'register'
                    },
                    {
                        name: 'Login',
                        path: 'login'
                    }
                ],
                // LOGGED USER
                user: [{
                    name: 'Dashboard',
                    path: 'dashboard'
                }],
            }
        }
    },
    methods: {
        async logout() {
            await this.$auth
                .logout({
                    makeRequest: true,
                    redirect: {
                        name: 'home'
                    },
                });
        }
    },
    mounted() {
        //
    }
}
</script>

<style>
.navbar {
    margin-bottom: 30px;
}
</style>
