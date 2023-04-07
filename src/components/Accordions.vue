<template>
    <div class="px-4 lg:px-32">
        <h1 class="mt-4 lg:mt-16 text-center variant5">
            {{ $t('Veel gestelde vragen') }}
        </h1>
        <p class="mt-1.5 text-gray-350 text-center text-md mb-14">
            {{ $t('Exercitation dolore reprehenderit fugi') }}
        </p>
        <div v-for="item of arr" class="mt-6">
            <hr class="bg-gray-250 mb-6">
            <div class="flex items-start justify-between" :onclick="() => changeActive(item.id)">
                <div>
                    <p class="text-xl text-gray-350 font-semibold">
                        {{ $t(item.title) }}
                    </p>
                    <p v-if="activeTab === item.id"
                        class="text-xl text-gray-350 font-semibold">
                        {{ $t(item.subtitile) }}
                    </p>
                </div>
                <ArrowSmallDownIcon class="w-6 h-6" aria-hidden="true" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ArrowSmallDownIcon } from '@heroicons/vue/20/solid';
let activeTab = 1

const changeActive = (id) => {
    activeTab = id
}

const arr = [
    { id: 1, title: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?', subtitile: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?Eiusmod id laboris nulla dolor veniam nisi consequat velit est?' },
    { id: 2, title: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?', subtitile: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?Eiusmod id laboris nulla dolor veniam nisi consequat velit est?' },
    { id: 3, title: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?', subtitile: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?Eiusmod id laboris nulla dolor veniam nisi consequat velit est?' },
    { id: 4, title: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?', subtitile: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?Eiusmod id laboris nulla dolor veniam nisi consequat velit est?' },
    { id: 5, title: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?', subtitile: 'Eiusmod id laboris nulla dolor veniam nisi consequat velit est?Eiusmod id laboris nulla dolor veniam nisi consequat velit est?' },
]
</script>