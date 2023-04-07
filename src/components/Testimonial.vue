<template>
    <div class="bg-primary pb-14 pt-5 container">
        <h3 class="text-center mb-8 variant9">
            {{ $t('Testimonials van blije klanten zodra we die hebben') }}
        </h3>
        <swiper>
            <swiper-slide :ref_key="1" :virtual-index="1">
                <div class="flex lg:flex-row flex-col-reverse sm:justify-between justify-center items-center">
                    <div class="relative max-w-[280px] mr-24">
                        <img src="./../assets/shadow.png" alt="image" class="absolute top-4 left-6">
                        <img src="./../assets/image.png" alt="image" class="relative">
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
                                “{{ $t(`Aliqua cupidatat id duis irure sunt exercitation voluptate cillum. Consectetur ad ex
                                                                do in reprehenderit est dolor elit et exercitation do ad. Consectetur ad ex do in
                                                                reprehenderit est dolor elit et exercitation`) }}”</p>
                        </blockquote>
                        <div class="mt-6 items-center gap-x-6">
                            <h4 class="font-bold text-xl text-gray-350"> {{ $t('Full name') }}</h4>
                            <div class="font-normal text-gray-350 text-md">{{ $t('Job title') }}</div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <h3 class="mt-20 text-center variant6">Partner van</h3>
    <div class="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 px-4 lg:px-28 mt-5">
        <img src="./../assets/partner1.png" alt="partner" class="mx-auto">
        <img src="./../assets/partner2.png" alt="partner" class="mx-auto">
        <img src="./../assets/partner3.png" alt="partner" class="mx-auto">
        <img src="./../assets/partner4.png" alt="partner" class="mx-auto">
        <img src="./../assets/partner5.png" alt="partner" class="mx-auto">
        <img src="./../assets/partner6.png" alt="partner" class="mx-auto">
    </div>
</template>
  

<script>
import { StarIcon } from '@heroicons/vue/20/solid'
import { Swiper, SwiperSlide } from 'swiper/vue';
export default {
    components: {
        SwiperSlide,
        Swiper
    }
}
</script>