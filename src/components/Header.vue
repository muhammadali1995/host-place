<template>
    <div class="relative overflow-hidden py-24 flex items-center justify-between px-4 xl:px-32 flex-col lg:flex-row">
        <div>
            <h2 class="text-4xl font-bold !leading-tight sm:text-6xl text-350">
                {{ $t('Voor developers, door developers') }}
            </h2>
            <p class="mt-6 text-xl leading-8 text-350">
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
        <div v-for="item in products" :key="item.name"
            class="text-sm sm:gap-4 font-normal flex items-center flex-col justify-between leading-6 text-gray-250">
            <img v-bind:src="item.img" v-bind:alt="item.img" class="w-10 sm:w-auto">
            <h4>{{ $t(item.name) }}</h4>
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