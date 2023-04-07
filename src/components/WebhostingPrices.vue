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
                <button type="button" class="px-5 py-2 text-sm bg-white text-gray-350 hover:bg-gray-550 hover:text-white">{{
                    $t('Monthly') }}
                </button>
                <button type="button"
                    class="px-5 py-2 text-sm bg-gray-150 text-gray-350 hover:bg-gray-550 hover:text-white">{{
                        $t('Yearly') }}
                </button>
            </div>
            <div class="mt-10 flow-root lg:-mx-8">
                <div class="isolate grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container">
                    <div class="bg-primary p-2">
                        <h2 class="variant6 mt-40">Key Features</h2>
                        <p class="mt-10 variant7">Lorem ipsum dolor sit.</p>
                        <p class="mt-10 variant7">Lorem ipsum dolor sit.</p>
                        <p class="mt-10 variant7">Lorem ipsum dolor sit.</p>
                        <p class="mt-10 variant7">Lorem ipsum dolor sit.</p>
                        <h2 class="variant6 mt-20">Advanced support</h2>
                        <p class="mt-10 variant7">Lorem ipsum dolor sit.</p>
                        <p class="mt-10 variant7">Lorem ipsum dolor sit.</p>
                        <p class="mt-10 variant7">Lorem ipsum dolor sit.</p>
                        <p class="my-10 variant7">Lorem ipsum dolor sit.</p>
                    </div>
                    <div v-for="tier in tiers" :key="tier.id" class="bg-primary">
                        <div class="bg-white p-6">
                            <h3 :id="tier.id" class="font-semibold leading-7 text-gray-350">
                                {{ $t(tier.name) }}
                            </h3>
                            <p class="mt-4 mb-4 flex items-baseline gap-x-1">
                                <span class="text-4xl font-medium tracking-tight text-gray-350">
                                    {{ tier.price.monthly }}
                                </span>
                                <span class="text-sm font-semibold leading-6 text-gray-350 ml-3">/ {{ $t('month') }}</span>
                            </p>
                            <ul role="list" class="mt-2.5 space-y-3 text-sm leading-6 text-gray-600">
                                <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                                    <CheckCircleIcon class="h-6 w-6 flex-none text-gray-350" aria-hidden="true" />
                                    {{ $t(feature) }}
                                </li>
                            </ul>
                            <button class="w-full p-3 mt-7 text-secondary border border-secondary hover:text-gray-250">
                                {{ $t('Bestel') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const tiers = [
    {
        name: 'Starter',
        ram: '4GB Ram',
        href: '#',
        price: { monthly: '€ 3,50' },
        features: ['4 GB Ram', '4 CPU Cores', '50 GB SSD', 'No limit traffic'],
    },
    {
        name: 'Nerd',
        ram: '8GB Ram',
        href: '#',
        price: { monthly: '€ 5,50' },
        features: ['8 GB Ram', '6 CPU Cores', '75 GB SSD', 'No limit traffic'],
    },
    {
        name: 'Geek',
        ram: '16GB Ram',
        href: '#',
        price: { monthly: '€ 7,50' },
        features: ['16 GB Ram', '8 CPU Cores', '100 GB SSD', 'No limit traffic'],
    },
]
</script>