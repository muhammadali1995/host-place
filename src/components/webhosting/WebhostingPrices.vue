<template>
    <div class="bg-white py-12 sm:py-24">
        <div class="mx-auto max-w-7xl">
            <p class="text-center variant5">
                {{ $t('Webhosting Paketten') }}
            </p>
            <p class="text-center variant7">
                {{ $t('Snelle en stabiele shared webhosting oplossingen') }}
            </p>
            <div class="p-1 flex items-center bg-gray-150 max-w-fit mx-auto mt-7">
                <button :onclick="(e) => changeActiveTab(e, 1)" :class="(activeTab == 1) ? darkBtn : lightBtn">
                    {{ $t('Monthly') }}
                </button>
                <button :onclick="(e) => changeActiveTab(e, 2)" :class="(activeTab == 2) ? darkBtn : lightBtn">
                    {{ $t('Yearly') }}
                </button>
            </div>
            <div class="mt-10 flow-root lg:-mx-8">
                <div class="isolate grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 cont">
                    <div class="bg-primary p-2">
                        <h2 class="variant6 mt-64">
                            {{ $t('Key Features') }}
                        </h2>
                        <p class="mt-10 variant7">
                            {{ $t('Lorem ipsum dolor sit.') }}
                        </p>
                        <p class="mt-10 variant7">
                            {{ $t('Lorem ipsum dolor sit.') }}
                        </p>
                        <p class="mt-10 variant7">
                            {{ $t('Lorem ipsum dolor sit.') }}
                        </p>
                        <p class="mt-10 variant7">
                            {{ $t('Lorem ipsum dolor sit.') }}
                        </p>
                        <h2 class="variant6 mt-20">Advanced support</h2>
                        <p class="mt-10 variant7">
                            {{ $t('Lorem ipsum dolor sit.') }}
                        </p>
                        <p class="mt-10 variant7">
                            {{ $t('Lorem ipsum dolor sit.') }}
                        </p>
                        <p class="mt-10 variant7">
                            {{ $t('Lorem ipsum dolor sit.') }}
                        </p>
                        <p class="mt-10 variant7">
                            {{ $t('Lorem ipsum dolor sit.') }}
                        </p>
                    </div>
                    <div v-for="tier in tiers" :key="tier.id" class="bg-primary">
                        <div class="bg-white p-5">
                            <h3 :id="tier.id" class="font-semibold leading-7 text-gray-350">
                                {{ $t(tier.name) }}
                            </h3>
                            <p class="mt-4 mb-4 flex items-center gap-x-1">
                                <span class="text-4xl font-medium tracking-tight text-gray-350">
                                    {{ tier.price.monthly }}
                                </span>
                                <span class="text-sm font-semibold leading-6 text-gray-250 ml-3">
                                    / {{ $t('maand') }}
                                </span>
                            </p>
                            <div class="w-full px-4">
                                <button class="text-sm p-3 mt-7 w-full bg-secondary text-white hover:bg-gray-250">
                                    {{ $t('Bestel') }}
                                </button>
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center pt-20">
                            <img src="../../assets/tickLg.png" alt="tick" class="w-10">
                            <p class="mt-11 variant8">{{ tier.ram }}</p>
                            <ul role="list" class="text-sm leading-6 text-gray-600 flex items-center flex-col">
                                <li v-for="icon in tier.features.slice(0, 2)" :key="feature" class="mt-10">
                                    <img :src="icon" alt="icon">
                                </li>
                            </ul>
                            <ul role="list" class="text-sm mt-28 mb-4 leading-6 text-gray-600 flex items-center flex-col">
                                <li v-for="icon in tier.features.slice(2, 6)" :key="feature" class="mt-10">
                                    <img :src="icon" alt="icon">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import tick from '../../assets/tickLg.png'
import cross from '../../assets/cross.png'

let activeTab = 1

const darkBtn = 'px-5 py-2 text-sm bg-white text-gray-350 switch'
const lightBtn = 'px-5 py-2 text-sm bg-gray-150 text-gray-350 switch'

const changeActiveTab = (e, num) => {
    activeTab = num
    const btns = document.querySelectorAll('.switch')
    Array.from(btns).map(e => {
        e.className = lightBtn
    })
    e.target.className = darkBtn
}

const tiers = [
    {
        name: 'Starter',
        ram: '10 GB',
        price: { monthly: '€ 3,50' },
        features: [cross, cross, tick, cross, cross, cross],
    },
    {
        name: 'Nerd',
        ram: '20 GB',
        price: { monthly: '€ 5,50' },
        features: [tick, cross, tick, tick, tick, cross],
    },
    {
        name: 'Geek',
        ram: 'Unlimited',
        price: { monthly: '€ 7,50' },
        features: [tick, tick, tick, tick, tick, tick],
    },
]
</script>