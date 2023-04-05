<script setup>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import Products from './components/Products.vue';
import Promises from './components/Promises.vue';
import Testimonial from './components/Testimonial.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>
<script>
export const theme = 'theme-default'
</script>


<template>
    <div class="max-w-[1440px] mx-auto">
        <Navbar />
        <Header />
        <Products />
        <Promises />
        <Testimonial />
        <Contact />
        <Footer />
    </div>
</template>