<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

</script>


<template>
    <div class="max-w-[1440px] mx-auto">
        <Navbar />
        <RouterView />
        <Footer />
    </div>
</template>