<template>
    <div class="relative overflow-hidden  flex items-center justify-between py-24 flex-col lg:flex-row cont">
        <div>
            <h2 class="variant2">
                {{ $t('Voor developers, door developers') }}
            </h2>
            <p class="mt-6 variant3">
                {{ $t('API driven, hoge performance voor een aantrekkelijkeprijs') }}
            </p>
            <button type="button" class="bg-secondary px-5 py-2 text-md text-white hover:bg-gray-250 mt-14 mr-3">
                {{ $t('Join us now') }}
            </button>
            <button type="button" class="bg-transparent px-5 py-2 text-md text-secondary hover:bg-gray-150">
                {{ $t('Learn more') }}
            </button>
        </div>
        <img src="./../assets/image.png" alt="banner" class="mt-6 lg:mt-0">
    </div>
    <div class="flex justify-center pt-20 sm:gap-12 gap-5">
        <div v-for="product in products" :key="product.name"
            class="sm:gap-4 flex items-center flex-col justify-between variant4">
            <img v-bind:src="product.img" v-bind:alt="product.img" class="w-10 sm:w-auto">
            <h4>{{ $t(product.name) }}</h4>
        </div>
    </div>
</template>

<script setup>
import cloud from './../assets/cloud.png'
import server from './../assets/server.png'
import website from './../assets/website.png'

const products = [
    { name: 'VPS & Cloud', img: cloud },
    { name: 'Dedicated Server', img: server },
    { name: 'Website', img: website },
]
</script>