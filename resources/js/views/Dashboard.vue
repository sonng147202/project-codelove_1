<template>
<div class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <Preloader />

        <Navbar />

        <Sidebar />

        <div class="content-wrapper">
            <h1>Hi chào cậu!</h1>
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
}
</script>
