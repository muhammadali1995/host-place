<template>
    <div class="bg-white py-12 sm:py-24">
        <div class="mx-auto max-w-7xl">
            <p class="text-center variant5">
                {{ $t('Virtual Private Server') }}
            </p>
            <p class="text-center variant7">
                {{ $t('De basis voor ieder development project') }}
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
                <div class="isolate grid gap-2.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div v-for="tier in tiers" :key="tier.id" class="p-6 bg-primary">
                        <h3 :id="tier.id" class="text-3xl font-semibold leading-7 text-gray-350">{{ $t(tier.name) }}</h3>
                        <p :id="tier.id" class="text-gray-350">{{ $t(tier.ram) }}</p>
                        <p class="mt-4 mb-4 flex items-baseline gap-x-1">
                            <span class="text-4xl font-bold tracking-tight text-gray-350">{{ tier.price.monthly }}</span>
                            <span class="text-sm font-semibold leading-6 text-gray-350 ml-5">/ {{ $t('month') }}</span>
                        </p>
                        <ul role="list" class="mt-2.5 space-y-3 text-sm leading-6 text-gray-600">
                            <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                                <img src="../../assets/tick.png" class="h-6 w-6 flex-none text-gray-350" alt="image">
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
</template>
  
<script setup>
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
        name: 'Geeks',
        ram: '2GB Ram',
        href: '#',
        price: { monthly: '€9' },
        features: ['2 GB Ram', '2 CPU Cores', '25 GB SSD', 'No limit traffic'],
    },
    {
        name: 'Nerds',
        ram: '4GB Ram',
        href: '#',
        price: { monthly: '€19' },
        features: ['4 GB Ram', '4 CPU Cores', '50 GB SSD', 'No limit traffic'],
    },
    {
        name: 'Code Wizards',
        ram: '8GB Ram',
        href: '#',
        price: { monthly: '€29' },
        features: ['8 GB Ram', '6 CPU Cores', '75 GB SSD', 'No limit traffic'],
    },
    {
        name: 'Server Sorcerers',
        ram: '16GB Ram',
        href: '#',
        price: { monthly: '€49' },
        features: ['16 GB Ram', '8 CPU Cores', '100 GB SSD', 'No limit traffic'],
    },
]
</script>