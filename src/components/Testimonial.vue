<template>
    <section class="sm:px-8 bg-primary px-4 pb-14 pt-5 lg:px-28">
        <h3 class="text-center text-3xl text-gray-350 mb-8 font-bold">
            {{ $t('Testimonials van blije klanten zodra we die hebben') }}
        </h3>
        <figure class="flex justify-between items-center">
            <div class="relative w-72 mr-24">
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
                    class="mt-6 text-xl font-normal leading-8 tracking-tight text-gray-350 sm:text-2xl sm:leading-9">
                    <p>
                        “{{ $t('Aliqua cupidatat id duis irure sunt exercitation voluptate cillum. Consectetur ad ex do in reprehenderit est dolor elit et exercitation do ad. Consectetur ad ex do in reprehenderit est dolor elit et exercitation') }}”</p>
                </blockquote>
                <figcaption class="mt-10 flex items-center gap-x-6">
                    <img class="h-12 w-12 rounded-full bg-gray-50"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                        alt="" />
                    <div class="text-sm leading-6">
                        <div class="font-semibold text-gray-900">Judith Black</div>
                        <div class="mt-0.5 text-gray-600">CEO of Workcation</div>
                    </div>
                </figcaption>
            </div>
        </figure>
    </section>
</template>
  
<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'
</script>