<template>
    <div class="bg-primary pb-14 pt-5 cont testi">
        <h3 class="text-center mb-8 variant9">
            {{ $t('Testimonials van blije klanten zodra we die hebben') }}
        </h3>
        <Swiper :space-between="10" id="swiper" class="max-w-[100vw] overflow-hidden isolate">
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
                                <div :class="'h-2.5 ml-1.5 cursor-pointer ' + ((slideIndex === 0) ? 'w-5 bg-gray-750' : 'w-2.5 bg-gray-150')"
                                    @click="slidePrev()">
                                </div>
                                <div :class="'h-2.5 ml-1.5 cursor-pointer ' + ((slideIndex === 1) ? 'w-5 bg-gray-750' : 'w-2.5 bg-gray-150')"
                                    @click="slideNext()">
                                </div>
                                <button @click="() => slideNext()">
                                    <img src="./../../assets/arrow-rectangle.png" alt="arrow" class="rotate-180 ml-1.5">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
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
let slideIndex = ref(0)

const slidePrev = () => {
    const swiper = document.querySelector('.swiper-wrapper')
    const swipe = document.getElementById('swiper')
    swiper.style.transform = `translate3d(0, 0px, 0px)`
    swiper.style.transitionDuration = '300ms'
    slideIndex.value = 0
}
const slideNext = () => {
    const swiper = document.querySelector('.swiper-wrapper')
    const swipe = document.getElementById('swiper')
    swiper.style.transform = `translate3d(-${swipe.getBoundingClientRect().width}px, 0px, 0px)`
    swiper.style.transitionDuration = '300ms'
    slideIndex.value = 1
}
</script>