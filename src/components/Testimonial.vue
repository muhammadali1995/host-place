<template>
    <div class="sm:px-8 bg-primary px-4 pb-14 pt-5 lg:px-28">
        <h3 class="text-center text-3xl text-gray-350 mb-8 font-bold">
            {{ $t('Testimonials van blije klanten zodra we die hebben') }}
        </h3>
        <figure class="flex lg:flex-row flex-col-reverse sm:justify-between justify-center items-center">
            <div class="relative max-w-[280px] mr-24">
                <img src="./../assets/shadow.png" alt="image" class="absolute top-4 left-6">
                <img src="./../assets/image.png" alt="image" class="relative">
            </div>
            <div class="flex-1">
                <p class="sr-only">5 out of 5 stars</p>
                <div class="flex gap-x-px text-secondary">
                    <StarIcon class="h-9 w-9 flex-none" aria-hidden="true" />
                    <StarIcon class="h-9 w-9 flex-none" aria-hidden="true" />
                    <StarIcon class="h-9 w-9 flex-none" aria-hidden="true" />
                    <StarIcon class="h-9 w-9 flex-none" aria-hidden="true" />
                    <StarIcon class="h-9 w-9 flex-none" aria-hidden="true" />
                </div>
                <blockquote
                    class="mt-6 text-md font-normal leading-8 tracking-tight text-gray-350 sm:text-xl sm:leading-9">
                    <p>
                        “{{ $t('Aliqua cupidatat id duis irure sunt exercitation voluptate cillum. Consectetur ad ex do in reprehenderit est dolor elit et exercitation do ad. Consectetur ad ex do in reprehenderit est dolor elit et exercitation') }}”</p>
                </blockquote>
                <figcaption class="mt-6 items-center gap-x-6">
                        <h4 class="font-bold text-xl text-gray-350"> {{ $t('Full name') }}</h4>
                        <div class="text-gray-600 font-normal text-gray-350 text-md">{{ $t('Job title') }}</div>
                </figcaption>
            </div>
        </figure>
    </div>
    <h3 class="mt-20 text-2xl text-center font-semibold text-gray-350">Partner van</h3>
    <div class="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 px-4 lg:px-28 mt-5">
        <img src="./../assets/partner1.png" alt="partner" class="mx-auto">
        <img src="./../assets/partner2.png" alt="partner" class="mx-auto">
        <img src="./../assets/partner3.png" alt="partner" class="mx-auto">
        <img src="./../assets/partner4.png" alt="partner" class="mx-auto">
        <img src="./../assets/partner5.png" alt="partner" class="mx-auto">
        <img src="./../assets/partner6.png" alt="partner" class="mx-auto">
    </div>
</template>
  
<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'
</script>