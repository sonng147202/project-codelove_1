<template>
	<div class="wrapper">
        <Preloader/>

        <Navbar/>

        <Sidebar/>

        <div class="content-wrapper">
            {{context}}
        </div>

        <Footer/>
    </div>
</template>

<script>

import Preloader from '../components/admin/Preloader.vue';
import Navbar from '../components/admin/layouts/Navbar.vue';
import Sidebar from '../components/admin/layouts/Sidebar.vue';
import Footer from '../components/admin/layouts/Footer.vue';



export default {
    components: {
        Preloader,
        Navbar,
        Sidebar,
        Footer,
    },
    props: {
        context: {
            type: String,
        }
    },
    mounted() {
        console.log(this.template());
    }
}
</script>

<style>

</style>