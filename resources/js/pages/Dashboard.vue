<template>
<div class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <Preloader />

        <Navbar />

        <Sidebar />

        <div class="content-wrapper text-center">
            <h1>Chào bạn <span class="text-danger">{{_user.name}}</span> nhé!</h1>
            <h3>Email của bạn là <span class="text-danger">{{_user.email}}</span> .</h3>
        </div>

        <Footer />

        <aside class="control-sidebar control-sidebar-dark"></aside>
    </div>
</div>
</template>

<script>
import Preloader from '../components/admin/Preloader.vue';
import Navbar from '../components/admin/layouts/Navbar.vue';
import Sidebar from '../components/admin/layouts/Sidebar.vue';
import Footer from '../components/admin/layouts/Footer.vue';

export default {
    computed: {
        _user() {
            return this.$auth.user() || {};
        }
    },
    data() {
        return {
            text: 'tẽt nào đó',
        }
    },
    components: {
        Preloader,
        Navbar,
        Sidebar,
        Footer,
    },
    mounted() {

    }
}
</script>
