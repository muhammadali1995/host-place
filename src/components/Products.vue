<template>
    <div class="bg-white py-24 sm:py-32 mt-16">
        <div class="lg:px-32 md:px-20 sm:px-10 px-4">
            <h2 class="text-3xl text-center font-bold tracking-tight text-gray-350 sm:text-5xl">
                {{ $t('Overzicht van onze diensten') }}
            </h2>
            <ul role="list" class="mx-auto mt-20 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                <li v-for="person in people" :key="person.name" class="bg-primary">
                    <img class="aspect-[3/2] w-full object-cover" :src="person.imageUrl" alt="" />
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold leading-8 tracking-tight text-gray-350">{{ $t(person.name) }}</h3>
                        <p class="text-md leading-7 mt-1 text-gray-350">{{ $t(person.role) }}</p>
                        <button type="button"
                            class="bg-transparent px-4 py-2 text-sm text-secondary hover:text-gray-250 mt-1 border border-secondary">{{$t('Learn more')}}</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
import image from './../assets/image.png'
const people = [
    {
        name: 'VPS',
        role: 'Snelle betrouwbare VPS met root toegang zodat je alle vrijheid hebt om deze in te stellen hoe jo wilt',
        imageUrl: image,
    },
    {
        name: 'Webhosting',
        role: 'Snelle betrouwbare VPS met root toegang zodat je alle vrijheid hebt om deze in te stellen hoe jo wilt',
        imageUrl: image,
    },
    {
        name: 'Dedicated Server',
        role: 'Snelle betrouwbare VPS met root toegang zodat je alle vrijheid hebt om deze in te stellen hoe jo wilt',
        imageUrl: image,
    },
]
</script>