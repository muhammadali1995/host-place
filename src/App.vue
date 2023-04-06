<script setup>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import Products from './components/Products.vue';
import Promises from './components/Promises.vue';
import Testimonial from './components/Testimonial.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Prices from './components/Prices.vue';
import VPS from './components/VPS.vue'
import Vragen from './components/Vragen.vue'
import Accordions from './components/Accordions.vue'
</script>
<script>
export const theme = 'theme-default'
</script>


<template>
    <div class="max-w-[1440px] mx-auto">
        <Navbar />
        <!-- <Header />
                    <Products />
                    <Promises />
                    <Testimonial />
                    <Contact /> -->
        <Prices />
        <VPS />
        <Promises />
        <Accordions />
        <Vragen />
        <Footer />
    </div>
</template>