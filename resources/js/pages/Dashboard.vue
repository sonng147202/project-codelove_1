<template>
<div class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <Navbar />

        <Sidebar />

        <div class="content-wrapper py-5">
            <router-view />
        </div>

        <Footer />

        <aside class="control-sidebar control-sidebar-dark"></aside>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Navbar from '../components/admin/layouts/Navbar.vue';
import Sidebar from '../components/admin/layouts/Sidebar.vue';
import Footer from '../components/admin/layouts/Footer.vue';

export default {
    created() {
        this.FETCH();
    },
    computed: {
        _user() {
            return this.$auth.user() || {};
        }
    },
    data() {
        return {
            text: 'text nào đó',
        }
    },
    components: {
        Navbar,
        Sidebar,
        Footer,
    },
    methods: {
        ...mapActions(['FETCH'])
    }
}
</script>
