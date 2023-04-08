<template>
    <div class="bg-white py-24 sm:py-32 mt-16">
        <div class="cont">
            <h2 class="text-center variant5">
                {{ $t('Overzicht van onze diensten') }}
            </h2>
            <ul role="list" class="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <li v-for="product in products" :key="product.name" class="bg-primary">
                    <div class="overflow-hidden cursor-pointer">
                        <img class="aspect-[3/2] w-full object-cover hover:scale-105 duration-300" :src="product.imageUrl"
                            alt="image" />
                    </div>
                    <div class="p-6">
                        <h3 class="variant6">{{ $t(product.name) }}</h3>
                        <p class="mt-1 variant7">{{ $t(product.role) }}</p>
                        <button type="button"
                            class="bg-transparent px-4 py-2 text-sm text-secondary hover:text-gray-250 mt-1 border border-secondary">
                            {{ $t('Learn more') }}
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
import image from '../../assets/image.png'
const products = [
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