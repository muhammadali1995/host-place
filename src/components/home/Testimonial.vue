<template>
    <div class="bg-primary pb-14 pt-5 cont testi">
        <h3 class="text-center mb-8 variant9">
            {{ $t('Testimonials van blije klanten zodra we die hebben') }}
        </h3>
        <swiper :loop="true" :space-between="10" id="swiper" class="max-w-[100vw] overflow-hidden">
            <SwiperSlide v-for="i in [1, 2]" :key="i">
                <div class="flex lg:flex-row flex-col-reverse sm:justify-between justify-center items-center">
                    <div class="relative max-w-[280px] mr-24">
                        <img src="../../assets/shadow.png" alt="image" class="absolute top-1 left-6">
                        <img src="../../assets/image.png" alt="image" class="relative">
                    </div>
                    <div class="flex-1">
                        <div class="flex gap-x-px text-secondary">
                            <StarIcon class="h-9 w-9 flex-none" aria-hidden="true" />
                            <StarIcon class="h-9 w-9 flex-none" aria-hidden="true" />
                            <StarIcon class="h-9 w-9 flex-none" aria-hidden="true" />
                            <StarIcon class="h-9 w-9 flex-none" aria-hidden="true" />
                            <StarIcon class="h-9 w-9 flex-none" aria-hidden="true" />
                        </div>
                        <blockquote class="mt-6 variant3">
                            <p>
                                “{{ $t(`Aliqua cupidatat id duis irure sunt exercitation voluptate cillum. Consectetur
                                                                ad ex
                                                                do in reprehenderit est dolor elit et exercitation do ad. Consectetur ad ex do in
                                                                reprehenderit est dolor elit et exercitation`) }}”</p>
                        </blockquote>
                        <div class="flex items-center justify-between">
                            <div class="mt-6 items-center gap-x-6">
                                <h4 class="font-bold text-xl text-gray-350"> {{ $t('Full name') }}</h4>
                                <div class="font-normal text-gray-350 text-md">{{ $t('Job title') }}</div>
                            </div>
                            <div class="flex items-center">
                                <button @click="() => slidePrev()">
                                    <img src="./../../assets/arrow-rectangle.png" alt="arrow">
                                </button>
                                <div class="w-2.5 h-2.5 bg-gray-150 ml-1.5 cursor-pointer" @click="paginate(0)">
                                </div>
                                <div class="w-2.5 h-2.5 bg-gray-150 ml-1.5 cursor-pointer" @click="paginate(1)">
                                </div>
                                <button @click="() => slideNext()">
                                    <img src="./../../assets/arrow-rectangle.png" alt="arrow" class="rotate-180 ml-1.5">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </swiper>
    </div>
    <h3 class="mt-20 text-center variant6">Partner van</h3>
    <div class="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 px-4 lg:px-28 mt-5">
        <img src="../../assets/partner1.png" alt="partner" class="mx-auto">
        <img src="../../assets/partner2.png" alt="partner" class="mx-auto">
        <img src="../../assets/partner3.png" alt="partner" class="mx-auto">
        <img src="../../assets/partner4.png" alt="partner" class="mx-auto">
        <img src="../../assets/partner5.png" alt="partner" class="mx-auto">
        <img src="../../assets/partner6.png" alt="partner" class="mx-auto">
    </div>
</template>
  

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
let activeSlide = ref(0)

const slideNext = () => {
    console.log(activeSlide)
    const swiper = document.getElementById('swiper')
    if (activeSlide.value === 1) {
        swiper.children[0].children[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        activeSlide.value = 0
    }
    else {
        swiper.children[0].children[1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        activeSlide.value = 1
    }
}
const slidePrev = () => {
    console.log(activeSlide)
    const swiper = document.getElementById('swiper')
    if (activeSlide.value === 0) {
        swiper.children[0].children[1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        activeSlide.value = 1
    }
    else {
        swiper.children[0].children[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        activeSlide.value = 0
    }
}
const paginate = (index) => {
    console.log('start')

    const swiper = document.getElementById('swiper')
    swiper.children[0].children[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    activeSlide.value = index
}
</script>